import ComboCuarentena from '../img/productos/combos/combo-cuarentena.jpeg'
import ComboPolloAsado from '../img/productos/combos/combo-pollo-asado.jpeg'
import ComboPolloBroaster from '../img/productos/combos/combo-pollo-broaster.jpeg'
import ComboPopular from '../img/productos/combos/combo-popular.jpeg'
import ComboMama1 from '../img/productos/combos/combo-mama-1.jpeg'
import ComboMama2 from '../img/productos/combos/combo-mama-2.jpeg'
import ComboPapa1 from '../img/productos/combos/combo-papa-1.jpeg'
import ComboPapa2 from '../img/productos/combos/combo-papa-2.jpeg'

import Products from '../components/Products.jsx'

import Helmet from 'react-helmet'
export default function Combos() {
 return (
  <>
  <Helmet>
    <title>Combos | Asados La Guacareña</title>
  </Helmet>
  <section className="productos">
   <Products name='Combo Cuarentena' img={ComboCuarentena} dolar='24' info='1 Pollo a la Brasa, 1 Pizza Especial, 1 Pizza de Pollo, 3 Hallaquitas, 1 Ración de Papas Fritas, 1 Guasacaca, 1 Refresco de Litro y Medio' />

   <Products name='Combo Pollo a La Broaster' img={ComboPolloBroaster} dolar='16' info='1 Pollo a la Brasa, 1 Pizza Especial, 1 Pizza de Pollo, 3 Hallaquitas, 1 Ración de Papas Fritas, 1 Guasacaca, 1 Refresco de Litro y Medio' />

   <Products name='Combo Pollo Asado' img={ComboPolloAsado} dolar='15' info='1 Pollo a la Brasa, 1 Pizza Especial, 1 Pizza de Pollo, 3 Hallaquitas, 1 Ración de Papas Fritas, 1 Guasacaca, 1 Refresco de Litro y Medio' />

   <Products name='Combo Popular' img={ComboPopular} dolar='10.5' info='1 Pollo a la Brasa, 1 Pizza Especial, 1 Pizza de Pollo, 3 Hallaquitas, 1 Ración de Papas Fritas, 1 Guasacaca, 1 Refresco de Litro y Medio' />

   <Products name='Combo Para Mamá 1' img={ComboMama1} dolar='32.5' info='1 Pollo a la Brasa, 1 Pizza Especial, 1 Pizza de Pollo, 3 Hallaquitas, 1 Ración de Papas Fritas, 1 Guasacaca, 1 Refresco de Litro y Medio' />

   <Products name='Combo Para Mamá 2' img={ComboMama2} dolar='31.5' info='1 Pollo a la Brasa, 1 Pizza Especial, 1 Pizza de Pollo, 3 Hallaquitas, 1 Ración de Papas Fritas, 1 Guasacaca, 1 Refresco de Litro y Medio' />

   <Products name='Combo Para Papá 1' img={ComboPapa1} dolar='31.5' info='1 Pollo a la Brasa, 1 Pizza Especial, 1 Pizza de Pollo, 3 Hallaquitas, 1 Ración de Papas Fritas, 1 Guasacaca, 1 Refresco de Litro y Medio' />

   <Products name='Combo Para Papá 2' img={ComboPapa2} dolar='29' info='1 Pollo a la Brasa, 1 Pizza Especial, 1 Pizza de Pollo, 3 Hallaquitas, 1 Ración de Papas Fritas, 1 Guasacaca, 1 Refresco de Litro y Medio' />




  </section>
  </>
 )
}