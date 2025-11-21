'use client'

import React, { useState } from 'react'
import { Settings, Star, LineChart } from 'lucide-react'

export default function PulseSidebar() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div className="w-full bg-[#06070B] border-b border-gray-800 flex items-center px-4 sm:px-6 h-7 flex-shrink-0 overflow-x-auto">
      <div className="flex items-center gap-1 min-w-max">
        
        {/* --- Settings Icon --- */}
        <div className="relative">
          <button 
            className="text-gray-500 hover:text-white transition p-1"
            onMouseEnter={() => setHovered('settings')}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Kept your size preference */}
            <Settings className="w-3.5 h-3.5" />
          </button>
          
          {hovered === 'settings' && (
            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-[#1A1A1A] border border-gray-800 text-gray-200 text-xs px-3 py-1.5 rounded-md whitespace-nowrap z-50 shadow-xl">
              Settings
            </div>
          )}
        </div>
        
        {/* Divider - Reduced margin from mx-4 to mx-2 */}
        <div className="h-3 w-[1px] bg-gray-800 mx-2"></div>

        {/* --- Watchlist Icon --- */}
        <div className="relative">
          <button 
            className="text-gray-500 hover:text-white transition p-1"
            onMouseEnter={() => setHovered('watchlist')}
            onMouseLeave={() => setHovered(null)}
          >
            <Star className="w-3.5 h-3.5" />
          </button>
          
          {hovered === 'watchlist' && (
            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-[#1A1A1A] border border-gray-800 text-gray-200 text-xs px-3 py-1.5 rounded-md whitespace-nowrap z-50 shadow-xl">
              Watchlist
            </div>
          )}
        </div>
        
        {/* Divider - Reduced margin from mx-4 to mx-2 */}
        <div className="h-3 w-[1px] bg-gray-800 mx-2"></div>

        {/* --- Active Positions Icon --- */}
        <div className="relative">
          <button 
            className="text-gray-500 hover:text-white transition p-1"
            onMouseEnter={() => setHovered('positions')}
            onMouseLeave={() => setHovered(null)}
          >
            <LineChart className="w-3.5 h-3.5" />
          </button>
          
          {hovered === 'positions' && (
            <div className="absolute top-full mt-2 left-0 bg-[#1A1A1A] border border-gray-800 text-gray-200 text-xs px-3 py-1.5 rounded-md whitespace-nowrap z-50 shadow-xl flex items-center gap-2">
              <LineChart className="w-3 h-3 text-gray-400" />
              Active Positions
            </div>
          )}
        </div>
        
        {/* Divider - Reduced margin from mx-4 to mx-2 */}
        <div className="h-3 w-[1px] bg-gray-800 mx-2"></div>

      </div>
    </div>
  )
}