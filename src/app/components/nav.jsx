import React from 'react';
import {
    Link
} from 'react-router-dom'
const Nav = () => (
    <nav>
        <ul>
            <li><Link to="/">ALL PRODUCTS</Link></li>
            <li><Link to="/1">PRODUCTS 1</Link></li>
            <li><Link to="/2">PRODUCTS 2</Link></li>
        </ul>
    </nav>
)
export default Nav;
