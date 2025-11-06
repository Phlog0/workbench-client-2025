import { Button } from "@/shared/ui";
import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";

import { gostTable } from "./gost-table";
import { gostABase64Font } from "@/shared/assets/fonts";
import { A2_HEIGHT_MM, A2_WIDTH_MM } from "@/shared";

export function SaveSchemeButton({ className }: { className?: string }) {
  const handleClick = async () => {
    const documentWidth = A2_WIDTH_MM;
    const documentHeight = A2_HEIGHT_MM;

    const pngData = await toPng(document.querySelector(".react-flow__viewport") as HTMLDivElement, {
      // backgroundColor: "#6e3030",
      width: documentWidth,
      height: documentHeight,
      style: {
        width: `${documentWidth}`,
        height: `${documentHeight}`,
        // transform: `translate(${viewport.x}px, ${viewport.y}px) scale(${viewport.zoom})`,
      },
    });
    const doc = new jsPDF({
      orientation: "landscape",
      format: [documentWidth, documentHeight],
      //? unit:(property) jsPDFOptions.unit?: "pt" | "px" | "in" | "mm" | "cm" | "ex" | "em" | "pc" | undefined
    });
    doc.addImage(pngData, "PNG", 0, 0, documentWidth, documentHeight);

    const pdfPageHeight = doc.internal.pageSize.getHeight();
    const pdfPageWidth = doc.internal.pageSize.getWidth();
    // doc.text("Привет", 10, 10);
    doc.addFileToVFS("GOST-2304-81typeB-normal.ttf", gostABase64Font);
    doc.addFont("GOST-2304-81typeB-normal.ttf", "GOST-2304-81typeB", "normal");
    doc.setFont("GOST-2304-81typeB");

    gostTable(doc, pdfPageWidth, pdfPageHeight);
    doc.setLineWidth(1);
    doc.rect(5, 5, pdfPageWidth - 15, pdfPageHeight - 2.5 * 10.14);
    doc.save("scheme.pdf");
  };

  // const handleClick = async () => {
  //   const svgElement = await createVectorScreenshot();
  //   const doc = new jsPDF({
  //     orientation: "landscape",
  //     unit: "in",
  //     format: [imageWidth, imageHeight],
  //   });
  //   doc.addSvgAsImage(`${svgElement}`, 0, 0, imageWidth, imageHeight);

  //   doc.save();
  // };
  return (
    <Button onClick={handleClick} className={className}>
      Загрузить схему
    </Button>
  );
}
