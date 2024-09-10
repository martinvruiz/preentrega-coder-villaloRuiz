import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"

export const Cart = ()=>{
    const {cart, TotalPrice, DeleteCart} = useContext(CartContext)

    const handleDelete = ()=>{
        DeleteCart()
    }

    return <div className="flex flex-col items-center">
        <h2 className="mt-4 text-4xl font-bold">Carrito de compras</h2>

        {
            cart.map((prod)=>{
                return <div className="mt-3 flex w-1/3 h-auto items-center justify-between" key={prod.id}>
                    <img className="w-20 border border-black" src={prod.img} alt={prod.img} />
                    <h3 className="font-semibold">{prod.title}</h3>
                    <p>$ {prod.price}</p>
                    <p>Total: $ {prod.price * prod.ItemNumber}</p>
                    
                </div>

            })
        }
        { cart.length > 0 && <>
        <p className="mt-4 font-semibold">Total del carrito: ${TotalPrice()}</p>
        <button className="bg-cyan-700 w-1/5 h-9 mt-2 border rounded-xl border-cyan-700 text-white" >Elegir medio de pago</button>
        <button className="bg-cyan-950 w-1/5 h-9 mt-2 border rounded-xl border-cyan-700 text-white" onClick={handleDelete}>Vaciar carrito</button>
        </>
        }   
    </div>
}