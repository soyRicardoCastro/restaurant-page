import CebollaFrita from '../img/productos/contornos-raciones/cebolla-frita.jpeg'
import Chinchurria from '../img/productos/contornos-raciones/chinchurria.jpeg'
import Guasacaca from '../img/productos/contornos-raciones/guasacaca.jpeg'
import Hallaquitas from '../img/productos/contornos-raciones/hallaquitas.jpeg'
import PanAjo from '../img/productos/contornos-raciones/pan-con-ajo.jpeg'
import PapasVapor from '../img/productos/contornos-raciones/papas-al-vapor.jpeg'
import Picante from '../img/productos/contornos-raciones/picante.jpeg'
import PurePapa from '../img/productos/contornos-raciones/pure-de-papa.jpeg'
import QuesoPlancha from '../img/productos/contornos-raciones/queso-plancha.jpeg'
import RacionArepitas from '../img/productos/contornos-raciones/racion-arepitas.jpeg'
import RacionArroz from '../img/productos/contornos-raciones/racion-arroz.jpeg'
import RacionCreadilla from '../img/productos/contornos-raciones/racion-creadilla.jpeg'
import RacionNatilla from '../img/productos/contornos-raciones/racion-natilla.jpeg'
import RacionPapasFritas from '../img/productos/contornos-raciones/racion-papas-fritas.jpeg'
import RacionQuesoParmesano from '../img/productos/contornos-raciones/racion-queso-parmesano.jpeg'
import RacionVegetalesCocidos from '../img/productos/contornos-raciones/racion-vegetales-cocidos.jpeg'

import Products from '../components/Products.jsx'
import Helmet from 'react-helmet'
 
export default function Contornos() {
 return (
 <>
 <Helmet>
  <title>Contornos y Raciones | Asados La Guacareña</title>
 </Helmet>
 <section className="productos">
  <Products name='Cebolla Frita' dolar='2' img={CebollaFrita} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem illum possimus mollitia quasi.' />

  <Products name='Chinchurria' dolar='0.7' img={Chinchurria} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem illum possimus mollitia quasi.' />

  <Products name='Pan con ajo' dolar='1' img={PanAjo} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem illum possimus mollitia quasi.' />

  <Products name='Papas al vapor' dolar='1.3' img={PapasVapor} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem illum possimus mollitia quasi.' />

  <Products name='Pure de Papa' dolar='1.5' img={PurePapa} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem illum possimus mollitia quasi.' />

  <Products name='Queso a la plancha' dolar='1.25' img={QuesoPlancha} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem illum possimus mollitia quasi.' />

  <Products name='Ración de Arróz' dolar='0.83' img={RacionArroz} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem illum possimus mollitia quasi.' />

  <Products name='Ración Arepitas' dolar='0.9' img={RacionArepitas} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem illum possimus mollitia quasi.' />

  <Products name='Ración Creadilla' dolar='2' img={RacionCreadilla} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem illum possimus mollitia quasi.' />

  <Products name='Ración de Papas Fritas' dolar='2.9' img={RacionPapasFritas} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem illum possimus mollitia quasi.' />

  <Products name='Ración de Natilla' dolar='0.90' img={RacionNatilla} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem illum possimus mollitia quasi.' />

  <Products name='Ración de Queso Parmesano' dolar='1.5' img={RacionQuesoParmesano} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem illum possimus mollitia quasi.' />

  <Products name='Ración de Vegetales Cocidos' dolar='1.5' img={RacionVegetalesCocidos} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem illum possimus mollitia quasi.' />

  <Products name='Hallaquitas' dolar='0.45' img={Hallaquitas} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem illum possimus mollitia quasi.' />

  <Products name='Guasacaca' dolar='1.7' img={Guasacaca} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem illum possimus mollitia quasi.' />

  <Products name='Picante' dolar='2.9' img={Picante} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem illum possimus mollitia quasi.' />
 </section>
 </>
 )
}