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
                alignItems: 'center',
                position: 'relative'
            }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', zIndex: 1002 }} onClick={() => setIsOpen(false)}>
                    <img
                        src={logo}
                        alt="Vision Metal Aids"
                        style={{ height: '40px', width: 'auto' }}
                        className="nav-logo"
                    />
                    {/* Add style for desktop larger logo */}
                    <style>{`
                        .nav-logo { height: 40px; }
                        @media(min-width: 1024px) { .nav-logo { height: 50px; } }
                    `}</style>
                </Link>

                {/* Hamburger Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        display: 'none', // Hidden by default (desktop)
                        background: 'transparent',
                        border: 'none',
                        color: 'white',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        zIndex: 1002
                    }}
                    className="hamburger-btn"
                >
                    {isOpen ? '✕' : '☰'}
                </button>

                {/* Mobile/Tablet Menu Overlay */}
                <div
                    className={`nav-links ${isOpen ? 'open' : ''}`}
                    style={{
                        display: 'flex',
                        gap: '2rem'
                    }}
                >
                    <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
                    <Link to="/products" onClick={() => setIsOpen(false)}>Products</Link>
                    <Link to="/infrastructure" onClick={() => setIsOpen(false)}>Infrastructure</Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                </div>

                <style>{`
                    /* Desktop Styles */
                    @media (min-width: 1024px) {
                        .hamburger-btn { display: none !important; }
                        .nav-links { 
                            position: static;
                            flex-direction: row;
                            background: transparent;
                            padding: 0;
                            height: auto;
                            width: auto;
                        }
                    }

                    /* Mobile/Tablet Styles */
                    @media (max-width: 1023px) {
                        .hamburger-btn { display: block !important; }
                        .nav-links {
                            position: fixed;
                            top: 0;
                            right: -100%;
                            width: 70%;
                            height: 100vh;
                            background: var(--color-primary);
                            flex-direction: column;
                            padding: 6rem 2rem;
                            transition: right 0.3s ease-in-out;
                            z-index: 1001;
                            box-shadow: -5px 0 15px rgba(0,0,0,0.5);
                        }
                        .nav-links.open {
                            right: 0;
                        }
                        .nav-links a {
                            font-size: 1.25rem;
                            border-bottom: 1px solid rgba(255,255,255,0.1);
                            padding-bottom: 1rem;
                        }
                    }
                `}</style>
            </div>
            {/* Overlay background when menu is open */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0,0,0,0.5)',
                        zIndex: 1000,
                        backdropFilter: 'blur(2px)'
                    }}
                />
            )}
        </nav>
    );
};

export default Navbar;
