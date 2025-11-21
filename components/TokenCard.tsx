import React, { useState } from 'react'
import { TokenPair } from '@/lib/types'
import { Copy, Search, Hand, MessageSquare, Trophy, Crown, Users, Leaf, User, ChefHat, Target, UserPlus, Zap, EyeOff, Ban, Camera } from 'lucide-react'
import { cn, formatPrice } from '@/lib/utils'
import { useDisplaySettings } from '@/contexts/DisplaySettingsContext'

interface TokenCardProps {
  pair: TokenPair
  onCardClick?: (pair: TokenPair) => void
}

export default function TokenCard({ pair, onCardClick }: TokenCardProps) {
  const { settings } = useDisplaySettings()
  const [imgSrc, setImgSrc] = useState(pair.image);
  const idNum = parseInt(pair.id);

  // 1. Icon Logic
  const showLeaf = idNum % 3 === 0;
  const showHand = idNum % 2 === 0;
  const showSearch = idNum % 4 === 0;
  const showProfile = !showLeaf && !showHand;

  // 2. TX Bar Width Logic
  const txBarWidth = Math.min((pair.txCount || 0) / 15, 50);

  // 3. Color logic based on price change direction
  const priceDirection = pair.priceChangeDirection || 'neutral'
  const barColorClass = priceDirection === 'up' ? 'bg-emerald-500' : priceDirection === 'down' ? 'bg-rose-500' : 'bg-emerald-500'
  const trackColorClass = 'bg-rose-500'

  // 4. Text color classes based on change direction
  const getMarketCapColor = () => {
    if (pair.marketCapChangeDirection === 'up') return 'text-emerald-400'
    if (pair.marketCapChangeDirection === 'down') return 'text-rose-400'
    return 'text-blue-400'
  }

  const getVolumeColor = () => {
    if (pair.volumeChangeDirection === 'up') return 'text-emerald-400'
    if (pair.volumeChangeDirection === 'down') return 'text-rose-400'
    return 'text-white'
  }

  const getTxCountColor = () => {
    if (pair.txCountChangeDirection === 'up') return 'text-emerald-400'
    if (pair.txCountChangeDirection === 'down') return 'text-rose-400'
    return 'text-gray-400'
  }

  return (
    <div
      className="bg-[#111] border border-gray-800 rounded-lg p-3 hover:border-gray-700 transition relative cursor-pointer w-full"
      onClick={() => onCardClick?.(pair)}
    >
      
      <div className="flex flex-col gap-3 md:flex-row">
        {/* Left Column: Image + Address */}
        <div className="flex-shrink-0 flex flex-row md:flex-col items-center md:items-center gap-3 md:gap-1.5">
          
          {/* --- HOVER ZOOM CONTAINER --- */}
          <div
            className="relative group/image cursor-pointer"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 1. The Normal Small Image */}
            <img
              src={imgSrc}
              alt={pair.name}
              onError={() => setImgSrc(`https://api.dicebear.com/7.x/initials/svg?seed=${pair.symbol}&backgroundColor=1d1d1d&textColor=white`)}
              style={{ borderColor: pair.borderColor || '#374151' }}
              className={cn(
                'w-16 h-16 object-cover border-2 relative z-10',
                settings.circleImages ? 'rounded-full' : 'rounded-lg'
              )}
            />
            
            {/* 2. The Hand Icon (Badge) */}
            {pair.borderColor === '#22c55e' && (
               <div className="absolute -bottom-1 -right-1 bg-black rounded-full p-0.5 border border-gray-800 z-20">
                  <Hand className="w-3 h-3 text-[#22c55e]" />
               </div>
            )}

            {/* --- HOVER OVERLAY CONTROLS --- */}
            <div className="hidden group-hover/image:flex absolute top-0 left-0 z-[120] flex-col gap-1 p-1">
               <button className="bg-black/60 hover:bg-black/90 rounded p-0.5 text-gray-400 hover:text-white backdrop-blur-sm">
                  <EyeOff className="w-3 h-3" />
               </button>
               
               <button className="bg-black/60 hover:bg-black/90 rounded p-0.5 text-gray-400 hover:text-white backdrop-blur-sm relative">
                  <ChefHat className="w-3 h-3" />
                  <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-400 rotate-45"></div>
               </button>

               <button className="bg-black/60 hover:bg-black/90 rounded p-0.5 text-gray-400 hover:text-white backdrop-blur-sm">
                  <Ban className="w-3 h-3" />
               </button>
            </div>

            <div className="hidden group-hover/image:flex absolute inset-0 items-center justify-center z-[120] pointer-events-none">
               <Camera className="w-6 h-6 text-white drop-shadow-lg" />
            </div>

            {/* 3. THE POPUP (Zoomed Image) */}
            {/* FIXED: Changed to left-[60px] and top-[-80px] 
                This pushes it further right so it doesn't overlap the small image controls.
            */}
            <div className="hidden group-hover/image:block absolute top-[-80px] left-[60px] z-[100] w-56 h-56">
               <img 
                  src={imgSrc} 
                  className="w-full h-full rounded-xl object-cover shadow-2xl border-4 border-[#111]"
                  alt="Zoomed Preview"
               />
            </div>
          </div>
          
          <span className="text-[13px] text-slate-500 font-medium font-mono tracking-tight break-all md:text-center">
             {pair.address}
          </span>
        </div>

        {/* Middle Column: Info & Stats */}
        <div className="flex-1 min-w-0 flex flex-col justify-between">
          
          {/* Top Row: Symbol + Name + Copy */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-white font-bold text-[15px] truncate max-w-[120px]">{pair.symbol}</span>
            <span className="text-gray-400 text-[15px] truncate max-w-full">{pair.name}</span>
            <button className="text-gray-600 hover:text-gray-300">
              <Copy className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Second Row: Time | Icons */}
          <div className="flex flex-wrap items-center gap-2 text-[13px] text-gray-500 mt-0.5">
            <span className="text-emerald-400 font-medium">{pair.timeAgo}</span>
            
            {showLeaf && <Leaf className="w-4 h-4 text-emerald-500" />}
            {showProfile && <User className="w-4 h-4 text-blue-400" />}
            {showHand && <Hand className="w-4 h-4 text-gray-400" />}
            {showSearch && <Search className="w-4 h-4 text-gray-400" />}

            <div className="flex items-center gap-0.5">
               <Users className="w-4 h-4 text-gray-500" />
               <span>1</span>
            </div>
            
            <div className="flex items-center gap-0.5">
               <Trophy className="w-4 h-4 text-gray-500" />
               <span>0</span>
            </div>
             
            <div className="flex items-center gap-0.5">
               <Crown className="w-4 h-4 text-gray-500" />
               <span>0/1</span>
            </div>
          </div>

          {/* Third Row: Metrics Chips */}
          <div className="flex flex-wrap items-center gap-1.5 text-[11px] mt-1.5 font-medium">
             <div className="flex items-center gap-1 bg-[#1A1A1A] border border-gray-800 rounded-full px-2 py-0.5">
               <UserPlus className="w-3 h-3 text-emerald-500" />
               <span className="text-emerald-400">0%</span>
             </div>

             <div className="flex items-center gap-1 bg-[#1A1A1A] border border-gray-800 rounded-full px-2 py-0.5">
               <ChefHat className="w-3 h-3 text-blue-500" />
               <span className="text-blue-400">DS</span>
             </div>

             <div className="flex items-center gap-1 bg-[#1A1A1A] border border-gray-800 rounded-full px-2 py-0.5">
               <Target className="w-3 h-3 text-emerald-500" />
               <span className="text-emerald-400">2%</span>
             </div>
          </div>
        </div>

        {/* Right Column: MC, Volume, TX, Liquidity */}
        <div className="flex flex-row md:flex-col items-center md:items-end justify-between gap-3 md:gap-0 w-full md:w-auto md:min-w-[80px]">
           
           {/* Market Cap */}
           <div className="w-full text-left md:text-right">
              <div className="text-[11px] text-gray-500 uppercase tracking-wider flex items-center justify-start md:justify-end gap-1">
                 MC <span className={cn("font-bold transition-colors duration-300", getMarketCapColor(), settings.metricsSize === 'small' ? 'text-xs' : 'text-sm')}>
                   {formatPrice(pair.marketCap, settings.noDecimals)}
                 </span>
              </div>
              
              {/* Volume */}
              <div className="text-[11px] text-gray-500 flex items-center justify-start md:justify-end gap-1 mt-0.5">
                 V <span className={cn("font-medium transition-colors duration-300", getVolumeColor())}>
                   {formatPrice(pair.volume || '$0', settings.noDecimals)}
                 </span>
              </div>
              
               {/* TX Count + Split Bar */}
               <div className="flex items-center justify-start md:justify-end gap-2 mt-1">
                  <div className="text-[10px] text-gray-600">
                      TX <span className={cn("transition-colors duration-300", getTxCountColor())}>{pair.txCount || 0}</span>
                  </div>
                  
                  {settings.progressBar && (
                    <div className={cn("h-[3px] w-[50px] rounded-full overflow-hidden", trackColorClass)}>
                      <div 
                        className={cn("h-full rounded-full transition-colors duration-300", barColorClass)}
                        style={{ width: `${txBarWidth}px` }}
                      ></div>
                    </div>
                  )}
               </div>
           </div>

           {/* Liquidity Button */}
           <div className="mt-1 w-full flex justify-start md:justify-end">
              <button className="bg-[#3b82f6] hover:bg-blue-600 text-black text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                 <Zap className="w-3 h-3 fill-black text-black" /> 
                 {pair.liquiditySOL}
              </button>
           </div>

        </div>
      </div>
    </div>
  )
}