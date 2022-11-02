import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.scss";

const Navbar = ({ setExplode }) => {
    return (
        <nav className="nav">
            <div className="nav__links">
                <NavLink to="/" className="nav__links-link">Github Repos</NavLink>
                <button onClick={() => setExplode((e) => !e)} className="nav__links-link">Test ErrorBoundary</button>
            </div>
        </nav>
    )
}

export default Navbar;