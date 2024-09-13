
import { Item } from "../Item/Item"



export const ItemList= ({products, title})=>{
    return <section className="flex flex-col justify-center items-center">
        <h3 className="text-2xl font-extrabold my-2">{title}</h3>
        <div className="flex flex-wrap justify-center my-6">
        {products.map((product)=>{
                return <Item
                    key={product.title}
                    category={product.category}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    img={product.img}
                    stockNumber={10}/>
                }
                )
                }
        </div>
    </section>}
