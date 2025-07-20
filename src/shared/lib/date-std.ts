export const createdAtRuFormat = (createdAt: Date) =>
  new Intl.DateTimeFormat("ru", {
    dateStyle: "medium",
  }).format(new Date(createdAt));
export const updatedAtRuFormat = (updatedAt: Date) =>
  new Intl.DateTimeFormat("ru", {
    dateStyle: "medium",
  }).format(new Date(updatedAt));
