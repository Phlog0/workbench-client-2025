import { CSSProperties } from "react";

type ElementData = {
  tag: string;
  id: string;
  class: string;
  text: string;
  position: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  style: CSSProperties;
  children: ElementData[];
};

type ScreenshotData = {
  timestamp: string;
  url: string;
  viewport: {
    width: number;
    height: number;
  };
  elements: ElementData[];
};
export async function createVectorScreenshot() {
  // Собираем информацию о странице
  const screenshotData: ScreenshotData = {
    timestamp: new Date().toISOString(),
    url: window.location.href,
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
    elements: [],
  };

  // Рекурсивно обходим DOM и собираем векторные данные
  function traverseDOM(element: HTMLElement, level = 0) {
    const style = window.getComputedStyle(element);
    const rect = element.getBoundingClientRect();

    // Пропускаем невидимые элементы
    if (
      style.display === "none" ||
      style.visibility === "hidden" ||
      rect.width === 0 ||
      rect.height === 0
    ) {
      return;
    }

    const elementData: ElementData = {
      tag: element.tagName,
      id: element.id,
      class: element.className,
      text: element.textContent?.trim(),
      position: {
        x: rect.left,
        y: rect.top,
        width: rect.width,
        height: rect.height,
      },
      style: {
        backgroundColor: style.backgroundColor,
        color: style.color,
        fontSize: style.fontSize,
        fontFamily: style.fontFamily,
        border: style.border,
      },
      children: [],
    };

    // Обрабатываем детей
    for (const child of element.children) {
      if (child instanceof HTMLDivElement) {
        traverseDOM(child, level + 1);
      }
    }

    screenshotData.elements.push(elementData);
  }

  const reactFlowViewport = document.querySelector(".react-flow__viewport");
  if (!(reactFlowViewport instanceof HTMLDivElement)) {
    throw new Error("reactFlowViewport не является div");
  }
  traverseDOM(reactFlowViewport);

  // Генерируем SVG на основе собранных данных
  const svgContent = generateSvgFromData(screenshotData);
  const blob = new Blob([svgContent], { type: "image/svg+xml" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "scheme.svg";
  link.click();
}

function generateSvgFromData(data: ScreenshotData) {
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${data.viewport.width}" height="${data.viewport.height}">\n`;

  // Добавляем элементы
  data.elements.forEach(element => {
    if (element.position.width > 0 && element.position.height > 0) {
      svg += generateSvgElement(element);
    }
  });

  svg += "</svg>";
  return svg;
}

function generateSvgElement(element: ElementData) {
  const { position, style, text } = element;

  let svgElement = "";

  // Фон элемента
  if (style.backgroundColor && style.backgroundColor !== "rgba(0, 0, 0, 0)") {
    svgElement += `<rect x="${position.x}" y="${position.y}" width="${position.width}" height="${position.height}" fill="${style.backgroundColor}"/>\n`;
  }

  // Текст
  if (text && text.length > 0) {
    svgElement += `<text x="${position.x + 5}" y="${
      position.y + parseInt(String(style.fontSize))
    }" font-family="${style.fontFamily}" font-size="${style.fontSize}" fill="${
      style.color
    }">${escapeXml(text)}</text>\n`;
  }

  // Границы
  if (style.border && style.border !== "0px none rgba(0, 0, 0, 0)") {
    svgElement += `<rect x="${position.x}" y="${position.y}" width="${position.width}" height="${position.height}" fill="none" stroke="black" stroke-width="1"/>\n`;
  }

  return svgElement;
}

function escapeXml(unsafe: string) {
  return unsafe.replace(/[<>&'"]/g, function (c) {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
      default:
        return "";
    }
  });
}
