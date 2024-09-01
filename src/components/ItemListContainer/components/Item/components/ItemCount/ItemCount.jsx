import { useState } from "react"

export const ItemCount = ({stock})=>{
    const [ItemNumber, setItemNumber] = useState(1)

    function Add(){
        if(ItemNumber>=stock){
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

    return <>
        <div className="flex border-2 rounded-md w-3/4 items-center justify-center border-cyan-700">
            <button className="mx-6 border-2 rounded-md border-cyan-700 w-8 text-center my-1" onClick={Subst}>-</button>
            <p className="w-6 text-center">{ItemNumber}</p>
            <button className="mx-6 border-2 rounded-md border-cyan-700 w-8 text-center my-1" onClick={Add}>+</button>
        </div>
        <button className="w-3/4 rounded-md text-white text-sm bg-cyan-700 mt-2 p-1">Agregar al carrito</button>
    </>
}

