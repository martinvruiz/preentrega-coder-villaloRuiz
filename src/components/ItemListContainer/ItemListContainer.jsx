import { useEffect, useState } from "react"
import { ItemList } from "./components/ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/firebase"
import { Capitals } from "../../Capitals/Capitals"


export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [pageTitle, setPageTitle] = useState();
    const { category: pdCategory } = useParams();
  
    useEffect(() => {
      const getProducts = async () => {
        let prodQuery = collection(db, "productList");
  
        if (pdCategory) {
          prodQuery = query(prodQuery, where("category", "==", pdCategory));
        }
  
        try {
          const querySnapshot = await getDocs(prodQuery);
          setProducts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
          setPageTitle(Capitals(pdCategory));
        } catch (error) {
          console.error("Error getting products:", error);
        }
      };
  
      getProducts();
    }, [pdCategory]);


    return <>
        <ItemList title={pageTitle} products={products}/>
    </>

}