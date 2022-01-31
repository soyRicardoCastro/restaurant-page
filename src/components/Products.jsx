import {useState} from 'react'

export default function Products({name,img,bs,dolar,info}) {
const [rotate, setRotate] = useState(true);

const infoClass = rotate ? "info" : "info active";

const valorDolar = 4.80
 return (
  <div className="containerProductos">
   <div className="productosCard">
   <div
   onClick={() => setRotate(!rotate)}
   className={infoClass}>
     <div className="delantera">
      <h4 className="productosTitulo">{name}</h4>
      <img src={img} alt={name} loading="lazy" className="imgProductos" />
      <p className="precioProductos">Bs {Math.round(bs = valorDolar * dolar)} / $ {dolar}</p>
     </div>
     <div className="trasera">
      <p className="infoProductos">{info}</p>
     </div>
   </div>
   </div>
  </div>
 )
}
//
//
