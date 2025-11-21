import React from 'react'

export default function TokenCardSkeleton() {
  return (
    <div className="bg-[#111] border border-gray-900 rounded-lg p-3 w-full">
      <div className="flex flex-col gap-3 md:flex-row">
        {/* Left: image + address */}
        <div className="flex-shrink-0 flex flex-row md:flex-col items-center gap-2 md:gap-2">
          <div className="w-16 h-16 rounded-lg bg-zinc-800 shimmer" />
          <div className="w-20 h-3 rounded bg-zinc-800 shimmer" />
        </div>

        {/* Middle: text */}
        <div className="flex-1 min-w-0 flex flex-col justify-between gap-2">
          <div className="space-y-1">
            <div className="w-24 h-3 rounded bg-zinc-800 shimmer" />
            <div className="w-32 h-3 rounded bg-zinc-800 shimmer" />
          </div>
          <div className="flex gap-2">
            <div className="w-10 h-3 rounded-full bg-zinc-800 shimmer" />
            <div className="w-14 h-3 rounded-full bg-zinc-800 shimmer" />
            <div className="w-16 h-3 rounded-full bg-zinc-800 shimmer" />
          </div>
        </div>

        {/* Right: numbers */}
        <div className="flex flex-row md:flex-col items-center md:items-end justify-between gap-2">
          <div className="w-16 h-3 rounded bg-zinc-800 shimmer" />
          <div className="w-14 h-3 rounded bg-zinc-800 shimmer" />
          <div className="w-20 h-3 rounded bg-zinc-800 shimmer" />
        </div>
      </div>
    </div>
  )
}




