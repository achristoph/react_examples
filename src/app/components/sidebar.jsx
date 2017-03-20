import React from 'react';
import {
    Link
} from 'react-router-dom'
const SideBar = () => (
    <aside>
        <ul>
            <li>Filter by:</li>
            <li><Link to="/alpha">Alphabetically</Link></li>
            <li><Link to="/pasc">Price: Low to High</Link></li>
            <li><Link to="/pdesc">Price: High to Low</Link></li>
        </ul>
    </aside>
)
export default SideBar;
