import { useEffect, useMemo } from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'
import menuData, { categories } from '../data/menuData.js'
import MenuCard from '../components/MenuCard.jsx'

export default function Menu() {
  useEffect(() => {
    document.title = 'Menu — Soundar RP'
  }, [])

  // useSearchParams keeps the active category filter in the URL,
  // e.g. /menu?category=Mains — shareable and bookmarkable.
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('category') || 'All'
  const query = searchParams.get('q') || ''

  const filteredItems = useMemo(() => {
    return menuData.filter((item) => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory
      const matchesQuery = item.name.toLowerCase().includes(query.toLowerCase())
      return matchesCategory && matchesQuery
    })
  }, [activeCategory, query])

  function handleCategoryClick(category) {
    const next = new URLSearchParams(searchParams)
    if (category === 'All') next.delete('category')
    else next.set('category', category)
    setSearchParams(next)
  }

  function handleSearchChange(e) {
    const next = new URLSearchParams(searchParams)
    if (e.target.value) next.set('q', e.target.value)
    else next.delete('q')
    setSearchParams(next)
  }

  return (
    <div className="container section">
      <div className="section-head">
        <p className="eyebrow">The menu</p>
        <h1 style={{ fontSize: '2.2rem' }}>Everything comes off the fire</h1>
        <p>Filter by course, or search for something specific.</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', marginBottom: 8 }}>
        <div className="tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="field" style={{ maxWidth: 260, marginBottom: 0 }}>
          <input
            type="text"
            placeholder="Search dishes…"
            value={query}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {/* Conditional rendering: empty state vs list */}
      {filteredItems.length === 0 ? (
        <div className="empty-state">
          <h3>No dishes match that search.</h3>
          <p>Try a different category or clear the search box.</p>
        </div>
      ) : (
        <div className="grid grid-3">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      )}

      {/* Nested route target: /menu/:itemId renders here */}
      <Outlet />
    </div>
  )
}
