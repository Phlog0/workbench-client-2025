import { RFinstance } from "@/shared/api/types";

export function readJsonFile(file: File): Promise<RFinstance> {
  return new Promise((resolve, reject) => {
    if (!file.type.includes("json") && !file.name.endsWith(".json")) {
      reject(new Error("Файл должен быть формата JSON"));
    }
    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const result: unknown = JSON.parse(event.target?.result as string);

        if (
          !result ||
          typeof result !== "object" ||
          !("nodes" in result) ||
          !("edges" in result) ||
          !("viewport" in result)
        ) {
          reject(new Error("Неверная структура JSON"));
        }
        resolve(result as RFinstance);
      } catch (error) {
        reject(new Error("Ошибка валидации JSON - файла"));
      }
    };
    reader.onerror = () => reject(new Error("Ошибка чтения файла"));
    reader.readAsText(file);
  });
}
