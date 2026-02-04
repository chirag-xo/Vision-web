import React from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../products.json';

const AntiPipingDetail = () => {
    // We can identify this product by its slug or id.
    const category = productsData.find(p => p.slug === 'anti-piping-and-exothermic-compounds');
    const product = category?.subProducts?.[0];

    if (!product) {
        return (
            <div className="section">
                <div className="container">
                    <h2>Product not found</h2>
                    <Link to="/products">Back to Products</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="section">
            <div className="container">
                <div style={{ marginBottom: '2rem' }}>
                    <Link to="/products" style={{ color: '#64748b' }}>Products</Link>
                    <span style={{ margin: '0 0.5rem', color: '#cbd5e1' }}>/</span>
                    <Link to="/products/anti-piping-and-exothermic-compounds" style={{ color: '#64748b' }}>Anti-Piping & Exothermic Compounds</Link>
                    <span style={{ margin: '0 0.5rem', color: '#cbd5e1' }}>/</span>
                    <span style={{ fontWeight: '600' }}>{product.title}</span>
                </div>

                <div className="glass-card" style={{ padding: '3rem' }}>
                    <h1 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>{product.title}</h1>
                    <div style={{
                        display: 'inline-block',
                        padding: '0.25rem 0.75rem',
                        backgroundColor: '#e2e8f0',
                        borderRadius: '9999px',
                        fontSize: '0.875rem',
                        color: '#475569',
                        marginBottom: '2rem'
                    }}>
                        {product.subCategory}
                    </div>

                    <div className="product-detail-grid">
                        <div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Description</h3>
                            <p style={{ color: '#475569', lineHeight: '1.7', marginBottom: '2rem', whiteSpace: 'pre-line' }}>
                                {product.description}
                            </p>

                            {product.helpingMaterials && (
                                <div style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#f8fafc', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>{product.helpingMaterials.title}</h3>
                                    <p style={{ color: '#64748b', marginBottom: '1rem' }}>{product.helpingMaterials.description}</p>
                                    <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem', color: '#334155' }}>List of products is as under:</h4>
                                    <ul style={{ paddingLeft: '1.5rem', color: '#475569', lineHeight: '1.6', listStyleType: 'disc' }}>
                                        {product.helpingMaterials.list.map((item, index) => (
                                            <li key={index} style={{ marginBottom: '0.5rem', paddingLeft: '0.5rem' }}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                {product.images && product.images.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`${product.title} ${index + 1}`}
                                        style={{
                                            width: '100%',
                                            borderRadius: '0.5rem',
                                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <style>{`
                        .product-detail-grid {
                            display: grid;
                            grid-template-columns: minmax(0, 1fr);
                            gap: 4rem;
                            align-items: start;
                            width: 100%;
                        }
                        
                        @media (min-width: 768px) {
                            .product-detail-grid {
                                grid-template-columns: 1fr 1fr;
                            }
                        }
                    `}</style>
                </div>
            </div>
        </div>
    );
};

export default AntiPipingDetail;
