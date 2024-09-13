import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children})=>{
    const SavedCart = JSON.parse(localStorage.getItem("cart")) || []

    const [cart, setCart] = useState(SavedCart);

    const AddToCart = (product, ItemNumber)=>{
        const ProdAdd = {...product, ItemNumber}
        const NewCart = [...cart]
        const DuplicateProd = cart.find((product)=> product.id === ProdAdd.id)

        if(DuplicateProd){
            const updateNumber = DuplicateProd.ItemNumber + ItemNumber
            if(updateNumber > product.stock){
                alert("No hay mas stock disponible :(")
                return
            }
            DuplicateProd.ItemNumber = updateNumber
            setCart(NewCart)
        }else{
            if(ItemNumber > product.stock){
                alert("No hay mas stock disponible :(")
                return
            }
            NewCart.push(ProdAdd)
            setCart(NewCart)
        }
        
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])
    

    const CartNumber = ()=>{
        return cart.reduce((cant, prod)=> cant + prod.ItemNumber, 0)
    }

    const TotalPrice = ()=>{
        return cart.reduce((cant, prod)=> cant + prod.price * prod.ItemNumber, 0)
    }

    const DeleteCart = ()=>{
        setCart([])
    }

    const DeleteItem = (id) => {
        const NewCart = cart.filter((product) => product.id !== id);
        setCart(NewCart);
    }
    return <CartContext.Provider value={{cart, AddToCart, CartNumber, TotalPrice, DeleteCart, DeleteItem}}>
        {children}
    </CartContext.Provider>
}