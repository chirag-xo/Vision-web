import React from 'react';
import { Link } from 'react-router-dom';
import productsData from '../products.json';

const SteelMeltingLanding = () => {
    // Identify the specific products or category
    const category = productsData.find(p => p.slug === 'steel-melting-products');

    // We expect subProducts to contain "Hot Tops" and "Tundish Boards"
    // Sort logic could be applied here if needed
    const products = category?.subProducts || [];

    return (
        <div className="section">
            <div className="container">
                <div style={{ marginBottom: '2rem' }}>
                    <Link to="/products" style={{ color: '#64748b' }}>Products</Link>
                    <span style={{ margin: '0 0.5rem', color: '#cbd5e1' }}>/</span>
                    <span style={{ fontWeight: '600' }}>Steel Melting Products</span>
                </div>

                <div className="glass-card" style={{ padding: '3rem' }}>
                    <h1 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>{category?.category || 'Steel Melting Products'}</h1>
                    <p style={{ color: '#64748b', marginBottom: '3rem', maxWidth: '800px' }}>{category?.description}</p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                        {products.map((product) => (
                            <div key={product.id} className="glass-card" style={{ padding: '2rem', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                                <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>{product.title}</h2>
                                <div style={{ display: 'flex', flexDirection: 'row', gap: '3rem', alignItems: 'start', flexWrap: 'wrap' }}>

                                    {/* Text Section (Left) */}
                                    <div style={{ flex: '1 1 300px' }}>
                                        <p style={{ color: '#475569', lineHeight: '1.7', whiteSpace: 'pre-line' }}>
                                            {product.description}
                                        </p>
                                    </div>

                                    {/* Image Section (Right) */}
                                    <div style={{ flex: '1 1 300px', display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                                        {product.images && product.images.map((img, index) => (
                                            <img
                                                key={index}
                                                src={img}
                                                alt={`${product.title} ${index + 1}`}
                                                style={{
                                                    maxWidth: '100%',
                                                    maxHeight: '300px', // Limit height to keep it proportional
                                                    borderRadius: '0.5rem',
                                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SteelMeltingLanding;
