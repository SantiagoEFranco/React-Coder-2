import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
export default function CardComponent({product}){


    return (
        <>
        <Card bg='ligth' style={{margin:'15px' , border:'solid 2px grey' }}>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Img style={{width:200}} variant="top" src={product.image} />
        <Card.Text> $USD {product.price}</Card.Text>
        <Button variant="primary" ><Link style={{color:'white'}} to={`/item/${product.id}`}>Detalles</Link></Button>
      </Card.Body>
       </Card>
        </>
    )
}