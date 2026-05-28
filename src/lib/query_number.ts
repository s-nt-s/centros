const BITS = 20;
const MAX_VAL = (1 << BITS) - 1; // 1_048_575

export function encodeArray(numbers: number[]): string {
  if (numbers.length === 0) return '';

  // Ordenar igual que antes
  numbers = [...numbers].sort((a, b) => a - b);

  // Verificar que ningún número exceda el máximo permitido
  if (numbers[numbers.length - 1] > MAX_VAL) {
    throw new Error('Número fuera de rango (0-999999)');
  }

  const n = numbers.length;

  // --- Construir el flujo de bits ---
  // Cabecera: cantidad de elementos (16 bits, big-endian)
  const headerBits = 16;
  const totalBits = headerBits + n * BITS;
  const totalBytes = Math.ceil(totalBits / 8);
  const buffer = new ArrayBuffer(totalBytes);
  const view = new DataView(buffer);

  // Escribir la cantidad (16 bits)
  view.setUint16(0, n, false);

  // Escribir cada número en 20 bits, uno tras otro
  let bitOffset = headerBits; // empezamos después de la cabecera
  for (const num of numbers) {
    writeBits(view, num, bitOffset, BITS);
    bitOffset += BITS;
  }

  // Convertir a Base64URL (aprovechando tus helpers)
  const bytes = new Uint8Array(buffer);
  return uint8ToBase64url(bytes);
}

export function decodeArray(encoded: string): number[] {
  if (!encoded) return [];

  const bytes = base64urlToUint8(encoded);
  const totalBits = bytes.length * 8;
  if (totalBits < 16) throw new Error('Formato inválido');

  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);

  // Leer cantidad de elementos (16 bits)
  const n = view.getUint16(0, false);
  const neededBits = 16 + n * BITS;
  if (totalBits < neededBits) throw new Error('Formato inválido');

  const numbers: number[] = [];
  let bitOffset = 16;
  for (let i = 0; i < n; i++) {
    const num = readBits(view, bitOffset, BITS);
    numbers.push(num);
    bitOffset += BITS;
  }

  return numbers; // ya están ordenados porque los codificamos ordenados
}

// ---------- Utilidades bit a bit (big-endian) ----------
function writeBits(view: DataView, value: number, bitOffset: number, numBits: number) {
  let remaining = numBits;
  let val = value;
  while (remaining > 0) {
    const byteIdx = Math.floor(bitOffset / 8);
    const bitInByte = bitOffset % 8;
    const bitsFreeInThisByte = 8 - bitInByte;
    const bitsToWriteNow = Math.min(remaining, bitsFreeInThisByte);

    // Máscara para los bits que vamos a escribir
    const shift = remaining - bitsToWriteNow;
    const piece = (val >> shift) & ((1 << bitsToWriteNow) - 1);

    // Desplazar la pieza a la posición correcta dentro del byte
    const byteShift = bitsFreeInThisByte - bitsToWriteNow;
    const currentByte = view.getUint8(byteIdx);
    const mask = ~(((1 << bitsToWriteNow) - 1) << byteShift);
    view.setUint8(byteIdx, (currentByte & mask) | (piece << byteShift));

    bitOffset += bitsToWriteNow;
    remaining -= bitsToWriteNow;
    // No necesitamos modificar 'val' porque ya tomamos los bits altos con el shift
  }
}

function readBits(view: DataView, bitOffset: number, numBits: number): number {
  let result = 0;
  let bitsRead = 0;
  while (bitsRead < numBits) {
    const byteIdx = Math.floor(bitOffset / 8);
    const bitInByte = bitOffset % 8;
    const bitsAvailable = 8 - bitInByte;
    const bitsToRead = Math.min(numBits - bitsRead, bitsAvailable);

    const currentByte = view.getUint8(byteIdx);
    const shift = bitsAvailable - bitsToRead;
    const piece = (currentByte >> shift) & ((1 << bitsToRead) - 1);

    result = (result << bitsToRead) | piece;
    bitsRead += bitsToRead;
    bitOffset += bitsToRead;
  }
  return result;
}

// ===================== HELPERS BASE64URL =====================
function uint8ToBase64url(bytes: Uint8Array): string {
    // Convertir Uint8Array a cadena binaria
    let binString = '';
    bytes.forEach(byte => binString += String.fromCharCode(byte));
    // Codificar en Base64 estándar y luego hacerla URL-safe
    const base64 = btoa(binString);
    return base64
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');            // eliminamos el relleno '='
}

function base64urlToUint8(base64url: string): Uint8Array {
    // Reconstruir Base64 estándar
    let base64 = base64url.replace(/-/g, '+').replace(/_/g, '/');
    while (base64.length % 4 !== 0) {
        base64 += '=';                  // añadir padding si falta
    }
    const binString = atob(base64);
    // Convertir cadena binaria a Uint8Array
    return Uint8Array.from(binString, c => c.charCodeAt(0));
}