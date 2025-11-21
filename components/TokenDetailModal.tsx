import React from 'react'
import Modal from './Modal'
import { TokenPair } from '@/lib/types'
import { Copy, ExternalLink, TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TokenDetailModalProps {
  isOpen: boolean
  onClose: () => void
  token: TokenPair | null
}

export default function TokenDetailModal({ isOpen, onClose, token }: TokenDetailModalProps) {
  if (!token) return null

  const getChangeIcon = (direction?: 'up' | 'down' | 'neutral') => {
    switch (direction) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-emerald-400" />
      case 'down':
        return <TrendingDown className="w-4 h-4 text-rose-400" />
      default:
        return <Minus className="w-4 h-4 text-gray-400" />
    }
  }

  const getChangeColor = (direction?: 'up' | 'down' | 'neutral') => {
    switch (direction) {
      case 'up':
        return 'text-emerald-400'
      case 'down':
        return 'text-rose-400'
      default:
        return 'text-gray-400'
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={token.symbol} size="lg">
      <div className="space-y-6">
        {/* Token Header */}
        <div className="flex items-start gap-4">
          <img
            src={token.image}
            alt={token.name}
            className="w-20 h-20 rounded-lg object-cover border-2"
            style={{ borderColor: token.borderColor || '#374151' }}
          />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-white text-xl font-bold">{token.symbol}</h3>
              <span className="text-gray-400 text-sm">{token.name}</span>
            </div>
            <p className="text-gray-500 text-sm mb-3">{token.description}</p>
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-xs font-mono">{token.address}</span>
              <button className="text-gray-500 hover:text-white transition">
                <Copy className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Price & Market Data */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#06070B] border border-gray-800 rounded-lg p-4">
            <div className="text-gray-500 text-xs mb-1">Price</div>
            <div className="flex items-center gap-2">
              {getChangeIcon(token.priceChangeDirection)}
              <span className={cn('text-lg font-bold', getChangeColor(token.priceChangeDirection))}>
                {token.price}
              </span>
            </div>
          </div>

          <div className="bg-[#06070B] border border-gray-800 rounded-lg p-4">
            <div className="text-gray-500 text-xs mb-1">Market Cap</div>
            <div className="flex items-center gap-2">
              {getChangeIcon(token.marketCapChangeDirection)}
              <span className={cn('text-lg font-bold', getChangeColor(token.marketCapChangeDirection))}>
                {token.marketCap}
              </span>
            </div>
          </div>

          <div className="bg-[#06070B] border border-gray-800 rounded-lg p-4">
            <div className="text-gray-500 text-xs mb-1">Volume</div>
            <div className="flex items-center gap-2">
              {getChangeIcon(token.volumeChangeDirection)}
              <span className={cn('text-lg font-bold', getChangeColor(token.volumeChangeDirection))}>
                {token.volume || '$0'}
              </span>
            </div>
          </div>

          <div className="bg-[#06070B] border border-gray-800 rounded-lg p-4">
            <div className="text-gray-500 text-xs mb-1">TX Count</div>
            <div className="flex items-center gap-2">
              {getChangeIcon(token.txCountChangeDirection)}
              <span className={cn('text-lg font-bold', getChangeColor(token.txCountChangeDirection))}>
                {token.txCount || 0}
              </span>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div>
          <h4 className="text-white text-sm font-semibold mb-3">Performance Metrics</h4>
          <div className="grid grid-cols-3 gap-3">
            {token.metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-[#06070B] border border-gray-800 rounded-lg p-3 text-center"
              >
                <div className="text-gray-500 text-xs mb-1">{metric.label}</div>
                <div
                  className={cn(
                    'text-sm font-bold',
                    metric.isPositive ? 'text-emerald-400' : 'text-rose-400'
                  )}
                >
                  {metric.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div>
          <h4 className="text-white text-sm font-semibold mb-3">Social Stats</h4>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#06070B] border border-gray-800 rounded-lg p-3">
              <div className="text-gray-500 text-xs mb-1">Replies</div>
              <div className="text-white font-semibold">{token.stats.replies || 0}</div>
            </div>
            <div className="bg-[#06070B] border border-gray-800 rounded-lg p-3">
              <div className="text-gray-500 text-xs mb-1">Likes</div>
              <div className="text-white font-semibold">{token.stats.likes || 0}</div>
            </div>
            <div className="bg-[#06070B] border border-gray-800 rounded-lg p-3">
              <div className="text-gray-500 text-xs mb-1">Views</div>
              <div className="text-white font-semibold">{token.stats.views || 0}</div>
            </div>
            <div className="bg-[#06070B] border border-gray-800 rounded-lg p-3">
              <div className="text-gray-500 text-xs mb-1">Holders</div>
              <div className="text-white font-semibold">{token.stats.holders || 0}</div>
            </div>
          </div>
        </div>

        {/* Liquidity */}
        <div className="bg-[#06070B] border border-gray-800 rounded-lg p-4">
          <div className="text-gray-500 text-xs mb-2">Liquidity</div>
          <div className="text-white font-semibold text-lg">{token.liquiditySOL}</div>
        </div>

        {/* Action Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition flex items-center justify-center gap-2">
          <ExternalLink className="w-4 h-4" />
          View on Explorer
        </button>
      </div>
    </Modal>
  )
}

