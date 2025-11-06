export async function createVectorScreenshot() {
  // Собираем информацию о странице
  const screenshotData = {
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

    const elementData = {
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
    for (let child of element.children) {
      traverseDOM(child, level + 1);
    }

    screenshotData.elements.push(elementData);
  }

  traverseDOM(document.querySelector(".react-flow__viewport"));

  // Генерируем SVG на основе собранных данных
  const svgContent = generateSvgFromData(screenshotData);
  const blob = new Blob([svgContent], { type: "image/svg+xml" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "scheme.svg";
  link.click();
}

function generateSvgFromData(data) {
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${data.viewport.width}" height="${data.viewport.height}">\n`;

  // Добавляем элементы
  data.elements.forEach((element) => {
    if (element.position.width > 0 && element.position.height > 0) {
      svg += generateSvgElement(element);
    }
  });

  svg += "</svg>";
  return svg;
}

function generateSvgElement(element) {
  const { position, style, text } = element;

  let svgElement = "";

  // Фон элемента
  if (style.backgroundColor && style.backgroundColor !== "rgba(0, 0, 0, 0)") {
    svgElement += `<rect x="${position.x}" y="${position.y}" width="${position.width}" height="${position.height}" fill="${style.backgroundColor}"/>\n`;
  }

  // Текст
  if (text && text.length > 0) {
    svgElement += `<text x="${position.x + 5}" y="${
      position.y + parseInt(style.fontSize || 16)
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

function escapeXml(unsafe) {
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
    }
  });
}
