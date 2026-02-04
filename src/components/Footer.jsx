import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            background: 'var(--color-dark)',
            color: 'white',
            padding: '3rem 0',
            marginTop: 'auto'
        }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                    <div>
                        <h3>Vision Metal Aids</h3>
                        <p>Quality Foundry Consumables since 2008.</p>
                    </div>
                    <div>
                        <h4>Quick Links</h4>
                        <ul style={{ marginTop: '1rem' }}>
                            <li>Products</li>
                            <li>Infrastructure</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Contact Us</h4>
                        <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>Unit I:</strong> D-30, Ind. Area Bahadrabad, Haridwar-249402</p>
                        <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>Ph:</strong> +91 98370 27988, +91 92196 94802</p>
                        <p style={{ fontSize: '0.9rem' }}>
                            <a href="mailto:sales@visionmetalaids.net" style={{ color: 'white', textDecoration: 'none' }}>sales@visionmetalaids.net</a>
                        </p>
                    </div>
                </div>
                <div style={{ textAlign: 'center', marginTop: '3rem', borderTop: '1px solid #333', paddingTop: '1rem' }}>
                    <p>&copy; 2026 Vision Metal Aids Pvt. Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
