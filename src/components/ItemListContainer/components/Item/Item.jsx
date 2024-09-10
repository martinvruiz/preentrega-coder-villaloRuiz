import { Link } from "react-router-dom"

export const Item = ({title,price,img,id,category})=>{
    return <>
        <div className="flex flex-col items-center w-72 mx-2 my-2 h-64 p-3 border border-cyan-700 rounded-md">
            <img className="object-contain w-1/2 h-28" src={img} alt={title}/>
            <h4 className="font-bold">{title}</h4>
            <p>$ {price}</p>
            <Link className="bg-cyan-700 w-1/3 h-1/5 flex justify-center items-center text-white mt-2" to={`item/${id }`}>Ver mas</Link>
        </div>
    </>
}