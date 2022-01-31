import { NavLink } from 'react-router-dom'
import 'boxicons'
import Logo from '../img/logo.png'
import Menu from '../img/menu.svg'

export default function NavMain(){

 return (
  <div className='contenedor'>
   <header>
  	<nav className='nav'>
  	 <a href='#'>
  	 <img src={Logo} width='150px' height='75px' className='logo' alt='Logo de Asados la Guacareña' />
  	 </a>
  	 
     <label htmlFor="menu" className="navLabel">
      <img src={Menu} alt="Menu" aria-label="Menu" className="navImg" />
     </label>
     <input type="checkbox" id="menu" className="navInput" />

  	 <ul className='navMenu' id='navMenu'>
  	 	<li className='navMenuItem'><NavLink to='/'>Inicio</NavLink></li>
  	 	<li className='navMenuItem'><NavLink to='/menu'>Menú</NavLink></li>
  	 	<li className='navMenuItem'><NavLink to='/contact'>Pedir un Delivery</NavLink></li>
  	 	<li className='navMenuItem navRs'>
        <a href='#' target='_blank'>
          <box-icon type='logo' name='facebook-circle' color='white'></box-icon>
        </a>
        <a href='#' target='_blank'>
          <box-icon type='logo' name='instagram' color='white'></box-icon>
        </a>
        <a href='#' target='_blank'>
         <box-icon type='logo' name='whatsapp' color='white'></box-icon>
        </a>
      </li>
  	 </ul>
  	</nav>
  </header>
  </div>

 )
}