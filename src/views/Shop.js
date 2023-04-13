import { useEffect, useState } from "react";
import axios from "axios";

const Shop = () => {
    /* What now?
    1. Make an API call to our flask app
    2. set up state variable for products
    3. set that state variable based on the API call
    4.  Set up a way to display those products (otherwise we'll show loading)
    */
    const web_url = 'https://clutch-flask.onrender.com/api/products';
    const local_url = 'http://127.0.0.1:5000/api/products';
    console.log(web_url, local_url);
    useEffect(() => { console.log('Shop component has rendered (or re-rendered)') });

    const getProductData = async () => {
        let response = await axios.get(web_url);
        return response.status === 200 ? response.data : null
    }

    const loadProductData = async () => {
        let data = await getProductData();
        console.log(data, typeof data);
        setProducts(data.data)

    }

    const [products, setProducts] = useState(() => loadProductData());
    // useEffect(loadProductData());  DON"T do this, infinite loop



    return (
        <div className="container">
            <div className="row">
                <h1> SHOP SHOP SHOP  till you drop.</h1>
            </div>
            <div className="row">
                {/* this is where we'll throw in a bootstrap for each product */  console.log(products, typeof products)}
                {typeof products === 'object' && !products.then ? products.map((product, index) => {
                    return <div className="card" key={index} style={{width: 18 + 'rem'}}>
                        <img src={product.img_url} className="card-img-top" alt={product.name} />
                        <div className="card-body">
                            <h3>{product.name}</h3>
                            <h5 className="card-title">{product.make} {product.model}</h5>
                            <p className="card-text">{product.desc}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{product.year}</li>
                            <li className="list-group-item">{product.miles}</li>
                            <li className="list-group-item">{product.price}</li>
                        </ul>
                        <div className="card-body">
                            <button href="#" className="card-link">Card link</button>
                            <button href="#" className="card-link">Another link</button>
                        </div>
                    </div>
                }) :
                <h3> We're out finding all the products. . .</h3>
            }

                
            </div>
        </div>

    );
}


export default Shop;