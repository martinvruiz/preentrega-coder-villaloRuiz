import { useEffect, useState } from "react"
import { productList } from "./components/productList/productList"
import { ItemList } from "./components/ItemList/ItemList"
import { useParams } from "react-router-dom"


export const ItemListContainer = ({titulo})=>{
    let [products, setProducts] = useState([])
    const [title, setTitle] = useState("Bienvenidos")
    const pdCategory = useParams().category

    useEffect(()=>{
    productList()
        .then((res)=>{
            if(pdCategory){
                setProducts(res.filter((prod)=> prod.category === pdCategory))
                setTitle(pdCategory)
            }else{
            setProducts(res)
            setTitle("Bienvenido/as")
        }
        })
        .catch((error) => {
            console.error("Error al cargar los productos:", error);
        })
    },[pdCategory])


    return <>
        <ItemList title={title} products={products}/>
    </>

}