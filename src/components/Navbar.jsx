import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/vision-logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav style={{
            background: 'var(--color-primary)',
            color: 'white',
            padding: '1rem 0',
            position: 'sticky',
            top: 0,
            zIndex: 1000
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        src={logo}
                        alt="Vision Metal Aids"
                        style={{ height: '50px', width: 'auto' }}
                    />
                </Link>

                <div className="desktop-menu" style={{ display: 'flex', gap: '2rem' }}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/infrastructure">Infrastructure</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
