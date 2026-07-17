import { useEffect, useState } from 'react'

/**
 * Generic data-fetching custom hook.
 * Returns { data, loading, error } and re-fetches whenever `url` changes.
 */
export default function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(Boolean(url))
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!url) return
    let cancelled = false

    async function run() {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(url)
        if (!res.ok) throw new Error(`Request failed with status ${res.status}`)
        const json = await res.json()
        if (!cancelled) setData(json)
      } catch (err) {
        if (!cancelled) setError(err.message || 'Something went wrong')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    run()
    return () => {
      cancelled = true
    }
  }, [url])

  return { data, loading, error }
}
