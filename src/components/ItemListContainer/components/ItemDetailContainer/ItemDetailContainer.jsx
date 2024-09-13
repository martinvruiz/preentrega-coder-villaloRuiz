import React, { useEffect, useState } from 'react';
import { ItemDetail } from './components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../../firebase/firebase';

export default function ItemDetailContainer({ title }) {
    const [item, setItem] = useState(null);
    const { id: itemId } = useParams();

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const itemDoc = doc(db, "productList", itemId);
                const product = await getDoc(itemDoc);
                if (product.exists()) {
                    const itemData = { id: product.id, ...product.data() };
                    setItem(itemData);
                } else {
                    console.log("No se encontró el producto con el ID:", itemId);
                }
            } catch (error) {
                console.error("Error al obtener el producto:", error);
            }
        };
    
        if (itemId) {
            fetchItem();
        }
    }, [itemId]);

    return <div>{item && <ItemDetail title={title} product={item} />}</div>;
}
