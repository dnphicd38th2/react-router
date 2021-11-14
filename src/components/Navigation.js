import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function Navigation(props) {

    const navLinkStyle = {
        color: 'white'
    }

    return (
        <div>
            <h3>Logo</h3>
            <ul className="navOne">
                <li>
                    <NavLink to="/" style={navLinkStyle} className='active' exact="true">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/products" style={navLinkStyle}>Products</NavLink>
                </li>
                <li>
                    <NavLink to="/about" style={navLinkStyle}>About</NavLink>
                </li>
            </ul>
        </div>
    )
}



export default Navigation

