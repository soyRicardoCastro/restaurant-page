import FetucciniAlfredo from '../img/productos/pastas/fetuccini-alfredo.jpeg'
import FetucciniCarbonara from '../img/productos/pastas/fetuccini-carbonara.jpeg'
import FetucciniGuacarena from '../img/productos/pastas/fetuccini-guacareña.jpeg'
import FetucciniMarinera from '../img/productos/pastas/fetuccini-marinera.jpeg'
import Pasticho from '../img/productos/pastas/pasticho.jpeg'

import Products from '../components/Products.jsx'
import Helmet from 'react-helmet'

export default function Pastas() {
 return (
 <>
 <Helmet>
  <title>Pastas | Asados La Guacareña</title>
 </Helmet>
 <section className="productos">
  <Products name='Pasticho' dolar='6' img={Pasticho} info='lorem impsun dolor'  />

  <Products name='Fetuccini Alfredo' dolar='5.5' img={FetucciniAlfredo} info='lorem impsun dolor'  />

  <Products name='Fetuccini Carbonara' dolar='5' img={FetucciniCarbonara} info='lorem impsun dolor'  />

  <Products name='Fetuccini Guacareña' dolar='8' img={FetucciniGuacarena} info='lorem impsun dolor'  />

  <Products name='Fetuccini Marinera' dolar='11' img={FetucciniMarinera} info='lorem impsun dolor'  />
 </section>
 </>
 )
}