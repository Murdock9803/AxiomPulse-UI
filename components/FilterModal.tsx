import React, { useState } from 'react'
import Modal from './Modal'
import { SortField, SortDirection } from '@/lib/sorting'
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FilterModalProps {
  isOpen: boolean
  onClose: () => void
  currentSort: { field: SortField; direction: SortDirection }
  onSortChange: (field: SortField, direction: SortDirection) => void
}

const sortOptions: { field: SortField; label: string }[] = [
  { field: 'marketCap', label: 'Market Cap' },
  { field: 'volume', label: 'Volume' },
  { field: 'price', label: 'Price' },
  { field: 'txCount', label: 'TX Count' },
  { field: 'timeAgo', label: 'Time Ago' },
]

export default function FilterModal({
  isOpen,
  onClose,
  currentSort,
  onSortChange,
}: FilterModalProps) {
  const [selectedField, setSelectedField] = useState<SortField>(currentSort.field)
  const [selectedDirection, setSelectedDirection] = useState<SortDirection>(currentSort.direction)

  const handleApply = () => {
    onSortChange(selectedField, selectedDirection)
    onClose()
  }

  const handleReset = () => {
    setSelectedField('marketCap')
    setSelectedDirection('desc')
    onSortChange('marketCap', 'desc')
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Sort & Filter" size="sm">
      <div className="space-y-6">
        {/* Sort Field Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3">
            Sort By
          </label>
          <div className="space-y-2">
            {sortOptions.map((option) => (
              <button
                key={option.field}
                onClick={() => setSelectedField(option.field)}
                className={cn(
                  'w-full text-left px-4 py-2.5 rounded-lg border transition',
                  selectedField === option.field
                    ? 'bg-[#1a1a1a] border-blue-500 text-white'
                    : 'bg-[#06070B] border-gray-800 text-gray-300 hover:border-gray-700'
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sort Direction */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3">
            Direction
          </label>
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedDirection('asc')}
              className={cn(
                'flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border transition',
                selectedDirection === 'asc'
                  ? 'bg-[#1a1a1a] border-blue-500 text-white'
                  : 'bg-[#06070B] border-gray-800 text-gray-300 hover:border-gray-700'
              )}
            >
              <ArrowUp className="w-4 h-4" />
              <span>Ascending</span>
            </button>
            <button
              onClick={() => setSelectedDirection('desc')}
              className={cn(
                'flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border transition',
                selectedDirection === 'desc'
                  ? 'bg-[#1a1a1a] border-blue-500 text-white'
                  : 'bg-[#06070B] border-gray-800 text-gray-300 hover:border-gray-700'
              )}
            >
              <ArrowDown className="w-4 h-4" />
              <span>Descending</span>
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <button
            onClick={handleReset}
            className="flex-1 px-4 py-2.5 rounded-lg border border-gray-800 bg-[#06070B] text-gray-300 hover:bg-[#1a1a1a] hover:border-gray-700 transition"
          >
            Reset
          </button>
          <button
            onClick={handleApply}
            className="flex-1 px-4 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition font-medium"
          >
            Apply
          </button>
        </div>
      </div>
    </Modal>
  )
}

