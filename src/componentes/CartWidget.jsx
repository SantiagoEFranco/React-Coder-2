import './CartWidget.css'
import { MdOutlineShoppingCart } from "react-icons/md";


export default function CartWidget(){


    return(
        <>
        <MdOutlineShoppingCart  className='carrito'/>
        <p className="contadorCarrito">0</p>
        </>
    )
}