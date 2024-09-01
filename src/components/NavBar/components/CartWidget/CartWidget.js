

export const CartWidget = ({ItemNum})=>{
    return <>
        <img className="h-7" src="https://cdn.icon-icons.com/icons2/1144/PNG/512/shoppingcart_80945.png" alt="Carrito de compras"/>
        <p className="text-white">{ItemNum}</p>
    </>
}