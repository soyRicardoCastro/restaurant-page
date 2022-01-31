import Typed from 'typed.js'
import {useEffect, useRef} from 'react'
import {NavLink} from 'react-router-dom'
import 'boxicons'
import IMG from '../img/undraw_chef_cu-0-r.svg'

import Helmet from 'react-helmet'

export default function Main() {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
	 	strings: ["Pollos", "Carnes", "Pizzas", "Mariscos"],
		typeSpeed: 75,
		startDelay: 300,
		backSpeed: 75,
		smartBackspace: true,
		shuffle: false,
		backDelay: 2500,
		loop: true,
		loopCount: false,
		showCursor: true,
		cursorChar: '|',
		contentType: 'html'
	})

	return () => {
	 typed.destroy();
	}
 }, [])

 return (
 	<>
 	<Helmet>
  	  <title>Asados La Guacareña</title>
 	</Helmet>
 	<main>
 	<div class="contenedorImg">
	<img src={IMG} alt="Imagen de Asados La Guacareña" class="illustracion" />
	</div>
 	<div className="contenedorTexto">
 	<h2 className="titulo">Tenemos lo mejor para ti en <br/><span ref={el} className='Typed'></span></h2>
	 <p>¿Qué esperas?, ¡ven y visitanos!, puedes ver la ubicación en <a href="https://goo.gl/maps/4qzjzjMKRdXRrpSL8" target="_blank" className="linkGm">Google Maps <box-icon color='white' name='map'></box-icon></a></p>
	<NavLink className="boton dos" to="/menu"><span>Ver Precios</span></NavLink>
 	</div>
 	</main>
 	</>
 	);
}
