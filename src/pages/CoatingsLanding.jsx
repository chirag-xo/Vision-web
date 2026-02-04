import React from 'react';
import { Link } from 'react-router-dom';
import productsData from '../products.json';

const CoatingsLanding = () => {
    const coatingsData = productsData.find(p => p.slug === 'coatings');

    // Group products by subCategory
    const groupedProducts = coatingsData?.subProducts?.reduce((acc, product) => {
        const category = product.subCategory || 'Other';
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(product);
        return acc;
    }, {});

    return (
        <div className="section">
            <div className="container">
                <div style={{ marginBottom: '2rem' }}>
                    <Link to="/products" style={{ color: '#64748b' }}>Products</Link>
                    <span style={{ margin: '0 0.5rem', color: '#cbd5e1' }}>/</span>
                    <span style={{ fontWeight: '600' }}>Coatings</span>
                </div>

                <h1 style={{ marginBottom: '1rem' }}>{coatingsData?.category}</h1>
                <p style={{ fontSize: '1.25rem', color: '#64748b', marginBottom: '3rem', maxWidth: '800px' }}>
                    {coatingsData?.description}
                </p>

                {Object.entries(groupedProducts || {}).map(([category, products]) => (
                    <div key={category} style={{ marginBottom: '4rem' }}>
                        <h2 style={{
                            fontSize: '1.5rem',
                            marginBottom: '1.5rem',
                            color: 'var(--color-primary)',
                            borderBottom: '2px solid #e2e8f0',
                            paddingBottom: '0.5rem'
                        }}>
                            {category}
                        </h2>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                            {products.map((product) => (
                                <Link
                                    key={product.id}
                                    to={`/products/coatings/${product.id}`}
                                    className="glass-card"
                                    style={{
                                        padding: '2rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        transition: 'transform 0.2s',
                                        textDecoration: 'none',
                                        color: 'inherit'
                                    }}
                                >
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-text)' }}>
                                        {product.title}
                                    </h3>
                                    <p style={{ color: '#64748b', flexGrow: 1 }}>
                                        {product.description}
                                    </p>
                                    <div style={{ marginTop: '1.5rem', color: 'var(--color-accent)', fontWeight: '600', fontSize: '0.9rem' }}>
                                        View Details &rarr;
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CoatingsLanding;
