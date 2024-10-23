import React from 'react';
import '../assets/styles/NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul className="nav-links">
                <li><Link to="/todo">To Do</Link></li>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/timer">Timer</Link></li>
                <li><Link to="/calculator">Calculator</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
