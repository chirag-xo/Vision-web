import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ title, subheading, description, link }) => {
    return (
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{title}</h3>
            {subheading && (
                <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '1rem' }}>
                    {subheading}
                </p>
            )}
            <p style={{ color: '#475569', flexGrow: 1, marginBottom: '1.5rem' }}>{description}</p>
            <Link to={link || '#'} className="btn btn-primary" style={{ textAlign: 'center' }}>
                View Products
            </Link>
        </div>
    );
};

export default ProductCard;
