import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

/** React function component */
export default function Navbar() {

    return (
        <div style={navbar}>
            <Link to="/" style={navbarItem}>Kalle Korv</Link>
        </div>
    );
}

const navbar: CSSProperties = {
    height: '4em',
    minHeight: '4em',
    background: 'black',
    display: 'flex',
    alignItems: 'stretch',
    padding: '0 1em'
};

const navbarItem: CSSProperties = {
    fontSize: '1.7em',
    margin: 0,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    textDecoration: 'none',
    color: '#E1E1E1',
};