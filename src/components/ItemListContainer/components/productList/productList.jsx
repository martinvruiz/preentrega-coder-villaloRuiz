import { useEffect } from 'react';
import { db } from '../../../../firebase/firebase'; // Ajusta la ruta según donde tengas el archivo firebaseConfig.js
import { collection, getDocs } from 'firebase/firestore';

const getData = async () => {
    console.log(db)
    const querySnapshot = await getDocs(collection(db, "productList"));
    querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
};

    export const ProductList = ()=>{
        return(
        useEffect(()=>{
            getData()
        },[])
    )
    }










/*import data from "../../data/data.json"

export const productList = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(data)
        },1000)
    })
}


export const productId = (id)=>{

    return new Promise((resolve,reject)=>{
        
        const item = data.find((pd)=>pd.id === id)

        if(item){
            resolve(item)
        }else{
            reject(
            {error : "no se encontro el item"}
        )
        }
    })
}*/