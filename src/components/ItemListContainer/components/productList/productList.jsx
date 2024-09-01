import data from "../../data/data.json"

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
}