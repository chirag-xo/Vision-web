import React from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../products.json';
import ProductTable from '../components/ProductTable';

const CoatingDetail = () => {
    const { id } = useParams();
    const coatingsCategory = productsData.find(p => p.slug === 'coatings');
    const product = coatingsCategory?.subProducts?.find(p => p.id === id);

    if (!product) {
        return (
            <div className="section">
                <div className="container">
                    <h2>Product not found</h2>
                    <Link to="/products/coatings">Back to Coatings</Link>
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
                    <Link to="/products/coatings" style={{ color: '#64748b' }}>Coatings</Link>
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
                            <p style={{ color: '#475569', lineHeight: '1.7', marginBottom: '2rem' }}>
                                {product.description}
                                {/* Placeholder for more detailed description if available */}
                            </p>

                            {/* Features or Specs place holder */}
                            <div style={{
                                padding: '1.5rem',
                                backgroundColor: 'rgba(255,255,255,0.5)',
                                borderRadius: '0.5rem',
                                border: '1px solid rgba(0,0,0,0.05)'
                            }}>
                                <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Key Features</h4>
                                <ul style={{ paddingLeft: '1.5rem', color: '#475569', listStyleType: 'disc' }}>
                                    <li style={{ marginBottom: '0.5rem', paddingLeft: '0.5rem' }}>High quality surface finish</li>
                                    <li style={{ marginBottom: '0.5rem', paddingLeft: '0.5rem' }}>Consistent performance</li>
                                    <li style={{ marginBottom: '0.5rem', paddingLeft: '0.5rem' }}>Optimized for {product.subCategory.includes('Water') ? 'Water Based' : 'Solvent Based'} application</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            {product.images && product.images.length > 0 ? (
                                <img
                                    src={product.images[0]}
                                    alt={product.title}
                                    style={{
                                        width: '100%',
                                        borderRadius: '0.5rem',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                    }}
                                />
                            ) : (
                                <div style={{
                                    width: '100%',
                                    height: '300px',
                                    backgroundColor: '#f1f5f9',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '0.5rem',
                                    color: '#94a3b8'
                                }}>
                                    No Image Available
                                </div>
                            )}
                        </div>
                    </div>

                    <style>{`
                        .product-detail-grid {
                            display: grid;
                            gap: 4rem;
                            grid-template-columns: minmax(0, 1fr);
                            align-items: start;
                            margin-bottom: 4rem;
                            width: 100%;
                        }
                        
                        @media (min-width: 768px) {
                            .product-detail-grid {
                                grid-template-columns: 1fr 1fr;
                            }
                        }
                    `}</style>

                    {/* Technical Specifications Table */}
                    {product.tableData && (
                        <div style={{ marginTop: '3rem' }}>
                            <h3 className="responsive-heading" style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>Technical Specifications</h3>
                            <ProductTable columns={product.tableData.columns} rows={product.tableData.rows} />
                            <style>{`
                                .responsive-heading {
                                    font-size: 1.25rem;
                                }
                                @media (min-width: 768px) {
                                    .responsive-heading {
                                        font-size: 1.5rem;
                                    }
                                }
                            `}</style>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CoatingDetail;
