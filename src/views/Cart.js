import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from "react-bootstrap";
import '../css/customCart.css';

const Cart = () => {
    /*
    1. access to  our cart and setCart --- context
    2. clear the entire cart
    3. remove all of a certain item
    4. increment  ( + )
    5. decrement    ( - )
    */
    const { cart, setCart } = useContext(DataContext);

    const clearCart = () => {
        setCart({size:0, total:0, products: {}});
        console.log(cart)
    }

    const increaseQuantity = id => {
        // create a copy
        let copyCart = {...cart};
        // modify the copy
        copyCart.size++;
        copyCart.total += copyCart.products[id].data.price;
        copyCart.products[id].quantity++;
        //set the state
        setCart(copyCart);
    }

    const decreaseQuantity = id => {
        let copyCart = {...cart};
        copyCart.size--;
        copyCart.total -= copyCart.products[id].data.price;
        copyCart.products[id].quantity > 1 ?
        copyCart.products[id].quantity-- :
        delete copyCart.products[id];
        setCart(copyCart)
    }
    const removeItem = id => {
        let copyCart = {...cart};
        copyCart.size -= copyCart.products[id].quantity;
        copyCart.total -= copyCart.products[id].quantity*copyCart.products[id].data.price;
        delete copyCart.products[id];
        setCart(copyCart)
    }

    return (

        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Your Cart:</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
            {Object.values(cart.products).map((product, index) => {
                console.log(product);
                return <ListGroup.Item key={index}>
                    <Card.Img variant="top" src={product.data.img_url} id="p-img"/>
                    <h3>{product.data.name}</h3>
                    <h5>{product.data.make} {product.data.model}</h5>
                    <h6>Price: {product.data.price}</h6>
                    <Button variant="secondary" id="dec-btn" onClick={() => {decreaseQuantity(product.data.id)}}><b> - 1 </b></Button>
                    <span id="q-span">{product.quantity}</span>
                    <Button variant="success" id="inc-btn" onClick={() => {increaseQuantity(product.data.id)}}><b> + 1 </b></Button>
                    <br></br>
                    <Button variant="warning" id="r-item" onClick={() => {removeItem(product.data.id)}}>remove this item</Button>
                </ListGroup.Item>
            })}
            
            </ListGroup>
            <Card.Body>
                <Button variant="primary">Checkout</Button>
                <Button variant="danger" onClick={clearCart}>Clear Cart</Button>
            </Card.Body>
        </Card>
    )
}
export default Cart;