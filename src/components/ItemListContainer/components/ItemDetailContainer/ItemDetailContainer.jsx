import React, { useEffect, useState } from 'react'
import { productId } from '../productList/productList'
import { ItemDetail } from './components/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'


export default function ItemDetailContainer({title}) {

    const [item, setItem] = useState(null)
    const itemId = useParams().id

    useEffect(()=>{
        productId(Number(itemId))
            .then((resp)=>{
                setItem(resp)
            })
    })

    return <div>
        {item && <ItemDetail title={title} product={item}/>}
    </div>
}
