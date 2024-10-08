import { useEffect, useState } from "react"
import Card from 'react-bootstrap/Card';
import ProductList from './ProductList';
import { getCategory, getProducts } from "./asynMock"
import { useParams } from "react-router-dom";
 export default function ItemListContainer() {

  const [products , setProducts] = useState([])

  const {categoryId} = useParams();
    
  useEffect(() => {
   if(categoryId){
   console.log(categoryId)
   setProducts(getCategory(categoryId))
  console.log(products)
  }else{
   getProducts
   .then(
    (data) => {
      setProducts(data)
    }
  )
}
  },[categoryId])


  return (
    <Card bg='ligth' className="ItemListContainer" style={{border:'none'}} >
      <Card.Body>
     {<ProductList products={products}/>}
       
      </Card.Body>
    </Card>
  );
}
