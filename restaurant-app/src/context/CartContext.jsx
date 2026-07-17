import { createContext, useContext, useEffect, useReducer } from 'react'

const CartContext = createContext(null)

const STORAGE_KEY = 'ember-vine-cart'

function loadInitialState() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : { items: [] }
  } catch {
    return { items: [] }
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find((i) => i.id === action.payload.id)
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i
          ),
        }
      }
      return { items: [...state.items, { ...action.payload, qty: 1 }] }
    }
    case 'REMOVE_ITEM':
      return { items: state.items.filter((i) => i.id !== action.payload.id) }
    case 'INCREMENT':
      return {
        items: state.items.map((i) =>
          i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i
        ),
      }
    case 'DECREMENT':
      return {
        items: state.items
          .map((i) => (i.id === action.payload.id ? { ...i, qty: i.qty - 1 } : i))
          .filter((i) => i.qty > 0),
      }
    case 'CLEAR':
      return { items: [] }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, undefined, loadInitialState)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  const totalItems = state.items.reduce((sum, i) => sum + i.qty, 0)
  const totalPrice = state.items.reduce((sum, i) => sum + i.qty * i.price, 0)

  const value = {
    items: state.items,
    totalItems,
    totalPrice,
    addItem: (item) => dispatch({ type: 'ADD_ITEM', payload: item }),
    removeItem: (id) => dispatch({ type: 'REMOVE_ITEM', payload: { id } }),
    increment: (id) => dispatch({ type: 'INCREMENT', payload: { id } }),
    decrement: (id) => dispatch({ type: 'DECREMENT', payload: { id } }),
    clear: () => dispatch({ type: 'CLEAR' }),
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}
