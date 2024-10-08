import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../componentes/asynMock';
import Button from 'react-bootstrap/Button';
export default function ItemDetailContainer() {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    setProduct(getProduct(id));
  }, []);

  return (
    <>
      <article style={{ border: '1px solid white', padding: 40 }}>
        
        <h2>
          {product.title}
        </h2>
        <img src={product.image} alt={product.title} />
        <p>{product.description}</p>
        <p>Año: {product.year}</p>
        <p>Categoria: {product.category}</p>
        <p>$USD {product.price}</p>
        
        <Button>Comprar</Button>
      </article>
    </>
  );
}