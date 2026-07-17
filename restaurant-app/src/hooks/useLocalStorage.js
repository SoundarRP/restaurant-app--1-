import { useEffect, useState } from 'react'

/**
 * Custom hook that behaves like useState but persists the value
 * to localStorage, so data survives page refreshes.
 */
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key)
      return stored ? JSON.parse(stored) : initialValue
    } catch (err) {
      console.warn('useLocalStorage: could not read key', key, err)
      return initialValue
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (err) {
      console.warn('useLocalStorage: could not write key', key, err)
    }
  }, [key, value])

  return [value, setValue]
}
