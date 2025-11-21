import { useState, useEffect, useRef } from 'react'
import { ColumnData } from '../types'
import { getColumnData } from './mockData'
import { updateColumnPrices } from '../priceUpdater'

/**
 * Custom hook that simulates a WebSocket connection for real-time price updates.
 * Adds a small artificial delay so the UI can show skeletons / shimmer states.
 */
export function useWebSocket() {
  const [columns, setColumns] = useState<ColumnData[] | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    // Simulate initial fetch with a small delay so skeletons are visible
    timeoutRef.current = setTimeout(() => {
      try {
        const initial = getColumnData()
        setColumns(initial)
        setIsLoading(false)
      } catch (e) {
        setError(e as Error)
        setIsLoading(false)
      }
    }, 600) // 600–800ms looks good for shimmer; keep it short

    // Simulate WebSocket updates every 2 seconds
    intervalRef.current = setInterval(() => {
      setColumns(prevColumns => {
        if (!prevColumns) return prevColumns
        return prevColumns.map(column => ({
          ...column,
          pairs: updateColumnPrices(column.pairs),
        }))
      })
    }, 2000)

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return { columns, isLoading, error }
}

