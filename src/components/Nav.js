import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import '../css/nav.css';
import { DataContext } from "../context/DataProvider";

const Nav = props => {

    useEffect(() => {console.log('The Nav component has rendered (or re-rendered)')});   
    const {cart} = useContext(DataContext); 
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-secondary">
                <div className="container-fluid">
                    <Link className="nav-item nav-link active" to='/'>Home</Link>
                    <Link className="nav-item nav-link active" to='/shop'>Shop</Link>
                    <Link className="nav-item nav-link active" to='/cart'>Cart</Link>
                { cart.size === 0 ?
                <span id="r-span"><Link className="nav-item nav-link active" to='/shop'><i class="fa-solid fa-cart-shopping"></i></Link></span> :
                <span id="r-span"><Link className="nav-item nav-link active" to='/cart'>{cart.size} - ${cart.total.toFixed(2)} <i class="fa-solid fa-cart-shopping"></i></Link></span>
                }
            </div>
            </nav>
        </div>
    );
}


export default Nav;