export function readImageFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    // if (!file.type.includes("png") || !file.type.includes("jpg") || !file.type.includes("jpeg")) {
    //   reject(new Error(`Неподходящий формат файла: ${file.type}, ${file.type.includes("jpg")}`));
    // }
    const reader = new FileReader();

    reader.onload = event => {
      try {
        resolve(event.target?.result as string);
      } catch {
        reject(new Error("Ошибка валидации изображения"));
      }
    };
    reader.onerror = () => reject(new Error("Ошибка чтения файла"));
    reader.readAsDataURL(file);
  });
}
