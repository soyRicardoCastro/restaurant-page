import 'boxicons'
import Whatsapp from '../img/contacto/whatsapp128px.png'
import Helmet from 'react-helmet'

export default function Contact() {
 return (
  <>
  <Helmet>
  <title>Contacto | Asados La Guacareña</title>
 </Helmet>

  <main className="contenedorContact">
  	<div className="contenedorTexto">
     <h3 className="tituloProductos">Solicita un delivery con nuestro aliado comercial <span className="delivery">Delivery Express</span> por medio de <span className="whatsapp">Whatsapp</span><br/>
       <box-icon 
		 name='down-arrow-circle'
		 color='white'
		 animation='fade-down'></box-icon>
	</h3>
	 
  	</div>

  	<div className="contenedorContacto">
     <div className="contenedorContacto_target card">
       <a href="https://api.whatsapp.com/send/?phone=+5804244407611&text&app_absent=0" target="_blank"><img src={Whatsapp} alt="Logo de Whatsapp" /></a>
       <a href="https://api.whatsapp.com/send/?phone=+5804244407611&text&app_absent=0" target="_blank" className="contactoCta">Toca acá para ir a Whatsapp</a>
     </div>
  	</div>
  </main>
  </>	
 )	
}