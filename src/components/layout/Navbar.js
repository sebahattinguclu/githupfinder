import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Navbar = ({title, icon}) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <h3 style={{color: "white"}}>
                <i className={icon}></i> {title}
            </h3>
            <ul className="navbar-nav ">
                <li className="nav-item ">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
            </ul>
        </nav>
    );
};

Navbar.defaultProps = {
    title: 'Githup Finder',
    icon: 'fab fa-github'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar;