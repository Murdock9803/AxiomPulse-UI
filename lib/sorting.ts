import { TokenPair } from './types'

export type SortField = 'marketCap' | 'volume' | 'price' | 'txCount' | 'timeAgo'
export type SortDirection = 'asc' | 'desc'

/**
 * Parses a price string and returns numeric value for sorting
 */
function parsePriceForSort(priceStr: string): number {
  const cleaned = priceStr.replace(/[$,]/g, '')
  
  if (cleaned.includes('K')) {
    return parseFloat(cleaned.replace('K', '')) * 1000
  }
  if (cleaned.includes('M')) {
    return parseFloat(cleaned.replace('M', '')) * 1000000
  }
  if (cleaned.includes('B')) {
    return parseFloat(cleaned.replace('B', '')) * 1000000000
  }
  
  if (cleaned.startsWith('0.000')) {
    return parseFloat(cleaned) || 0.000001
  }
  
  return parseFloat(cleaned) || 0
}

/**
 * Parses time ago string (e.g., "30s") to seconds for sorting
 */
function parseTimeAgo(timeAgo: string): number {
  const match = timeAgo.match(/(\d+)([smhd])/)
  if (!match) return 0
  
  const value = parseInt(match[1])
  const unit = match[2]
  
  switch (unit) {
    case 's': return value
    case 'm': return value * 60
    case 'h': return value * 3600
    case 'd': return value * 86400
    default: return value
  }
}

/**
 * Sorts token pairs based on the specified field and direction
 */
export function sortTokenPairs(
  pairs: TokenPair[],
  field: SortField,
  direction: SortDirection
): TokenPair[] {
  const sorted = [...pairs].sort((a, b) => {
    let comparison = 0

    switch (field) {
      case 'marketCap':
        comparison = parsePriceForSort(a.marketCap) - parsePriceForSort(b.marketCap)
        break
      case 'volume':
        const volumeA = a.volume ? parsePriceForSort(a.volume) : 0
        const volumeB = b.volume ? parsePriceForSort(b.volume) : 0
        comparison = volumeA - volumeB
        break
      case 'price':
        comparison = parsePriceForSort(a.price) - parsePriceForSort(b.price)
        break
      case 'txCount':
        comparison = (a.txCount || 0) - (b.txCount || 0)
        break
      case 'timeAgo':
        comparison = parseTimeAgo(a.timeAgo) - parseTimeAgo(b.timeAgo)
        break
      default:
        return 0
    }

    return direction === 'asc' ? comparison : -comparison
  })

  return sorted
}

