import {NavLink} from 'react-router-dom'

export default function Product({name,src,img}) {
 return(
 <>
  <div className="containerProductos">
  <NavLink to={src}>
   <div className="productosCard">
     <h4 className="productosTitulo">{name}</h4>
     <img src={img} loading="lazy" alt={name} className="imgProductos" />
   </div>
   </NavLink>
  </div>
 </>
 )
}