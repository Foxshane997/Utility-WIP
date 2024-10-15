import React from 'react';
import '../assets/styles/NavBar.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                {/* <li><Link to="/">Home</Link></li> */}
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/todo">To Do</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
