import jsPDF from "jspdf";
import { autoTable, Styles } from "jspdf-autotable";

export const gostTable = (doc: jsPDF, pdfPageWidth: number, pdfPageHeight: number) => {
  //   autoTable(doc, {
  //     html: `<table>
  //         <tr>
  //         <td>1</td>
  //         <td>2</td>
  //         <td>3</td>
  //         </tr>
  //     </table>`,
  //   });

  const columnStyles: Record<number, Partial<Styles>> = {};
  for (let i = 0; i < 195 / 5; i++) {
    columnStyles[i] = {
      cellWidth: 13,
      minCellHeight: 5,

      fillColor: [255, 255, 255],
    };
  }
  return autoTable(doc, {
    styles: {
      font: "GOST-2304-81typeB",
      fontStyle: "normal",
      fillColor: [255, 255, 255],
      lineWidth: 1,
      lineColor: "black",
      cellPadding: 0,
      halign: "center",
      valign: "middle",
      fontSize: 25,
      overflow: "ellipsize",
    },
    // styles: { fillColor: [255, 255, 255] },
    // columnStyles: { 0: { halign: "center", fillColor: [0, 255, 0] } },
    // margin: { top: 500 },

    columnStyles,
    body: [
      [
        { content: "1", colSpan: 2 },
        { content: "2", colSpan: 2 },
        { content: "3", colSpan: 5 },
        { content: "4", colSpan: 3 },
        { content: "5", colSpan: 2 },
        { content: "120см", colSpan: 25, rowSpan: 3 },
      ],
      [
        // строка 2
        { content: "7", colSpan: 2 },
        { content: "8", colSpan: 2 },
        { content: "9", colSpan: 5 },
        { content: "10", colSpan: 3 },
        { content: "11", colSpan: 2 },
      ],
      [
        { content: "12", colSpan: 2 },
        { content: "13", colSpan: 2 },
        { content: "14", colSpan: 5 },
        { content: "15", colSpan: 3 },
        { content: "16", colSpan: 2 },
      ],
      [
        { content: "17", colSpan: 2 },
        { content: "18", colSpan: 2 },
        { content: "19", colSpan: 5 },
        { content: "20", colSpan: 3 },
        { content: "21", colSpan: 2 },
        { content: "70см(1)", colSpan: 14, rowSpan: 5 },
        { content: "Лит.", colSpan: 3 },
        { content: "Масса", colSpan: 4 }, //17ММ
        { content: "Масштаб", colSpan: 4 }, //18ММ
      ],
      [
        { content: "Изм.", colSpan: 2 },
        { content: "Лист", colSpan: 2 },
        { content: "№ Докум.", colSpan: 5 },
        { content: "Подп.", colSpan: 3 },
        { content: "Дата", colSpan: 2 },
        { content: "35", rowSpan: 3 },
        { content: "36", rowSpan: 3 },
        { content: "37", rowSpan: 3 },
        { content: "38", colSpan: 4, rowSpan: 3 }, //17ММ
        { content: "39", colSpan: 4, rowSpan: 3 }, //18ММ
      ],
      [
        { content: "Разраб.", colSpan: 4 },
        { content: "22", colSpan: 5 },
        { content: "23", colSpan: 3 },
        { content: "24", colSpan: 2 },
      ],
      [
        { content: "Пров.", colSpan: 4 },
        { content: "25", colSpan: 5 },
        { content: "26", colSpan: 3 },
        { content: "27", colSpan: 2 },
      ],
      [
        { content: "Т.Контр.", colSpan: 4 },
        { content: "28", colSpan: 5 },
        { content: "29", colSpan: 3 },
        { content: "30", colSpan: 2 },
        { content: "Лист", colSpan: 5 },
        { content: "Листов", colSpan: 7 },
      ],
      [
        { content: "31", colSpan: 4 },
        { content: "32", colSpan: 5 },
        { content: "33", colSpan: 3 },
        { content: "34", colSpan: 2 },
        { content: "70см(2)", colSpan: 14, rowSpan: 3 },
        { content: "ИУК2-31М", colSpan: 11, rowSpan: 3 },
      ],
      [
        { content: "Н.Контр.", colSpan: 4 },
        { content: "32", colSpan: 5 },
        { content: "33", colSpan: 3 },
        { content: "34", colSpan: 2 },
      ],
      [
        { content: "Утв.", colSpan: 4 },
        { content: "32", colSpan: 5 },
        { content: "33", colSpan: 3 },
        { content: "34", colSpan: 2 },
      ],
    ],

    tableWidth: 185,
    bodyStyles: {
      cellWidth: 5,
    },
    margin: { top: pdfPageHeight - 13 * 10.14, left: pdfPageWidth - 39 * 13.257 },

    horizontalPageBreak: false, // This option prevents horizontal page breaks for the table
    horizontalPageBreakRepeat: 0,
    // rowPageBreak: "avoid",

    // didParseCell: (d) => console.log(d.table.body?.[0]),
  });
};

// * В draw io смотри. Некоторые столбцы увеличены в размере, чтобы их длина была кратна 5, из-за чего сама по себе рамка больше (185 -> 195 (195 / 5 = 39)) и ячеек больше.
// * Я брал за цену деления 5, с другим размером шрифта будут другие размеры ячеек. Главное, что их 39.
