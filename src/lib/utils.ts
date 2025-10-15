import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Tailwind class merger for conditional styling
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Add more utilities here as needed by agents
