import React, { useState, useMemo } from 'react'
import { ColumnData, TokenPair } from '@/lib/types'
import TokenCard from './TokenCard'
import { Zap, Settings2 } from 'lucide-react'
import FilterModal from './FilterModal'
import TokenDetailModal from './TokenDetailModal'
import { sortTokenPairs, SortField, SortDirection } from '@/lib/sorting'
import { cn } from '@/lib/utils'

interface ColumnSectionProps {
  data: ColumnData
}

export default function ColumnSection({ data }: ColumnSectionProps) {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false)
  const [selectedToken, setSelectedToken] = useState<TokenPair | null>(null)
  const [sortField, setSortField] = useState<SortField>('marketCap')
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc')
  const [activePreset, setActivePreset] = useState<'P1' | 'P2' | 'P3'>('P1')

  const sortedPairs = useMemo(() => {
    return sortTokenPairs(data.pairs, sortField, sortDirection)
  }, [data.pairs, sortField, sortDirection])

  const handleSortChange = (field: SortField, direction: SortDirection) => {
    setSortField(field)
    setSortDirection(direction)
  }

  const handlePresetClick = (preset: 'P1' | 'P2' | 'P3') => {
    setActivePreset(preset)
    switch (preset) {
      case 'P1':
        setSortField('marketCap')
        setSortDirection('desc')
        break
      case 'P2':
        setSortField('volume')
        setSortDirection('desc')
        break
      case 'P3':
        setSortField('timeAgo')
        setSortDirection('asc')
        break
    }
  }

  const handleTokenClick = (pair: TokenPair) => {
    setSelectedToken(pair)
    setIsDetailModalOpen(true)
  }

  return (
    <div className="flex flex-col h-full min-h-0">
      
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-b border-gray-800/50 bg-[#06070B] flex-shrink-0">
        <h2 className="text-white font-semibold text-sm sm:text-[15px] tracking-normal">{data.title}</h2>

        <div className="flex items-center gap-2 flex-wrap justify-end">
            
            <div className="flex items-center text-xs font-medium border border-gray-800 rounded-md bg-[#0f0f0f] overflow-hidden">
              
              <button className="flex items-center gap-1.5 px-3 py-1 hover:bg-gray-800 transition text-gray-300 whitespace-nowrap">
                <Zap className="w-3 h-3 fill-gray-500 text-gray-500" />
                <span>0</span>
              </button>

              <div className="w-[1px] h-3 bg-gray-800"></div>

              <button className="px-2 py-1 hover:bg-gray-800 transition text-[#F0B90B]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                  <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.8L17.2 8 12 11.2 6.8 8 12 4.8zM6 9.8l4.2 2.6L6 15v-5.2zm6 7.4L7.8 14.6 12 12l4.2 2.6L12 17.2zM18 15l-4.2-2.6L18 9.8V15z"/>
                </svg>
              </button>

              <div className="w-[1px] h-3 bg-gray-800"></div>

              <div className="flex items-center gap-2 px-2 sm:px-3 py-1 hover:bg-gray-800 transition cursor-pointer">
                <button
                  onClick={() => handlePresetClick('P1')}
                  className={cn(
                    'transition',
                    activePreset === 'P1' ? 'text-blue-500 font-bold' : 'text-white hover:text-gray-300'
                  )}
                >
                  P1
                </button>
                <button
                  onClick={() => handlePresetClick('P2')}
                  className={cn(
                    'transition',
                    activePreset === 'P2' ? 'text-blue-500 font-bold' : 'text-white hover:text-gray-300'
                  )}
                >
                  P2
                </button>
                <button
                  onClick={() => handlePresetClick('P3')}
                  className={cn(
                    'transition',
                    activePreset === 'P3' ? 'text-blue-500 font-bold' : 'text-white hover:text-gray-300'
                  )}
                >
                  P3
                </button>
              </div>
            </div>

            <button
              onClick={() => setIsFilterModalOpen(true)}
              className="text-gray-500 hover:text-white transition"
            >
              <Settings2 className="w-4 h-4" />
            </button>
        </div>
      </div>

      <div className="px-2 pt-2 pb-4 space-y-2 flex-1 overflow-y-auto min-h-0">
        {sortedPairs.map((pair) => (
          <TokenCard key={pair.id} pair={pair} onCardClick={handleTokenClick} />
        ))}
      </div>

      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        currentSort={{ field: sortField, direction: sortDirection }}
        onSortChange={handleSortChange}
      />

      <TokenDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => {
          setIsDetailModalOpen(false)
          setSelectedToken(null)
        }}
        token={selectedToken}
      />
    </div>
  )
}