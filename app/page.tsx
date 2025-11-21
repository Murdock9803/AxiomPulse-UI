'use client'

import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import PulseSidebar from '@/components/PulseSidebar'
import ColumnSection from '@/components/ColumnSection'
import ColumnSectionSkeleton from '@/components/ColumnSectionSkeleton'
import DisplayModal, { defaultSettings, DisplaySettings } from '@/components/DisplayModal'
import { DisplaySettingsProvider } from '@/contexts/DisplaySettingsContext'
import { useWebSocket } from '@/lib/hooks/useWebSocket'
import { List, ChevronDown, Bookmark, Volume2, Wallet } from 'lucide-react'

export default function Home() {
  const { columns, isLoading, error } = useWebSocket()
  const [hoveredChain, setHoveredChain] = useState<string | null>(null)
  const [isDisplayModalOpen, setIsDisplayModalOpen] = useState(false)
  const [displaySettings, setDisplaySettings] = useState<DisplaySettings>(defaultSettings)

  return (
    <DisplaySettingsProvider settings={displaySettings} setSettings={setDisplaySettings}>
      <div className="min-h-screen xl:h-screen xl:max-h-screen xl:overflow-hidden flex flex-col bg-[#06070B] text-white">
        {/* Navigation Top Bar */}
        <Navbar />
        
        <div className="flex flex-1 flex-col min-h-0 overflow-visible xl:overflow-hidden">
          {/* Bar just below Navbar */}
          <PulseSidebar />

          <div className="border-b border-gray-800 bg-[#06070B] px-4 sm:px-6 py-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <h1 className="text-white text-xl sm:text-2xl font-semibold tracking-tight">
                  Pulse
                </h1>

                <div className="flex items-center gap-3">
                  
                  <div 
                    className="relative cursor-pointer"
                    onMouseEnter={() => setHoveredChain('SOL')}
                    onMouseLeave={() => setHoveredChain(null)}
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                      <defs>
                        <linearGradient id="solGradientHeader" x1="3" y1="4" x2="21" y2="17.5" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#9945FF" />
                          <stop offset="1" stopColor="#14F195" />
                        </linearGradient>
                      </defs>
                      <path d="M6 4 L20 4 L17 7.5 L3 7.5 Z" fill="url(#solGradientHeader)" />
                      <path d="M3 9 L17 9 L20 12.5 L6 12.5 Z" fill="url(#solGradientHeader)" />
                      <path d="M6 14 L20 14 L17 17.5 L3 17.5 Z" fill="url(#solGradientHeader)" />
                    </svg>
                    {hoveredChain === 'SOL' && (
                      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#1A1A1A] border border-gray-800 text-gray-200 text-xs px-2 py-1 rounded shadow-xl whitespace-nowrap z-50">
                        Solana
                      </div>
                    )}
                  </div>

                  <div 
                    className="relative cursor-pointer"
                    onMouseEnter={() => setHoveredChain('BNB')}
                    onMouseLeave={() => setHoveredChain(null)}
                  >
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                      <svg
                    viewBox="0 0 2496 2496"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g>
                      <path
                        fill="oklch(21% 0.034 264.665)"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1248,0c689.3,0,1248,558.7,1248,1248s-558.7,1248-1248,1248
                          S0,1937.3,0,1248S558.7,0,1248,0L1248,0z"
                      />
                      <path
                        fill="#F0B90B"
                        d="M685.9,1248l0.9,330l280.4,165v193.2l-444.5-260.7v-524L685.9,1248L685.9,1248z M685.9,918v192.3
                          l-163.3-96.6V821.4l163.3-96.6l164.1,96.6L685.9,918L685.9,918z M1084.3,821.4l163.3-96.6l164.1,96.6L1247.6,918L1084.3,821.4
                          L1084.3,821.4z"
                      />
                      <path
                        fill="#F0B90B"
                        d="M803.9,1509.6v-193.2l163.3,96.6v192.3L803.9,1509.6L803.9,1509.6z M1084.3,1812.2l163.3,96.6
                          l164.1-96.6v192.3l-164.1,96.6l-163.3-96.6V1812.2L1084.3,1812.2z M1645.9,821.4l163.3-96.6l164.1,96.6v192.3l-164.1,96.6V918
                          L1645.9,821.4L1645.9,821.4L1645.9,821.4z M1809.2,1578l0.9-330l163.3-96.6v524l-444.5,260.7v-193.2L1809.2,1578L1809.2,1578
                          L1809.2,1578z"
                      />
                      <polygon
                        fill="#F0B90B"
                        points="1692.1,1509.6 1528.8,1605.3 1528.8,1413 1692.1,1316.4 1692.1,1509.6 "
                      />
                      <path
                        fill="#F0B90B"
                        d="M1692.1,986.4l0.9,193.2l-281.2,165v330.8l-163.3,95.7l-163.3-95.7v-330.8l-281.2-165V986.4
                          L968,889.8l279.5,165.8l281.2-165.8l164.1,96.6H1692.1L1692.1,986.4z M803.9,656.5l443.7-261.6l444.5,261.6l-163.3,96.6
                          l-281.2-165.8L967.2,753.1L803.9,656.5L803.9,656.5z"
                      />
                    </g>
                  </svg>
                    </div>
                    {hoveredChain === 'BNB' && (
                      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#1A1A1A] border border-gray-800 text-gray-200 text-xs px-2 py-1 rounded shadow-xl whitespace-nowrap z-50">
                        BNB Chain
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              
              <button
                onClick={() => setIsDisplayModalOpen(true)}
                className="flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-[#161616] hover:bg-[#202020] rounded-full text-sm font-medium transition"
              >
                <List className="w-4 h-4 text-gray-300" />
                <span>Display</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>

              <button className="text-gray-400 hover:text-white transition p-2">
                <Bookmark className="w-4 h-4" />
              </button>

              <button className="text-gray-400 hover:text-white transition p-2">
                <Volume2 className="w-4 h-4" />
              </button>

              <button className="flex items-center gap-3 px-3 py-1.5 border border-gray-800 rounded-full hover:border-gray-700 transition text-sm bg-[#06070B]">
                <div className="flex items-center gap-1.5">
                  <Wallet className="w-4 h-4 text-gray-400" />
                  <span className="font-mono">1</span>
                </div>
                <div className="hidden sm:block h-3 w-[1px] bg-gray-800"></div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3.5 h-3.5 text-[#F0B90B]">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.8L17.2 8 12 11.2 6.8 8 12 4.8zM6 9.8l4.2 2.6L6 15v-5.2zm6 7.4L7.8 14.6 12 12l4.2 2.6L12 17.2zM18 15l-4.2-2.6L18 9.8V15z"/></svg>
                  </div>
                  <span className="font-mono">0</span>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
              </button>

            </div>
          </div>

          {/* Main Body Area, New Pair, Final Stretch, Migrated */}
          {/* Main Body Area, New Pair, Final Stretch, Migrated */}
<div className="flex-1 min-h-0 overflow-visible xl:overflow-hidden">
  {/* Mobile: Horizontal Scroll | Desktop: Grid */}
  <div className="h-full min-h-0">
    {/* Mobile/Tablet: Horizontal Scroll Container */}
    <div className="xl:hidden flex overflow-x-auto snap-x snap-mandatory h-full border-t border-gray-800 hide-scrollbar">
      {isLoading && (
        <>
          <div className="w-full sm:w-[calc(50%-0.5rem)] flex-shrink-0 snap-start">
            <ColumnSectionSkeleton title="New Pairs" />
          </div>
          <div className="w-full sm:w-[calc(50%-0.5rem)] flex-shrink-0 snap-start">
            <ColumnSectionSkeleton title="Final Stretch" />
          </div>
          <div className="w-full sm:w-[calc(50%-0.5rem)] flex-shrink-0 snap-start">
            <ColumnSectionSkeleton title="Migrated" />
          </div>
        </>
      )}

      {!isLoading && error && (
        <div className="w-full flex items-center justify-center text-sm text-red-400 py-8 px-4 text-center">
          Failed to load data. Please refresh.
        </div>
      )}

      {!isLoading && !error && columns &&
        columns.map((column, index) => (
          <div
            key={index}
            className="w-full sm:w-[calc(50%-0.5rem)] flex-shrink-0 snap-start h-full border-gray-800 border-r last:border-r-0"
          >
            <ColumnSection data={column} />
          </div>
        ))}
    </div>

    {/* Desktop: Grid Layout (xl and above) */}
    <div className="hidden xl:grid h-full min-h-0 grid-cols-3 border-x border-gray-800">
      {isLoading && (
        <>
          <ColumnSectionSkeleton title="New Pairs" />
          <ColumnSectionSkeleton title="Final Stretch" />
          <ColumnSectionSkeleton title="Migrated" />
        </>
      )}

      {!isLoading && error && (
        <div className="col-span-3 flex items-center justify-center text-sm text-red-400 py-8 px-4 text-center">
          Failed to load data. Please refresh.
        </div>
      )}

      {!isLoading && !error && columns &&
        columns.map((column, index) => (
          <div
            key={index}
            className={`flex flex-col min-h-0 h-full overflow-hidden border-gray-800 ${index < columns.length - 1 ? 'border-r' : ''}`}
          >
            <ColumnSection data={column} />
          </div>
        ))}
    </div>
  </div>
</div>

        </div>

        <DisplayModal
          isOpen={isDisplayModalOpen}
          onClose={() => setIsDisplayModalOpen(false)}
          settings={displaySettings}
          onSettingsChange={setDisplaySettings}
        />
      </div>
    </DisplaySettingsProvider>
  )
}