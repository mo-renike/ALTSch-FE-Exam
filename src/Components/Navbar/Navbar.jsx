import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.scss";

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav__logo">Finder</div>
            <div className="nav__links">
                <NavLink to="/" className="nav__links-link">Home</NavLink>
                <NavLink to="/users" className="nav__links-link">Users</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;