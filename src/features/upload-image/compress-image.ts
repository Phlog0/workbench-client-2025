export const compressImage = (file: File, maxWidth = 1920, quality = 0.7): Promise<Blob> => {
  return new Promise(resolve => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    const objUrl = URL.createObjectURL(file);
    img.src = objUrl;
    img.onload = () => {
      let width = img.width;
      let height = img.height;

      if (width > maxWidth) {
        height = (height * maxWidth) / width;
        width = maxWidth;
      }
      canvas.width = width;
      canvas.height = height;
      ctx?.drawImage(img, 0, 0, width, height);
      canvas.toBlob(
        blob => {
          resolve(blob as Blob);
          URL.revokeObjectURL(objUrl);
        },
        "image/jpeg",
        quality
      );
    };
  });
};
