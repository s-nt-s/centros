
import {
  dateToString,
} from "./util";
import { State } from "./state";
import type { EstadoCentros } from './tp'
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import type { Centro } from './supabaseClient'
import { tooltip } from "leaflet";


const applyHeaderStyle = (row: ExcelJS.Row) => {
    row.eachCell((cell) => {
        cell.font = {
            bold: true,
            color: { argb: "FFFFFFFF" }
        };

        cell.fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "FF000000" }
        };

        cell.alignment = {
            vertical: "middle",
            horizontal: "center",
            wrapText: true
        };
    });
};

const applySectionStyle = (cell: ExcelJS.Cell) => {
    cell.font = {
        bold: true,
        color: { argb: "FFFFFFFF" }
    };

    cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FF555555" }
    };

    cell.alignment = {
        vertical: "middle",
        horizontal: "left"
    };
};

const setAutoFilter = (ws: ExcelJS.Worksheet) => {
   const header = ws.getRow(1);
    applyHeaderStyle(header);
    ws.views = [
        {
            state: "frozen",
            ySplit: 1,
            xSplit: 2
        }
    ];

    const lastRow = ws.lastRow?.number ?? 1;
    const lastCol = ws.lastColumn?.number ?? 1
    ws.autoFilter = {
        from: { row: 1, column: 1 },
        to:   { row: 1, column: lastCol }
    };
};


const addSection = (
    ws: ExcelJS.Worksheet,
    title: string,
    rows: (string|number)[][]
) => {
    if (!rows.length) return;
    const row = ws.addRow([""]);
    const rowIndex = row.number;
    ws.mergeCells(rowIndex, 1, rowIndex, rows[0].length);

    const cell = row.getCell(1);

    cell.value = title;

    applySectionStyle(cell);

    row.height = 22;

    ws.addRows(rows);
};


const autofit = (ws: ExcelJS.Worksheet, ...widths: number[]) => {
    ws.eachRow((row, r) => {
        row.eachCell((cell, c) => {
            cell.font = {
                ...(cell.font ?? {}),
                name: "Consolas"
            };
        });
    });
    ws.columns.forEach((column, index) => {
        if (!column.eachCell) {
            return;
        }
        let w = widths[index];
        if (w != undefined) {
            column.width = w;
            return;
        }

        let max = 4;

        column.eachCell({ includeEmpty: true }, (cell) => {
            const value = cell.value?.toString() ?? "";

            const lines = value.split("\n");

            for (const line of lines) {
                max = Math.max(max, line.length);
            }
        });

        column.width = max + 2;
    });

    ws.eachRow((row, r) => {
        let maxLines = 1;

        row.eachCell((cell, c) => {
            if (r>1 && c == 1) {
                console.log(cell.value);
                cell.alignment = {
                    vertical: "middle",
                    horizontal: "center",
                    wrapText: true
                }
                return;
            }
            const value = cell.value?.toString() ?? "";

            maxLines = Math.max(
                maxLines,
                value.split("\n").length
            );

            cell.alignment = {
                vertical: "top",
                wrapText: true
            };
        });

        row.height = Math.max(20, maxLines * 15);
    });
};

export async function dwnXlsxCentros(this: HTMLAnchorElement) {
    const ST = State.getState();
    const INFO = ST.get_estadistica();

    const date = dateToString(new Date());
    const resumen = getResumen(ST, date, INFO);

    const workbook = new ExcelJS.Workbook();

    const ok = workbook.addWorksheet("Seleccionados");
    const ko = workbook.addWorksheet("Descartados");
    const rs = workbook.addWorksheet("Resumen");

    rs.addRow([resumen]);

    const cols = [
        "⚙",
        "ID",
        "Tipo",
        "Nombre",
        "Dirección",
        "Web",
        "Mail",
        "Teléfono"
    ];

    if (INFO.distancias != null) {
        const delta = 1000000;
        const lat = Math.round(INFO.distancias.latitud*delta)/delta;
        const lon = Math.round(INFO.distancias.longitud*delta)/delta;
        cols.push(
            `Distancia en kms a\nlatitud=${lat}\nlongitud=${lon}`
        );
    }

    ok.addRow(cols).getCell(1).note="⭐ Seleccionado por mi\n🔍 Seleccionado por el filtro";
    ko.addRow(cols).getCell(1).note="❌ Descartado por mi\n🚫 Descartado por el filtro";;

    const toRow = (c: Centro) => {
        const row: (string | number|any)[] = [
            {
                text: c.id,
                hyperlink: `https://gestiona.comunidad.madrid/wpad_pub/run/j/MostrarFichaCentro.icm?cdCentro=${c.id}`,
                numFmt: '0',
            },
            c.tp.abr,
            c.nombre,
            c.direccion,
            c.web.flatMap(w=>{
                if (w.includes("www.madrid.es")) return [];
                return w.replace(/^https?:\/\//, "");
            }).join("\n"),
            c.emails.join("\n"),
            c.telefonos.join("\n")
        ];

        if (INFO.distancias != null) {
            row.push(INFO.distancias.centro.get(c.id)!);
        }

        return row;
    };


    ok.addRows(
         INFO.seleccionados.map(toRow).map(r=>{
            return ["⭐"].concat(r)
         })
    );
    ok.addRows(
         INFO.shown.map(toRow).map(r=>{
            return ["🔍"].concat(r)
         })
    );

    ko.addRows(
         INFO.descartados.map(toRow).map(r=>{
            return ["❌"].concat(r)
         })
    );
    ko.addRows(
         INFO.hidden.map(toRow).map(r=>{
            return ["🚫"].concat(r)
         })
    );


    autofit(ok, 8, 10, 10);
    autofit(ko, 8, 10, 10);
    autofit(rs);
    setAutoFilter(ok);
    setAutoFilter(ko);

    const buffer = await workbook.xlsx.writeBuffer();

    saveAs(
        new Blob([buffer]),
        `${date}_centros.xlsx`
    );
}


function getResumen(st: State, date: string, info: EstadoCentros) {
    const invertir = st.invertir.get() === true;
    const tipos = (invertir?st.tipo.getKoInputs():st.tipo.getOkInputs()).map(i=>i.title);
    if (tipos.length == 0) return "Ocultar todos";
    const kms = st.kms.get();
    const filtro = [];
    const accesibilidad = st.accesible.get() === (!invertir);
    if (accesibilidad) {
      filtro.push("* Centros sin barreras arquitectónicas");
    }
    if (kms!=null) {
      filtro.push("* Centros a "+(invertir?"más":"menos")+" de " + kms + " metros de una estación");
    }
    document.querySelectorAll("#settings select").forEach(s=>{
      if (!(s instanceof HTMLSelectElement) || s.value.trim().length == 0) return [];
      const opts = Array.from(s.options).filter(o=>o.value.trim().length > 0);
      const label = s.getAttribute("data-label")||"";
      const opt = s.selectedOptions[0];
      if (opts.length == 2) {
        const o = invertir?opts.filter(o=>!o.selected)[0]:opt;
        filtro.push("* " +label+ o.textContent);
        return;
      }
      if (invertir) {
        filtro.push("* " +label+"Cualquiera menos: " +opt.textContent);
        return 
      }
      filtro.push("* " +label+opt.textContent);
    });
    filtro.push("* Tipos de centro:");
    tipos.forEach(t=>{
      filtro.push("    * " + t);
    })
    let excepto = true;
    document.querySelectorAll("fieldset.uncheck_to_hide").forEach(f=>{
      const inputs = Array.from(f.querySelectorAll("input:not(.check_to_hide)")).flatMap(i=>{
        if (!(i instanceof HTMLInputElement)) return [];
        let isChecked = i.checked;
        if (invertir) isChecked = !isChecked;
        if (isChecked) return [];
        return (i.getAttribute("data-label")||i.title||i.textContent?.trim())??"";
      })
      if (inputs.length == 0) return;
      if (excepto) {
        excepto = false;
        filtro.push("\nExcepto aquellos centros que cumplan:");
      }
      //const legend = f.querySelector("legend")!.textContent!.trim()??"";
      //filtro.push("* "+legend);
      inputs.forEach(i=>{
        filtro.push("* "+i);
      })
    })
    let lines = [
        "Fuente: " +document.location.href,
        "Fecha: " + date
    ]
  if (info.distancias != null) {
    lines.push(`Punto de referencia: ${info.distancias.latitud},${info.distancias.longitud}`);
  }
  lines.push("Filtro:\n" + filtro.join("\n").trim());
  return lines.join("\n");
}
