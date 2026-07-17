# Soundar RP — React Restaurant App

A complete, multi-page React front end for a wood-fired restaurant, built with
Vite and React Router DOM.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To build for production: `npm run build` (output goes to `dist/`).

## Pages / Routes

| Route                 | Page                                   |
|------------------------|-----------------------------------------|
| `/`                    | Home                                    |
| `/about`                | About                                   |
| `/menu`                 | Menu (list + filters)                   |
| `/menu/:itemId`         | Menu item detail — **nested route**     |
| `/services`             | Services (redirects content via tabs)   |
| `/services/dining`      | Dining — **nested route**               |
| `/services/catering`    | Catering — **nested route**             |
| `/services/events`      | Private Events — **nested route**       |
| `/gallery`               | Gallery (live API integration)          |
| `/reservation`           | Reservation form                        |
| `/reviews`               | Reviews (full CRUD)                     |
| `/cart`                  | Cart (Context + useReducer)             |
| `/contact`                | Contact form                            |
| `*`                        | 404 Not Found                           |

## Where each session topic lives

- **Components / Props** — `components/MenuCard.jsx`, `components/Navbar.jsx`, `components/Footer.jsx`
- **useState** — forms in `Reservation.jsx`, `Reviews.jsx`, `Contact.jsx`, filters in `Menu.jsx`, `Gallery.jsx`
- **useEffect** — document title per page, interval in `Home.jsx`, outside-click handling in `Navbar.jsx`, data fetching in `useFetch.js`
- **useRef** — autofocus in `Reservation.jsx`, outside-click detection in `Navbar.jsx`
- **useContext** — `context/CartContext.jsx`, consumed in `Navbar.jsx`, `Cart.jsx`, `MenuCard.jsx`
- **useReducer** — cart logic in `context/CartContext.jsx`
- **Conditional Rendering** — loading/error/empty states in `Gallery.jsx`, `Menu.jsx`, `Cart.jsx`, `Reviews.jsx`
- **List Rendering** — menu grid, cart lines, reviews grid, gallery grid
- **API Integration** — `Gallery.jsx` calls the public TheMealDB API through `useFetch`
- **Custom Hooks** — `hooks/useLocalStorage.js`, `hooks/useFetch.js`
- **Routing / Nested Routing** — `App.jsx` (see route table above), `Menu.jsx` + `Menu/MenuItemDetail.jsx`, `Services.jsx` + `Services/*`
- **useParams** — `pages/Menu/MenuItemDetail.jsx`
- **useSearchParams** — category + search filters in `Menu.jsx`
- **CRUD Operations** — `Reviews.jsx` (create, read, update, delete reviews); cart add/update/remove in `CartContext.jsx`
- **Form Validation** — `Reservation.jsx`, `Contact.jsx`, `Reviews.jsx`
- **Responsive UI** — `index.css` (mobile nav, responsive grids, breakpoints at 960px / 720px)

## Notes

- Data persistence (cart, reviews, reservations) uses `localStorage`, so it's
  scoped to your browser and resets if you clear site data.
- The Gallery page requires an internet connection since it calls a live public API.
