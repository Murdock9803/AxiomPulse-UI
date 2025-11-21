export interface TokenMetric {
  label: string
  value: string
  isPositive: boolean
}

export interface TokenStats {
  replies?: number
  likes?: number
  views?: number
  holders?: number
}

export interface TokenPair {
  id: string
  symbol: string
  name: string
  description: string
  image: string
  borderColor?: string
  timeAgo: string
  stats: TokenStats
  marketCap: string
  volume?: string
  txCount?: number
  price: string
  liquiditySOL: string
  metrics: TokenMetric[]
  address?: string  // <--- NEW FIELD: The "0x...4444" text
  // Price change tracking for real-time updates
  priceChangeDirection?: 'up' | 'down' | 'neutral'
  marketCapChangeDirection?: 'up' | 'down' | 'neutral'
  volumeChangeDirection?: 'up' | 'down' | 'neutral'
  txCountChangeDirection?: 'up' | 'down' | 'neutral'
  previousPrice?: number
  previousMarketCap?: number
  previousVolume?: number
  previousTxCount?: number
}

export interface ColumnData {
  title: string
  count: number
  pairs: TokenPair[]
}