import { Link } from "react-router-dom";
import { useEffect } from "react";

const Nav = props => {

    useEffect(() => {console.log('The Nav component has rendered (or re-rendered)')});    
    return (
        <div>
            <nav className="navbar navbar-expand navbar-light bg-secondary">
                <div className="nav navbar-nav">
                    <Link className="nav-item nav-link active" to='/'>Home</Link>
                    <Link className="nav-item nav-link active" to='/shop'>Shop</Link>
                </div>
                <span>{props.teachers[Math.floor(Math.random()*props.teachers.length)]}</span>
            </nav>
        </div>
    );
}


export default Nav;