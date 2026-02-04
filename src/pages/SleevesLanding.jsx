import React from 'react';
import { Link } from 'react-router-dom';
import productsData from '../products.json';

const SleevesLanding = () => {
    const sleevesData = productsData.find(p => p.slug === 'sleeves');

    return (
        <div className="section">
            <div className="container">
                <div style={{ marginBottom: '2rem' }}>
                    <Link to="/products" style={{ color: '#64748b' }}>Products</Link>
                    <span style={{ margin: '0 0.5rem', color: '#cbd5e1' }}>/</span>
                    <span style={{ fontWeight: '600' }}>Sleeves</span>
                </div>

                <h1 style={{ marginBottom: '1rem' }}>{sleevesData?.category}</h1>
                <p style={{ fontSize: '1.25rem', color: '#64748b', marginBottom: '3rem', maxWidth: '800px' }}>
                    {sleevesData?.description}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {sleevesData?.subProducts?.map((sub) => (
                        <Link
                            key={sub.id}
                            to={`/products/sleeves/${sub.id}`}
                            className="glass-card"
                            style={{ padding: '2rem', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s', textDecoration: 'none', color: 'inherit' }}
                        >
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>{sub.title}</h3>
                            <p style={{ color: '#64748b', flexGrow: 1 }}>{sub.description.substring(0, 100)}...</p>
                            <div style={{ marginTop: '1.5rem', color: 'var(--color-accent)', fontWeight: '600' }}>
                                View Specifications &rarr;
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SleevesLanding;
