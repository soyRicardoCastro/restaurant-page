import Pizzaguacarena from '../img/productos/pizza/pizza-guacareña.jpeg'
import Pizzapepperoni from '../img/productos/pizza/pizza-peperoni.jpeg'
import Pizzacalzone from '../img/productos/pizza/pizza-calzone.jpeg'
import Pizzacarne from '../img/productos/pizza/pizza-carne.jpeg'
import Pizzachampinones from '../img/productos/pizza/pizza-champiñones.jpeg'
import Pizzacorriente from '../img/productos/pizza/pizza-corriente.jpeg'
import Pizzacebolla from '../img/productos/pizza/pizza-cebolla.jpeg'
import Pizzamaiz from '../img/productos/pizza/pizza-maiz.jpeg'
import Pizzapollo from '../img/productos/pizza/pizza-pollo.jpeg'
import Pizzatocineta from '../img/productos/pizza/pizza-tocineta.jpeg'
import Pizzaespecial from '../img/productos/pizza/pizza-especial.jpeg'
import Pizzagranja from '../img/productos/pizza/pizza-granja.jpeg'
import Pizzavegetariana from '../img/productos/pizza/pizza-vegetariana.jpeg'
import Pizzasuper from '../img/productos/pizza/pizza-super.jpeg'
import Pizzacamarones from '../img/productos/pizza/pizza-camarones.jpeg'
import Pizzaminota from '../img/productos/pizza/pizza-miñota.jpeg'
import Pizzasalchichon from '../img/productos/pizza/pizza-salchichon.jpeg'

import Products from '../components/Products.jsx'
import Helmet from 'react-helmet'

export default function Pizzas() {
 return(
 <>
 <Helmet>
  <title>Pizzas | Asados La Guacareña</title>
 </Helmet>
 <section className="productos">
  <Products name='Pizza Guacareña' img={Pizzaguacarena} dolar='4.20' info='Lorem ipsum dolor sit amet consectetur adipisicing elit. At, praesentium?' />

  <Products name='Pizza Pepperoni' img={Pizzapepperoni} dolar='4' info='Lorem ipsum dolor sit amet consectetur adipisicing elit. At, praesentium?' />

  <Products name='Pizza Calzone' img={Pizzacalzone} dolar='4' info='Lorem ipsum dolor sit amet consectetur adipisicing elit. At, praesentium?' />

  <Products name='Pizza de Carne' img={Pizzacarne} dolar='3.50' info='Lorem ipsum dolor sit amet consectetur adipisicing elit. At, praesentium?' />

  <Products name='Pizza de Champiñones' img={Pizzachampinones} dolar='4' info='Lorem ipsum dolor sit amet consectetur adipisicing elit. At, praesentium?' />

  <Products name='Pizza de Corriente' img={Pizzacorriente} dolar='4' info='Lorem ipsum dolor sit amet consectetur adipisicing elit. At, praesentium?' />

  <Products name='Pizza de Cebolla' img={Pizzacebolla} dolar='3.20' info='Lorem ipsum dolor sit amet consectetur adipisicing elit. At, praesentium?' />

  <Products name='Pizza de Maíz' img={Pizzamaiz} dolar='4' info='Lorem ipsum dolor sit amet consectetur adipisicing elit. At, praesentium?' />

  <Products name='Pizza de Pollo' img={Pizzapollo} dolar='4' info='Lorem ipsum dolor sit amet consectetur adipisicing elit. At, praesentium?' />

  <Products name='Pizza de Tocineta' img={Pizzatocineta} dolar='3.80' info='Lorem ipsum dolor sit amet consectetur adipisicing elit. At, praesentium?' />

  <Products name='Pizza Especial' img={Pizzaespecial} dolar='3.50' info='Lorem ipsum dolor sit amet consectetur adipisicing elit. At, praesentium?' />

  <Products name='Pizza Granja' img={Pizzagranja} dolar='4' info='Lorem ipsum dolor sit amet consectetur adipisicing elit. At, praesentium?' />

  <Products name='Pizza Vegetariana' img={Pizzavegetariana} dolar='3.50' info='Lorem ipsum dolor sit amet consectetur adipisicing elit. At, praesentium?' />

  <Products name='Pizza Super' img={Pizzasuper} dolar='3.80' info='Lorem ipsum dolor sit amet consectetur adipisicing elit. At, praesentium?' />

  <Products name='Pizza de Camarones' img={Pizzacamarones} dolar='4' info='Lorem ipsum dolor sit amet consectetur adipisicing elit. At, praesentium?' />

  <Products name='Pizza de Miñota' img={Pizzaminota} dolar='4' info='Lorem ipsum dolor sit amet consectetur adipisicing elit. At, praesentium?' />

  <Products name='Pizza de Salchichon' img={Pizzasalchichon} dolar='4' info='Lorem ipsum dolor sit amet consectetur adipisicing elit. At, praesentium?' />
 </section>
 </>
 )
}