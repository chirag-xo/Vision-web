import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/vision-logo.png';

const Footer = () => {
    return (
        <footer style={{
            background: 'var(--color-dark)',
            color: 'white',
            padding: '3rem 0',
            marginTop: 'auto'
        }}>
            <div className="container">
                <div className="footer-grid">
                    <div style={{ textAlign: 'center', md: { textAlign: 'left' } }}>
                        <img
                            src={logo}
                            alt="Vision Metal Aids"
                            style={{ height: '60px', width: 'auto', marginBottom: '1rem', background: 'white', padding: '5px', borderRadius: '4px', display: 'inline-block' }}
                        />
                        <p>Quality Foundry Consumables since 2008.</p>
                    </div>
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul style={{ marginTop: '1rem', listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '0.5rem' }}><Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>Products</Link></li>
                            <li style={{ marginBottom: '0.5rem' }}><Link to="/infrastructure" style={{ color: 'white', textDecoration: 'none' }}>Infrastructure</Link></li>
                            <li style={{ marginBottom: '0.5rem' }}><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Contact Us</h4>
                        <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>Unit I:</strong> D-30, Ind. Area Bahadrabad, Haridwar-249402</p>
                        <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>Ph:</strong> +91 98370 27988, +91 92196 94802</p>
                        <p style={{ fontSize: '0.9rem' }}>
                            <a href="mailto:sales@visionmetalaids.net" style={{ color: 'white', textDecoration: 'none' }}>sales@visionmetalaids.net</a>
                        </p>
                    </div>
                </div>

                <style>{`
                    .footer-grid {
                        display: grid;
                        gap: 2rem;
                        grid-template-columns: 1fr;
                        text-align: center;
                    }
                    .footer-col {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }

                    @media (min-width: 768px) {
                        .footer-grid {
                            grid-template-columns: repeat(3, 1fr);
                            text-align: left;
                        }
                        .footer-col {
                            align-items: flex-start;
                        }
                        /* Restore logo alignment on desktop */
                        .footer-grid > div:first-child {
                            text-align: left;
                        }
                        .footer-grid > div:first-child img {
                            display: block;
                        }
                    }
                `}</style>
                <div style={{ textAlign: 'center', marginTop: '3rem', borderTop: '1px solid #333', paddingTop: '1rem' }}>
                    <p>&copy; 2026 Vision Metal Aids Pvt. Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
