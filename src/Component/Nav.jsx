import React from 'react'
import "./Nav.css";
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div className='nav'>
            <div id='title'>
                <h2>React Router Dom</h2>
            </div>
            <div id='menu'>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                {/* <Link to="/productdetails">Product Details</Link> */}
                <Link to="/product">Product</Link>
                <Link to="/moreabout">More About</Link>
            </div>
        </div>
    )
}

export default Nav