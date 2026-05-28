
export function encodeArray(numbers: number[]): string {
  if (numbers.length === 0) return '';
  numbers = [...numbers].sort((a, b) => a - b);

  // Encontrar el mínimo
  const min = numbers[0];
  // Calcular diferencias respecto al mínimo
  const deltas = numbers.slice(1).map(n => n - min);
  
  // El primer valor es el mínimo completo (4 bytes, big-endian)
  const buffer = new ArrayBuffer(4 + 3 * deltas.length);
  const view = new DataView(buffer);
  
  // Escribir mínimo (32 bits)
  view.setUint32(0, min, false);
  
  // Escribir cada delta en 24 bits (3 bytes), big-endian
  deltas.forEach((delta, i) => {
    if (delta > 0xFFFFFF) throw new Error('Delta demasiado grande');
    const offset = 4 + i * 3;
    view.setUint8(offset,     (delta >> 16) & 0xFF);
    view.setUint8(offset + 1, (delta >> 8)  & 0xFF);
    view.setUint8(offset + 2,  delta        & 0xFF);
  });
  
  // Convertir a Base64URL
  const bytes = new Uint8Array(buffer);
  return uint8ToBase64url(bytes);
}

export function decodeArray(encoded: string): number[] {
    if (encoded == null || encoded.length == 0) return [];
    const bytes = base64urlToUint8(encoded);
    if (bytes.length < 4 || (bytes.length - 4) % 3 !== 0) throw new Error('Formato inválido');

    const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    const min = view.getUint32(0, false);

    const deltas: number[] = [];
    for (let i = 4; i < bytes.length; i += 3) {
    const delta = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        deltas.push(delta);
    }
    return [min].concat(deltas.map(d => d + min));
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