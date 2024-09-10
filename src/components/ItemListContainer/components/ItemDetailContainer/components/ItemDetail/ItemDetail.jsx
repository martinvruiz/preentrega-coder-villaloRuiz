import { CartContext } from "../../../../../../CartContext/CartContext"
import {ItemCount} from "../../../Item/components/ItemCount/ItemCount"
import { useContext, useState } from "react"

export const ItemDetail = ({product})=>{

    const {AddToCart} = useContext(CartContext)


    const [ItemNumber, setItemNumber] = useState(1)

    function Add(){
        if(ItemNumber>=product.stock){
            alert("No hay mas stock")
        }else{
        return setItemNumber(ItemNumber + 1)
        }
    }

    function Subst(){
        if(ItemNumber <= 1){
            alert("Minimo un item")
        }else{
        return setItemNumber(ItemNumber - 1)
        }
    }




    return <section className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center w-96 mx-2 my-10 h-80 p-3 border border-cyan-700 rounded-md">
            <img className="object-contain w-1/2 h-28" src={product.img} alt={product.title}/>
            <h4 className="font-bold">{product.title}</h4>
            <p>$ {product.price}</p>
            <ItemCount stock={product.stock} Add={Add} Subst={Subst} ItemNumber={ItemNumber} AddToCart={()=>{AddToCart(product,ItemNumber)}}/>
        </div>
    </section>
}