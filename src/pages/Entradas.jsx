import EnsaladaAguacate from '../img/productos/entradas-ensaladas/ensalada-aguacate.jpeg'
import EnsaladaCesarCamarones from '../img/productos/entradas-ensaladas/ensalada-cesar-camarones.jpeg'
import EnsaladaCesarCangrejo from '../img/productos/entradas-ensaladas/ensalada-cesar-cangrejo.jpeg'
import EnsaladaCesarPollo from '../img/productos/entradas-ensaladas/ensalada-cesar-pollo.jpeg'
import EnsaladaCesar from '../img/productos/entradas-ensaladas/ensalada-cesar.jpeg'
import EnsaladaEspecial from '../img/productos/entradas-ensaladas/ensalada-especial.jpeg'
import EnsaladaMixta from '../img/productos/entradas-ensaladas/ensalada-mixta.jpeg'
import SopaMariscos from '../img/productos/entradas-ensaladas/sopa-de-mariscos.jpeg'

import Products from '../components/Products.jsx'
import Helmet from 'react-helmet'

export default function Entradas() {
 return (
 <>
 <Helmet>
  <title>Entradas y Ensaladas | Asados La Guacareña</title>
 </Helmet>
  <section className="productos">
   <Products name='Sopa de Mariscos' dolar='8.83' img={SopaMariscos} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem illum possimus mollitia quasi.' />

   <Products name='Ensalada Cesar' dolar='3.5' img={EnsaladaCesar} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem illum possimus mollitia quasi.' />

   <Products name='Ensalada con Camarones' dolar='4.2' img={EnsaladaCesarCamarones} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem illum possimus mollitia quasi.' />

   <Products name='Ensalada Cesar con Cangrejo' dolar='4.2' img={EnsaladaCesarCangrejo} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem illum possimus mollitia quasi.' />

   <Products name='Ensalada de Aguacate' dolar='3.5' img={EnsaladaAguacate} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem illum possimus mollitia quasi.' />

  <Products name='Ensalada Especial' dolar='3.5' img={EnsaladaEspecial} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem illum possimus mollitia quasi.' />

  <Products name='Ensalada Mixta' dolar='3.5' img={EnsaladaMixta} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem illum possimus mollitia quasi.' />

  <Products name='Ensalada Cesar con Pollo' dolar='3.8' img={EnsaladaCesarPollo} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem illum possimus mollitia quasi.' />
   </section>
 </>
 )
}