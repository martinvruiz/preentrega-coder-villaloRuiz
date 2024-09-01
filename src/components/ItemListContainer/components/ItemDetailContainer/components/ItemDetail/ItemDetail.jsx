import {ItemCount} from "../../../Item/components/ItemCount/ItemCount"

export const ItemDetail = ({product})=>{
    return <section className="flex justify-center items-center">
            <div className="flex flex-col items-center w-72 mx-2 my-2 h-64 p-3 border border-cyan-700 rounded-md">
            <img className="object-contain w-1/2 h-28" src={product.img} alt={product.title}/>
            <h4 className="font-bold">{product.title}</h4>
            <p>{product.price}</p>
            <ItemCount stock={product.stock}/>
        </div>
    </section>
}