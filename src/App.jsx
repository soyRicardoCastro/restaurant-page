import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavMain from './components/NavMain.jsx'
import Main from './pages/Main.jsx'
import Menu from './pages/Menu.jsx'
import Contact from './pages/Contact.jsx'
import Combos from './pages/Combos.jsx'
import Pizzas from './pages/Pizzas.jsx'
import Pastas from './pages/Pastas.jsx'
import Pollos from './pages/Pollos.jsx'
import Carnes from './pages/Carnes.jsx'
import Pescados from './pages/Pescados.jsx'
import Entradas from './pages/Entradas.jsx'
import Contornos from './pages/Contornos.jsx'

import NotFoundPage from './pages/NotFoundPage.jsx'

export default function App() {

  return (
  <BrowserRouter>

    <NavMain />

    <Routes>
    	<Route path='/' element={<Main />} />
    	<Route path='/menu' element={<Menu />} />
      <Route path='/contact' element={<Contact />} />
    	<Route path='/menu/combos' element={<Combos />} />
    	<Route path='/menu/pizzas' element={<Pizzas />} />
      <Route path='/menu/pastas' element={<Pastas />} />
      <Route path='/menu/pollos' element={<Pollos />} />
      <Route path='/menu/carnes-parrillas' element={<Carnes />} />
      <Route path='/menu/pescados-mariscos' element={<Pescados />} />
      <Route path='/menu/entradas-ensaladas' element={<Entradas />} />
      <Route path='/menu/contornos-raciones' element={<Contornos />} />
      <Route path='/*' element={<NotFoundPage />} />
    </Routes>
   </BrowserRouter>
  )
}

