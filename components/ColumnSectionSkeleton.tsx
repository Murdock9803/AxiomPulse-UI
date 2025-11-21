import React from 'react'
import TokenCardSkeleton from './TokenCardSkeleton'

interface ColumnSectionSkeletonProps {
  title?: string
}

export default function ColumnSectionSkeleton({
  title = 'Loading',
}: ColumnSectionSkeletonProps) {
  return (
    <div className="flex flex-col h-full min-h-0">
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-b border-gray-800/50 bg-[#06070B] flex-shrink-0">
        <h2 className="text-white font-semibold text-[15px] tracking-normal">
          {title}
        </h2>
        <div className="w-20 h-5 rounded-full bg-zinc-900 shimmer" />
      </div>

      <div className="px-2 pt-2 pb-4 space-y-2 flex-1 overflow-y-auto min-h-0">
        {Array.from({ length: 8 }).map((_, idx) => (
          <TokenCardSkeleton key={idx} />
        ))}
      </div>
    </div>
  )
}