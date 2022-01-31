import Bisteck from '../img/productos/carnes-parrillas/bisteck.jpeg'
import Chuleta from '../img/productos/carnes-parrillas/chuleta.jpeg'
import Churrasco2 from '../img/productos/carnes-parrillas/churrasco-2-personas.jpeg'
import Churrasco3 from '../img/productos/carnes-parrillas/churrasco-3-personas.jpeg'
import Churrasco4 from '../img/productos/carnes-parrillas/churrasco-4-personas.jpeg'
import ChurrascoEspecial from '../img/productos/carnes-parrillas/churrasco-especial.jpeg'
import Lomito2 from '../img/productos/carnes-parrillas/lomito-2-personas.jpeg'
import Lomito3 from '../img/productos/carnes-parrillas/lomito-3-personas.jpeg'
import Lomito4 from '../img/productos/carnes-parrillas/lomito-4-personas.jpeg'
import ParrillaArgentina from '../img/productos/carnes-parrillas/parrilla-argentina.jpeg'
import ParrillaCerdo from '../img/productos/carnes-parrillas/parrilla-cerdo.jpeg'
import ParrillaCriolla from '../img/productos/carnes-parrillas/parrilla-criolla.jpeg'
import ParrillaFamiliar from '../img/productos/carnes-parrillas/parrilla-familiar.jpeg'
import ParrillaGuacarena from '../img/productos/carnes-parrillas/parrilla-guacareña.jpeg'
import ParrillaHigado from '../img/productos/carnes-parrillas/parrilla-higado.jpeg'
import ParrillaLlanera from '../img/productos/carnes-parrillas/parrilla-llanera.jpeg'
import ParrillaLomito from '../img/productos/carnes-parrillas/parrilla-lomito.jpeg'
import ParrillaMarTierra from '../img/productos/carnes-parrillas/parrilla-mar-tierra.jpeg'
import ParrillaMixta from '../img/productos/carnes-parrillas/parrilla-mixta.jpeg'
import ParrillaMinota from '../img/productos/carnes-parrillas/parrilla-miñota.jpeg'
import ParrillaPicadaPollo from '../img/productos/carnes-parrillas/parrilla-picada-de-pollo.jpeg'
import ParrillaPicada from '../img/productos/carnes-parrillas/parrilla-picada.jpeg'
import ParrillaPollo from '../img/productos/carnes-parrillas/parrilla-pollo.jpeg'
import PuntaTrasera2 from '../img/productos/carnes-parrillas/punta-trasera-2.jpeg'
import PuntaTrasera3 from '../img/productos/carnes-parrillas/punta-trasera-3.jpeg'
import PuntaTrasera4 from '../img/productos/carnes-parrillas/punta-trasera-4.jpeg'
import PuntaTrasera from '../img/productos/carnes-parrillas/punta-trasera.jpeg'
import Helmet from 'react-helmet'

import Products from '../components/Products.jsx'

export default function Carnes(){
 return(
 <>
 <Helmet>
  <title>Carnes | Asados La Guacareña</title>
 </Helmet>

 <section className="productos">
  <Products name='Punta Trasera' dolar='6.5' img={PuntaTrasera} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. ' />

  <Products name='Punta Trasera 2' dolar='11.5' img={PuntaTrasera2} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. ' />

  <Products name='Punta Trasera 3' dolar='17.5' img={PuntaTrasera3} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. ' />

  <Products name='Punta Trasera 4' dolar='23' img={PuntaTrasera4} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. ' />

  <Products name='Parrilla Familiar' dolar='45' img={ParrillaFamiliar} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. ' />

  <Products name='Parrilla de Higado' dolar='5' img={ParrillaHigado} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. ' />

  <Products name='Parrilla Llanera' dolar='7.5' img={ParrillaLlanera} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. ' />

  <Products name='Churrasco Especial' dolar='7.5' img={ChurrascoEspecial} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. ' />

  <Products name='Churrasco para 2' dolar='12.5' img={Churrasco2} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. ' />

  <Products name='Churrasco para 3' dolar='18.5' img={Churrasco3} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. ' />

  <Products name='Churrasco para 4' dolar='25' img={Churrasco4} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. ' />

  <Products name='Parrilla Criolla' dolar='6.5' img={ParrillaCriolla} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. ' />

  <Products name='Parrilla de Cerdo' dolar='8' img={ParrillaCerdo} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. ' />

  <Products name='Parrilla Guacareña' dolar='13.5' img={ParrillaGuacarena} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. ' />

  <Products name='Parrilla Argentina' dolar='8.5' img={ParrillaArgentina} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. ' />

  <Products name='Parrilla de Lomito' dolar='8' img={ParrillaLomito} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. ' />

  <Products name='Lomito para 2' dolar='15.5' img={Lomito2} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. ' />

  <Products name='Lomito para 3' dolar='23.5' img={Lomito3} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. ' />

  <Products name='Lomito para 4' dolar='30' img={Lomito4} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. ' />

  <Products name='Parrilla de Pollo' dolar='5.8' img={ParrillaPollo} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. ' />

  <Products name='Parrilla Picada' dolar='7' img={ParrillaPicada} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. ' />

  <Products name='Parrilla Picada de Pollo' dolar='6.5' img={ParrillaPicadaPollo} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. ' />

  <Products name='Parrilla Miñota' dolar='11' img={ParrillaMinota} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. ' />

  <Products name='Parrilla Mixta' dolar='7.5' img={ParrillaMixta} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. ' />

  <Products name='Parrilla Mar y Tierra' dolar='12.5' img={ParrillaMarTierra} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. ' />

  <Products name='Bisteck' dolar='1.9' img={Bisteck} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. ' />

  <Products name='Chuleta' dolar='3' img={Chuleta} info='Lorem ipsum dolor, sit amet consectetur adipisicing elit. ' />
 </section>
 </>
 )
}




