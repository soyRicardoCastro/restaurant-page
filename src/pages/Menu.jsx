import Product from '../components/ProductList.jsx'

import Combos from '../img/combos.jpeg'
import Pollos from '../img/pollos.jpeg'
import Pizzas from '../img/pizzas.jpeg'
import Pescados from '../img/pescados-mariscos.jpeg'
import Carnes from '../img/carnes-parrillas.jpeg'
import Entradas from '../img/entradas-ensaladas.jpeg'
import Pastas from '../img/pastas.jpeg'
import Contornos from '../img/contornos-raciones.jpeg'

import Helmet from 'react-helmet'

export default function Menu() {
 return (
<>
    <Helmet>
      <title>Menú | Asados La Guacareña</title>
    </Helmet>

 	<div className="contenedorTexto">
    <h2 className="tituloProductos">Mira todo el menú que tenemos para ti</h2>
 	</div>

    <section className="productos">
    <Product
      img={Combos}
      name='Combos'
      src='/menu/combos' />

      <Product
      img={Pollos}
      name='Pollos'
      src='/menu/pollos' />

      <Product
      img={Pizzas}
      name='Pizzas'
      src='/menu/pizzas' />

      <Product
      img={Carnes}
      name='Carnes y Parrillas'
      src='/menu/carnes-parrillas' />

      <Product
      img={Pescados}
      name='Pescados y Mariscos'
      src='/menu/pescados-mariscos' />

      <Product
      img={Entradas}
      name='Entradas y Ensaladas'
      src='/menu/entradas-ensaladas' />

      <Product
      img={Pastas}
      name='Pastas'
      src='/menu/pastas' />

      <Product
      img={Contornos}
      name='Contornos y Raciones'
      src='/menu/contornos-raciones' />
 	</section>
</>
 )
}

