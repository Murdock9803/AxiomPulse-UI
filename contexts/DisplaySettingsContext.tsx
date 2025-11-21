import React, { createContext, useContext, ReactNode } from 'react'
import { DisplaySettings, defaultSettings } from '@/components/DisplayModal'

interface DisplaySettingsContextType {
  settings: DisplaySettings
  setSettings: (settings: DisplaySettings) => void
}

const DisplaySettingsContext = createContext<DisplaySettingsContextType>({
  settings: defaultSettings,
  setSettings: () => {},
})

export function DisplaySettingsProvider({
  children,
  settings,
  setSettings,
}: {
  children: ReactNode
  settings: DisplaySettings
  setSettings: (settings: DisplaySettings) => void
}) {
  return (
    <DisplaySettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </DisplaySettingsContext.Provider>
  )
}

export function useDisplaySettings() {
  return useContext(DisplaySettingsContext)
}

