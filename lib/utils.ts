import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a price string based on display settings
 */
export function formatPrice(priceStr: string, noDecimals: boolean = false): string {
  if (!noDecimals) return priceStr
  
  // Remove decimals from price strings
  // Handle formats like "$12.5K" -> "$12K", "$0.000123" -> "$0"
  const cleaned = priceStr.replace(/[$,]/g, '')
  
  if (cleaned.includes('K')) {
    const num = parseFloat(cleaned.replace('K', ''))
    return `$${Math.floor(num)}K`
  }
  if (cleaned.includes('M')) {
    const num = parseFloat(cleaned.replace('M', ''))
    return `$${Math.floor(num)}M`
  }
  if (cleaned.includes('B')) {
    const num = parseFloat(cleaned.replace('B', ''))
    return `$${Math.floor(num)}B`
  }
  
  // For small decimals, just return "$0"
  if (cleaned.startsWith('0.000')) {
    return '$0'
  }
  
  // For regular numbers, remove decimals
  const num = parseFloat(cleaned)
  return `$${Math.floor(num)}`
}
