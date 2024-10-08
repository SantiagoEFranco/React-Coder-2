import { useEffect, useState } from "react"
import CardComponent from "./CardComponent"
import { getProducts } from "./asynMock"

export default function ProductList({products}){



   
    return(
        <>
       <section>
        {products.map((product) => (
            <CardComponent key={product.id} product={product}/>
        ))}
       </section>
       
        </>
    )
}