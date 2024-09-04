import React, { useEffect, useState } from 'react';
import { productId } from '../productList/productList';
import { ItemDetail } from './components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer({ title }) {
    const [item, setItem] = useState(null);
    const { id: itemId } = useParams();

    useEffect(() => {
        const id = Number(itemId);

        productId(id)
            .then((resp) => {
                setItem(resp);
            })
            .catch((error) => {
                console.error('Error al cargar el producto:', error);
            });
    }, [itemId]);

    return <div>{item && <ItemDetail title={title} product={item} />}</div>;
}
