
export const ItemCount = ({Subst, Add, ItemNumber, AddToCart})=>{


    return <>
        <div className="flex border-2 rounded-md w-3/4 items-center justify-center border-cyan-700">
            <button className="mx-6 border-2 rounded-md border-cyan-700 w-8 text-center my-1" onClick={Subst}>-</button>
            <p className="w-6 text-center">{ItemNumber}</p>
            <button className="mx-6 border-2 rounded-md border-cyan-700 w-8 text-center my-1" onClick={Add}>+</button>
        </div>
        <button className="w-3/4 rounded-md text-white text-sm bg-cyan-700 mt-2 p-1" onClick={AddToCart}>Agregar al carrito</button>
    </>
}

