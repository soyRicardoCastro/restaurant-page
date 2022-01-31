import CamaronesEnchilados from '../img/productos/pescados-mariscos/camarones-enchilados.jpeg'
import CamaronesRebosados from '../img/productos/pescados-mariscos/camarones-rebosados.jpeg'
import CamaronesThermidor from '../img/productos/pescados-mariscos/camarones-thermidor.jpeg'
import CazuelaMariscos from '../img/productos/pescados-mariscos/cazuela-mariscos.jpeg'
import ChurrascoAtunAjillo from '../img/productos/pescados-mariscos/churrasco-atun-ajillo.jpeg'
import ChurrascoDorado from '../img/productos/pescados-mariscos/churrasco-dorado.jpeg'
import RuedaCarite from '../img/productos/pescados-mariscos/rueda-de-carite.jpeg'
import RuedaMeroMarinera from '../img/productos/pescados-mariscos/rueda-de-mero-marinera.jpeg'
import RuedaMero from '../img/productos/pescados-mariscos/rueda-de-mero.jpeg'

import Products from '../components/Products.jsx'
import Helmet from 'react-helmet'

export default function Pescados() {
 return (
 <>
 <Helmet>
  <title>Pescados | Asados La Guacareña</title>
 </Helmet>
 <section className="productos">
  <Products name='Rueda de Mero' dolar='5.5' img={RuedaMero} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit.' />

  <Products name='Rueda de Mero a la Marinera' dolar='10' img={RuedaMeroMarinera} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit.' />

  <Products name='Rueda de Carite' dolar='6.5' img={RuedaCarite} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit.' />

  <Products name='Camarones al Thermidor' dolar='9' img={CamaronesThermidor} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit.' />

  <Products name='Camarones Enchilados' dolar='9' img={CamaronesEnchilados} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit.' />

  <Products name='Camarones Rebosados' dolar='9' img={CamaronesRebosados} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit.' />

  <Products name='Cazuela de Mariscos' dolar='13.5' img={CazuelaMariscos} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit.' />

  <Products name='Churrasco de Atún al Ajillo' dolar='6' img={ChurrascoAtunAjillo} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit.' />

  <Products name='Churrasco Dorado' dolar='7.5' img={ChurrascoDorado} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit.' />
 </section>
 </>
 )
}