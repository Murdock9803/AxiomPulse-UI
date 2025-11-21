import React, { useState, useEffect } from 'react'
import Modal from './Modal'
import { Search, Hash, Eye, Square, Circle, Zap, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'

interface DisplayModalProps {
  isOpen: boolean
  onClose: () => void
  settings: DisplaySettings
  onSettingsChange: (settings: DisplaySettings) => void
}

export interface DisplaySettings {
  metricsSize: 'small' | 'large'
  quickBuySize: 'small' | 'large' | 'mega' | 'ultra'
  quickBuyAmount: number
  theme: 'grey' | 'dark'
  showSearchBar: boolean
  noDecimals: boolean
  showHiddenTokens: boolean
  unhideOnMigrated: boolean
  circleImages: boolean
  progressBar: boolean
}

const defaultSettings: DisplaySettings = {
  metricsSize: 'large',
  quickBuySize: 'small',
  quickBuyAmount: 47,
  theme: 'grey',
  showSearchBar: true,
  noDecimals: false,
  showHiddenTokens: false,
  unhideOnMigrated: false,
  circleImages: false,
  progressBar: true,
}

export default function DisplayModal({
  isOpen,
  onClose,
  settings,
  onSettingsChange,
}: DisplayModalProps) {
  const [activeTab, setActiveTab] = useState<'layout' | 'metrics' | 'extras'>('layout')
  const [localSettings, setLocalSettings] = useState<DisplaySettings>(settings)

  // Sync local settings when modal opens or parent settings change
  useEffect(() => {
    if (isOpen) {
      setLocalSettings(settings)
    }
  }, [isOpen, settings])

  const handleSettingChange = <K extends keyof DisplaySettings>(
    key: K,
    value: DisplaySettings[K]
  ) => {
    const newSettings = { ...localSettings, [key]: value }
    setLocalSettings(newSettings)
    onSettingsChange(newSettings)
  }

  const handleQuickBuyAmountChange = (amount: number) => {
    handleSettingChange('quickBuyAmount', amount)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="" size="md" className="!max-w-md">
      <div className="space-y-6">
        {/* Metrics Section */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-3">Metrics</h3>
          <div className="flex gap-2">
            <button
              onClick={() => handleSettingChange('metricsSize', 'small')}
              className={cn(
                'flex-1 px-4 py-2.5 rounded-lg border transition text-sm',
                localSettings.metricsSize === 'small'
                  ? 'bg-[#1a1a1a] border-gray-700 text-white'
                  : 'bg-[#06070B] border-gray-800 text-gray-400 hover:border-gray-700'
              )}
            >
              MC 77K Small
            </button>
            <button
              onClick={() => handleSettingChange('metricsSize', 'large')}
              className={cn(
                'flex-1 px-4 py-2.5 rounded-lg border transition text-sm',
                localSettings.metricsSize === 'large'
                  ? 'bg-[#1a1a1a] border-gray-700 text-white'
                  : 'bg-[#06070B] border-gray-800 text-gray-400 hover:border-gray-700'
              )}
            >
              MC 77K Large
            </button>
          </div>
        </div>

        {/* Quick Buy Section */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-3">Quick Buy</h3>
          <div className="flex gap-2">
            {(['small', 'large', 'mega', 'ultra'] as const).map((size) => (
              <button
                key={size}
                onClick={() => handleSettingChange('quickBuySize', size)}
                className={cn(
                  'flex-1 flex flex-col items-center gap-2 px-3 py-2.5 rounded-lg border transition text-xs capitalize',
                  localSettings.quickBuySize === size
                    ? 'bg-[#1a1a1a] border-gray-700 text-white'
                    : 'bg-[#06070B] border-gray-800 text-gray-400 hover:border-gray-700'
                )}
              >
                <div className="relative">
                  <Zap className="w-5 h-5 text-blue-500" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                    <span className="text-[10px] font-bold text-black">
                      {localSettings.quickBuyAmount}
                    </span>
                  </div>
                </div>
                <span>{size}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Theme Option */}
        <div>
          <button
            onClick={() =>
              handleSettingChange('theme', localSettings.theme === 'grey' ? 'dark' : 'grey')
            }
            className={cn(
              'w-full flex items-center gap-2 px-4 py-2.5 rounded-lg border transition',
              localSettings.theme === 'grey'
                ? 'bg-[#1a1a1a] border-gray-700 text-white'
                : 'bg-[#06070B] border-gray-800 text-gray-400 hover:border-gray-700'
            )}
          >
            <Sun className="w-4 h-4" />
            <span className="text-sm capitalize">{localSettings.theme}</span>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 border-b border-gray-800">
          {(['layout', 'metrics', 'extras'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                'px-4 py-2 text-sm font-medium transition border-b-2 -mb-[1px]',
                activeTab === tab
                  ? 'text-white border-blue-500'
                  : 'text-gray-400 border-transparent hover:text-gray-300'
              )}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-3">
          {activeTab === 'layout' && (
            <>
              <ToggleOption
                icon={<Search className="w-4 h-4" />}
                label="Show Search Bar"
                checked={localSettings.showSearchBar}
                onChange={(checked) => handleSettingChange('showSearchBar', checked)}
              />
              <ToggleOption
                icon={<Hash className="w-4 h-4" />}
                label="No Decimals"
                checked={localSettings.noDecimals}
                onChange={(checked) => handleSettingChange('noDecimals', checked)}
              />
              <ToggleOption
                icon={<Eye className="w-4 h-4" />}
                label="Show Hidden Tokens"
                checked={localSettings.showHiddenTokens}
                onChange={(checked) => handleSettingChange('showHiddenTokens', checked)}
              />
              <ToggleOption
                icon={<Eye className="w-4 h-4" />}
                label="Unhide on Migrated"
                checked={localSettings.unhideOnMigrated}
                onChange={(checked) => handleSettingChange('unhideOnMigrated', checked)}
              />
              <ToggleOption
                icon={<Square className="w-4 h-4" />}
                label="Circle Images"
                checked={localSettings.circleImages}
                onChange={(checked) => handleSettingChange('circleImages', checked)}
              />
              <ToggleOption
                icon={<Circle className="w-4 h-4" />}
                label="Progress Bar"
                checked={localSettings.progressBar}
                onChange={(checked) => handleSettingChange('progressBar', checked)}
              />
            </>
          )}

          {activeTab === 'metrics' && (
            <div className="text-gray-400 text-sm">
              Metrics customization options coming soon...
            </div>
          )}

          {activeTab === 'extras' && (
            <div className="text-gray-400 text-sm">
              Extra settings coming soon...
            </div>
          )}
        </div>
      </div>
    </Modal>
  )
}

interface ToggleOptionProps {
  icon: React.ReactNode
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
}

function ToggleOption({ icon, label, checked, onChange }: ToggleOptionProps) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={cn(
        'w-full flex items-center gap-3 px-4 py-3 rounded-lg border transition',
        checked
          ? 'bg-[#1a1a1a] border-gray-700 text-white'
          : 'bg-[#06070B] border-gray-800 text-gray-400 hover:border-gray-700'
      )}
    >
      <div className={cn('transition', checked ? 'text-blue-500' : 'text-gray-500')}>
        {icon}
      </div>
      <span className="text-sm flex-1 text-left">{label}</span>
      <div
        className={cn(
          'w-10 h-6 rounded-full transition relative',
          checked ? 'bg-blue-600' : 'bg-gray-700'
        )}
      >
        <div
          className={cn(
            'absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition',
            checked ? 'translate-x-4' : 'translate-x-0'
          )}
        />
      </div>
    </button>
  )
}

export { defaultSettings }

