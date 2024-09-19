import { useContext, useState } from "react"
import { CartContext } from "../CartContext/CartContext"
import { Form } from "./components/Form/Form"
import { collection, getFirestore, addDoc,} from "firebase/firestore"

export const Cart = ()=>{
    const {cart, TotalPrice, DeleteCart, DeleteItem} = useContext(CartContext)

    const handleDelete = ()=>{
        DeleteCart()
    }

    const handleDeleteItem = (id)=>{
        DeleteItem(id)
    }

    const [buyer, setBuyer] = useState(
        {
            nombre : "",
            email : "",
            telefono : "",
        }
    )

    const [error, setError] = useState({
        nombre : "",
        email : "",
        telefono : "",
    })


    const handleChange = (e)=>{
        setBuyer({
            ...buyer,
            [e.target.name] : e.target.value
        })
    }

    const setOrder = ()=>{
        const db = getFirestore()
        const orderCollection = collection(db, "orders")
        const purchase = {
            buyer,
            items : cart,
            total : TotalPrice(),
            date : new Date()
        }
        addDoc(orderCollection, purchase)
        .then(res => console.log(res.id))
        .catch(err => console.log(err))
    }



    const submitOrder = (e)=>{
        e.preventDefault()
        const userError = {}
        if(!buyer.email){
            userError.email = "El email es obligatorio" 
        }if(!buyer.nombre){
            userError.name = "El nombre es obligatorio"
        }if(!buyer.telefono){
            userError.telefono = "El telefono es obligatorio"
        }if(Object.keys(userError).length === 0){
            setOrder()
            alert("Compra exitosa! te contactaremos por mail para poder completar la orden")
            handleDelete()
        }else{
            setError(userError)
        }


    }



    return <div className="flex flex-col items-center mb-4">
        <h2 className="mt-4 text-4xl font-bold">Carrito de compras</h2>

        {
            cart.map((prod)=>{
                return <div className="mt-3 flex w-3/4 h-auto items-center justify-between" key={prod.id}>
                    <img className="w-20 border border-black" src={prod.img} alt="" />
                    <h3 className="font-semibold">{prod.title} Cantidad: {prod.ItemNumber}</h3>
                    <p>$ {prod.price}</p>
                    <p>Total: $ {prod.price * prod.ItemNumber}</p>
                    <button className="bg-cyan-700 w-1/5 h-9 mt-2 border rounded-xl border-cyan-700 text-white" onClick={()=> handleDeleteItem(prod.id )} >Eliminar</button>
                </div>

            })
        }
        { cart.length > 0 && <>
        <Form submitOrder={submitOrder} handlechange={handleChange} formData={buyer} error={error}/>
        <p className="mt-4 font-semibold">Total del carrito: ${TotalPrice()}</p>
        <button className="bg-cyan-950 w-1/5 h-9 mt-2 border rounded-xl border-cyan-700 text-white" onClick={handleDelete}>Vaciar carrito</button>
        </>
        }   
    </div>
}