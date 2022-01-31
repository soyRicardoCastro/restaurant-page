import IMG from '../img/404.svg'
import Helmet from 'react-helmet'

export default function NotFoundPage(){
 return(
 <>
 <Helmet>
 	<title>404 Página no encontrada | Asados La Guacareña</title>
 </Helmet>

 <div className="contenedorNotFound">
 <div className="contenedorTexto">
   <h2 className='titulo'>Lo sentimos mucho, la página que busca no existe (O^^)O</h2>
   <h4 className='h4'>Error 404 | Página no encontrada</h4>
   </div>
   <figure className="imgNot">
   <img src={IMG} alt="Not Found Page Image" />
   </figure>
 </div>
 </>
 )
}