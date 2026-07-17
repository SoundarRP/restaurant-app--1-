import { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch.js'

const SEARCH_TERMS = ['beef', 'chicken', 'vegetable', 'seafood', 'dessert', 'pasta']

export default function Gallery() {
  useEffect(() => {
    document.title = 'Gallery — Soundar RP'
  }, [])

  const [term, setTerm] = useState('beef')

  // Real public API (TheMealDB) — no key required.
  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
  )

  const meals = data?.meals || []

  return (
    <div className="container section">
      <div className="section-head">
        <p className="eyebrow">Gallery</p>
        <h1 style={{ fontSize: '2.2rem' }}>Inspiration from the fire</h1>
        <p>
          A live look powered by the public TheMealDB API — pick a theme to pull a
          fresh set of dish photography.
        </p>
      </div>

      <div className="tabs">
        {SEARCH_TERMS.map((t) => (
          <button
            key={t}
            className={`tab ${term === t ? 'active' : ''}`}
            onClick={() => setTerm(t)}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Conditional rendering: loading / error / empty / data states */}
      {loading && (
        <div className="loader">
          <span className="spinner" /> Fetching photos…
        </div>
      )}

      {!loading && error && (
        <div className="alert alert-error">
          Couldn't load the gallery right now ({error}). Check your connection and
          try a different theme.
        </div>
      )}

      {!loading && !error && meals.length === 0 && (
        <div className="empty-state">
          <h3>No images found for "{term}".</h3>
        </div>
      )}

      {!loading && !error && meals.length > 0 && (
        <div className="grid grid-4">
          {meals.map((meal) => (
            <div className="card" key={meal.idMeal}>
              <img className="card-img" src={meal.strMealThumb} alt={meal.strMeal} loading="lazy" />
              <div className="card-body">
                <h3 style={{ fontSize: '1rem' }}>{meal.strMeal}</h3>
                <span className="tag">{meal.strCategory || 'Dish'}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
