import {ItemCount} from "../../../Item/components/ItemCount/ItemCount"

export const ItemDetail = ({product})=>{
    return <section className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center w-96 mx-2 my-10 h-80 p-3 border border-cyan-700 rounded-md">
            <img className="object-contain w-1/2 h-28" src={product.img} alt={product.title}/>
            <h4 className="font-bold">{product.title}</h4>
            <p>{product.price}</p>
            <ItemCount stock={product.stock}/>
        </div>
    </section>
}