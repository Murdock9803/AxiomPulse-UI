import { TokenPair } from './types'

/**
 * Parses a price string (e.g., "$0.000123" or "$12.5K") and returns numeric value
 */
function parsePrice(priceStr: string): number {
  // Remove $ and any commas
  const cleaned = priceStr.replace(/[$,]/g, '')
  
  // Handle K, M, B suffixes
  if (cleaned.includes('K')) {
    return parseFloat(cleaned.replace('K', '')) * 1000
  }
  if (cleaned.includes('M')) {
    return parseFloat(cleaned.replace('M', '')) * 1000000
  }
  if (cleaned.includes('B')) {
    return parseFloat(cleaned.replace('B', '')) * 1000000000
  }
  
  // Handle "0.000..." format
  if (cleaned.startsWith('0.000')) {
    return parseFloat(cleaned) || 0.000001
  }
  
  return parseFloat(cleaned) || 0
}

/**
 * Formats a numeric value back to price string format
 */
function formatPrice(value: number, originalFormat: string): string {
  if (originalFormat.includes('K')) {
    return `$${(value / 1000).toFixed(1)}K`
  }
  if (originalFormat.includes('M')) {
    return `$${(value / 1000000).toFixed(1)}M`
  }
  if (originalFormat.includes('B')) {
    return `$${(value / 1000000000).toFixed(1)}B`
  }
  if (originalFormat.startsWith('$0.000')) {
    return `$${value.toFixed(6)}`
  }
  return `$${value.toFixed(2)}`
}

/**
 * Generates a new price with small random variation (±1-5%)
 */
function generateNewPrice(currentPrice: number): number {
  const changePercent = (Math.random() * 0.08 - 0.04) // -4% to +4%
  return Math.max(0.000001, currentPrice * (1 + changePercent))
}

/**
 * Updates a single token pair with new price data
 */
export function updateTokenPrice(pair: TokenPair): TokenPair {
  const currentPrice = pair.previousPrice ?? parsePrice(pair.price)
  const currentMarketCap = pair.previousMarketCap ?? parsePrice(pair.marketCap)
  const currentVolume = pair.previousVolume ?? (pair.volume ? parsePrice(pair.volume) : 0)
  const currentTxCount = pair.previousTxCount ?? (pair.txCount || 0)

  // Generate new values
  const newPrice = generateNewPrice(currentPrice)
  const priceChange = newPrice - currentPrice
  const priceChangePercent = currentPrice > 0 ? (priceChange / currentPrice) * 100 : 0

  // Market cap changes proportionally with price
  const newMarketCap = currentMarketCap * (newPrice / currentPrice)
  const marketCapChange = newMarketCap - currentMarketCap

  // Volume changes independently but correlated
  const volumeChangePercent = (Math.random() * 0.1 - 0.05) // -5% to +5%
  const newVolume = Math.max(0, currentVolume * (1 + volumeChangePercent))
  const volumeChange = newVolume - currentVolume

  // TX count changes slightly
  const txChange = Math.floor(Math.random() * 20 - 10) // -10 to +10
  const newTxCount = Math.max(0, currentTxCount + txChange)
  const txCountChange = newTxCount - currentTxCount

  // Determine change directions
  const priceChangeDirection: 'up' | 'down' | 'neutral' = 
    priceChange > 0.000001 ? 'up' : priceChange < -0.000001 ? 'down' : 'neutral'
  
  const marketCapChangeDirection: 'up' | 'down' | 'neutral' = 
    marketCapChange > 0.01 ? 'up' : marketCapChange < -0.01 ? 'down' : 'neutral'
  
  const volumeChangeDirection: 'up' | 'down' | 'neutral' = 
    volumeChange > 0.01 ? 'up' : volumeChange < -0.01 ? 'down' : 'neutral'
  
  const txCountChangeDirection: 'up' | 'down' | 'neutral' = 
    txCountChange > 0 ? 'up' : txCountChange < 0 ? 'down' : 'neutral'

  return {
    ...pair,
    price: formatPrice(newPrice, pair.price),
    marketCap: formatPrice(newMarketCap, pair.marketCap),
    volume: pair.volume ? formatPrice(newVolume, pair.volume) : undefined,
    txCount: newTxCount,
    priceChangeDirection,
    marketCapChangeDirection,
    volumeChangeDirection,
    txCountChangeDirection,
    previousPrice: newPrice,
    previousMarketCap: newMarketCap,
    previousVolume: newVolume,
    previousTxCount: newTxCount,
  }
}

/**
 * Updates all token pairs in a column
 */
export function updateColumnPrices(pairs: TokenPair[]): TokenPair[] {
  return pairs.map(updateTokenPrice)
}

