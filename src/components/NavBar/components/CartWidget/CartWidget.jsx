import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../../../CartContext/CartContext"


export const CartWidget = ()=>{

    const {CartNumber} = useContext(CartContext)

    return <>
        <Link to="/cart">
        <img className="h-7" src="https://cdn.icon-icons.com/icons2/1144/PNG/512/shoppingcart_80945.png" alt="Carrito de compras"/>
        </Link>
        <p className="text-white text-sm">{CartNumber()}</p>
    </>
}