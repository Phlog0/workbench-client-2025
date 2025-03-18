import { clsx, type ClassValue } from "clsx"
import debounce from "debounce"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

