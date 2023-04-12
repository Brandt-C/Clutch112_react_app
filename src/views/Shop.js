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
    const local_url = 'http://127.0.0.1:5000/api/products'
    console.log(web_url, local_url)
    useEffect(() => { console.log('Shop component has rendered (or re-rendered)') });
    const getProductData = async () => {
        let response = await axios.get(web_url);
        return response.status === 200 ? response.data : null
    }
    const loadProductData = async () => {
        let data = await getProductData();
        console.log(data, typeof data)
    }
    const [products, setProducts] = useState(() => loadProductData());
    // useEffect(loadProductData());  DON"T do this, infinite loop



    return (
        <div>
            <h1> SHOP SHOP SHOP  till you drop.</h1>

        </div>
    );
}


export default Shop;