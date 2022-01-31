import PolloBrasa from '../img/productos/pollos/pollo-a-la-brasa.jpeg'
import PolloBrasaMedio from '../img/productos/pollos/pollo-a-la-brasa-medio.jpeg'
import PolloBroaster from '../img/productos/pollos/pollo-a-la-broaster.jpeg'
import ChurrascoPollo from '../img/productos/pollos/churrasco-de-pollo.jpeg'
import ChicharronPollo from '../img/productos/pollos/chicharron-de-pollo.jpeg'
import RacionAlitas from '../img/productos/pollos/racion-de-alitas.jpeg'
import RacionAlitasMedio from '../img/productos/pollos/racion-de-alitas-medio.jpeg'

import Products from '../components/Products.jsx'
import Helmet from 'react-helmet'

export default function Pollos(){
 return (
 <>
 <Helmet>
  <title>Pollos | Asados La Guacareña</title>
 </Helmet>
  <section className="productos">
   <Products name='Pollo a la Brasa' dolar='8.5' img={PolloBrasa} info='Lorem ipsum dolor sit, amet consectetur,' />

   <Products name='Medio Pollo a la Brasa' dolar='4.25' img={PolloBrasaMedio} info='Lorem ipsum dolor sit, amet consectetur,' />

   <Products name='Pollo a la Broaster' dolar='14.5' img={PolloBroaster} info='Lorem ipsum dolor sit, amet consectetur,' />

   <Products name='Churrasco de Pollo' dolar='5' img={ChurrascoPollo} info='Lorem ipsum dolor sit, amet consectetur,' />

   <Products name='Chicharron de Pollo' dolar='6.5' img={ChicharronPollo} info='Lorem ipsum dolor sit, amet consectetur,' />

   <Products name='Ración de Alitas' dolar='8.5' img={RacionAlitas} info='Lorem ipsum dolor sit, amet consectetur,' />

   <Products name='Media Ración de Alitas' dolar='5.30' img={RacionAlitasMedio} info='Lorem ipsum dolor sit, amet consectetur,' />
  </section>
 </>
 )
}