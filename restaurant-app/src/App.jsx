import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Reservation from './pages/Reservation.jsx'
import Gallery from './pages/Gallery.jsx'
import Reviews from './pages/Reviews.jsx'
import Cart from './pages/Cart.jsx'
import NotFound from './pages/NotFound.jsx'

import Menu from './pages/Menu.jsx'
import MenuItemDetail from './pages/Menu/MenuItemDetail.jsx'

import Services from './pages/Services.jsx'
import Dining from './pages/Services/Dining.jsx'
import Catering from './pages/Services/Catering.jsx'
import Events from './pages/Services/Events.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Menu section with nested routing: /menu and /menu/:itemId */}
          <Route path="/menu" element={<Menu />}>
            <Route path=":itemId" element={<MenuItemDetail />} />
          </Route>

          {/* Services section with nested routing */}
          <Route path="/services" element={<Services />}>
            <Route index element={<Dining />} />
            <Route path="dining" element={<Dining />} />
            <Route path="catering" element={<Catering />} />
            <Route path="events" element={<Events />} />
          </Route>

          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
