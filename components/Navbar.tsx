'use client'

import React, { useState } from 'react'
import { Search, Star, Bell, Wallet, ChevronDown, UserRoundCog, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [showChainDropdown, setShowChainDropdown] = useState(false)
  const [selectedChain, setSelectedChain] = useState<'BNB' | 'SOL'>('BNB')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const menuLinks = [
    { label: 'Discover', active: false },
    { label: 'Pulse', active: true },
    { label: 'Trackers', active: false },
    { label: 'Perpetuals', active: false },
    { label: 'Portfolio', active: false },
    { label: 'Rewards', active: false },
  ]

  return (
    <nav className="border-b border-gray-800 bg-[#06070B]">
      <div className="flex flex-wrap items-center justify-between gap-4 px-4 sm:px-6 py-3">
        {/* Left Section: Logo & Menu */}
        <div className="flex items-center gap-4 lg:gap-8">
          
          {/* Logo Section */}
          <button className="flex items-center gap-1 hover:opacity-80 transition">
            {/* 1. The Icon (w-7 h-7) */}
            <div className="relative w-7 h-7 mr-1">
              <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
                <path d="M12 2 L22 21 H2 L12 2 Z" fill="white" />
                <rect x="0" y="11.5" width="24" height="2" fill="#06070B" />
              </svg>
            </div>

            {/* 2. The Text */}
            <div className="flex items-baseline">
              <span className="text-white text-2xl font-semibold tracking-tight">
                AXIOM
              </span>
              {/* FIXED: Changed text-gray-300 to text-white */}
              <span className="text-base font-light text-white ml-1">
                Pro
              </span>
            </div>
          </button>

          <button
            className="lg:hidden text-gray-400 hover:text-white transition"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
          {/* Menu Items */}
          <div className="hidden lg:flex items-center gap-1 text-sm font-medium">
            {menuLinks.map((item) => (
              <button
                key={item.label}
                className={`px-3 py-1.5 rounded transition ${item.active ? 'text-blue-500 bg-blue-500/10' : 'text-white hover:text-blue-400 hover:bg-blue-500/20'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right Section: Search, Chain, Wallet */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-end flex-1 lg:flex-none">
          <button className="lg:hidden text-gray-400 hover:text-white transition p-2">
            <Search className="w-5 h-5" />
          </button>

          <div className="relative hidden lg:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white" />
            <input
              type="text"
              placeholder="Search by token or CA..."
              className="bg-[#111] border border-gray-800 rounded-full pl-10 pr-12 py-1.5 text-[13px] font-semibold text-white placeholder-gray-500 w-56 focus:outline-none focus:border-gray-700 transition-colors"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white border border-gray-700 rounded-xl py-[1px] px-2">/</span>
          </div>
          <div className="relative">
            <button 
              onClick={() => setShowChainDropdown(!showChainDropdown)}
              className="flex items-center gap-2 bg-[#06070B] border-[2px] border-[#29220B] rounded-full px-2 py-1 hover:border-yellow-700 transition"
            >
              {selectedChain === 'BNB' ? (
                <div className="w-5 h-5 text-yellow-500">
                  <svg
                    viewBox="0 0 2496 2496"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g>
                      <path
                        fill="#06070B"
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
              ) : (
                <div className="w-5 h-5">
                   <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                      <defs>
                        <linearGradient id="solGradientMain" x1="3" y1="4" x2="21" y2="17.5" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#9945FF" />
                          <stop offset="1" stopColor="#14F195" />
                        </linearGradient>
                      </defs>
                      <path d="M6 4 L20 4 L17 7.5 L3 7.5 Z" fill="url(#solGradientMain)" />
                      <path d="M3 9 L17 9 L20 12.5 L6 12.5 Z" fill="url(#solGradientMain)" />
                      <path d="M6 14 L20 14 L17 17.5 L3 17.5 Z" fill="url(#solGradientMain)" />
                    </svg>
                </div>
              )}
              <span className="text-sm text-white font-medium">{selectedChain}</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
            
            {showChainDropdown && (
              <div className="absolute top-full mt-2 right-0 bg-[#111] border border-gray-800 rounded-lg overflow-hidden shadow-xl z-50 w-40 py-1">
                <button
                  onClick={() => { setSelectedChain('BNB'); setShowChainDropdown(false); }}
                  className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-800 transition text-left"
                >
                  <span className="text-yellow-500 font-bold"><img className='h-4' src="https://images.seeklogo.com/logo-png/47/2/bnb-bnb-logo-png_seeklogo-476074.png" alt="" /></span>
                  <span className="text-sm text-white">BNB</span>
                </button>
                <button
                  onClick={() => { setSelectedChain('SOL'); setShowChainDropdown(false); }}
                  className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-800 transition text-left"
                >
                  <div className="w-5 h-5">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                      <defs>
                        <linearGradient id="solGradientDropdown" x1="3" y1="4" x2="21" y2="17.5" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#9945FF" />
                          <stop offset="1" stopColor="#14F195" />
                        </linearGradient>
                      </defs>
                      <path d="M6 4 L20 4 L17 7.5 L3 7.5 Z" fill="url(#solGradientDropdown)" />
                      <path d="M3 9 L17 9 L20 12.5 L6 12.5 Z" fill="url(#solGradientDropdown)" />
                      <path d="M6 14 L20 14 L17 17.5 L3 17.5 Z" fill="url(#solGradientDropdown)" />
                    </svg>
                  </div>
                  <span className="text-sm text-white">SOL</span>
                </button>
              </div>
            )}
          </div>

          <button className="bg-[#3b82f6] hover:bg-blue-600 text-black text-sm font-bold px-4 py-1.5 rounded-full transition shadow-[0_0_15px_rgba(59,130,246,0.4)]">
            Deposit
          </button>

          <button className="text-white hover:text-white transition h-8 w-8 rounded-full flex justify-center items-center bg-gray-800">
            <Star className="w-5 h-5" />
          </button>

          <div className="flex items-center bg-[#292B37] border border-gray-800 rounded-full h-9">
            <div className="flex items-center gap-2 font-bold px-3 h-full border-r border-gray-800">
              <Wallet className="w-4 h-4 text-white" />
              <span className="text-sm text-white flex items-center"><img className='mr-2 h-4' src="https://images.seeklogo.com/logo-png/47/2/bnb-bnb-logo-png_seeklogo-476074.png" alt="" />0</span>
            </div>
            <div className="flex items-center gap-2 px-3 font-bold h-full">
              <div className="w-4 h-4 bg-teal-500/20 rounded-full flex items-center justify-center">
                 <span className="text-[10px] text-teal-400"><img src="https://axiom.trade/images/usdc-perps.svg" alt="" /></span>
              </div>
              <span className="text-sm text-white">0</span>
              <ChevronDown className="w-4 h-4 text-white ml-1" />
            </div>
          </div>

          <button className="relative group">
            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center border border-gray-700 group-hover:border-gray-500 transition">
               <UserRoundCog className="w-5 h-5 text-white" />
            </div>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-800 px-4 pb-4 space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search by token or CA..."
              className="w-full bg-[#111] border border-gray-800 rounded-full pl-10 pr-4 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gray-700 transition-colors"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {menuLinks.map((item) => (
              <button
                key={item.label}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${item.active ? 'text-blue-500 bg-blue-500/10' : 'text-white/80 bg-[#111] hover:bg-[#1a1a1a]'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}