import React from 'react';

const NavBar = ({name}) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">{name}</span>
        </nav>
    )
}

export default NavBar;