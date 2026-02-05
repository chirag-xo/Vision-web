import React from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../products.json';

const CategoryPage = () => {
    const { slug } = useParams();

    // Helper to match slug to category name
    const category = productsData.find(c =>
        c.category.toLowerCase().replace(/ /g, '-').replace(/&/g, 'and') === slug
    );

    if (!category) {
        return (
            <div className="container section">
                <h2>Category Not Found</h2>
                <Link to="/products" className="btn btn-primary">Back to Products</Link>
            </div>
        );
    }

    return (
        <div className="section">
            <div className="container">
                <Link to="/products" style={{ color: 'var(--color-metallic)', marginBottom: '1rem', display: 'inline-block' }}>
                    &larr; Back to Products
                </Link>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>{category.category}</h1>
                <p style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '3rem' }}>{category.description}</p>

                {/* Render Subcategories if they exist */}
                {category.subProducts ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                        {category.subProducts.map((sub, idx) => (
                            <div key={idx} className="glass-card">
                                <h2 style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>{sub.title || sub.name}</h2>
                                {sub.description && <p style={{ marginBottom: '1.5rem' }}>{sub.description}</p>}

                                {/* Render Images if they exist */}
                                {sub.images && sub.images.length > 0 && (
                                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem', justifyContent: 'center' }}>
                                        {sub.images.map((img, imgIdx) => (
                                            <img
                                                key={imgIdx}
                                                src={img}
                                                alt={`${sub.title} ${imgIdx + 1}`}
                                                style={{ maxWidth: '100%', maxHeight: '340px', borderRadius: '8px', objectFit: 'contain' }}
                                            />
                                        ))}
                                    </div>
                                )}

                                {/* Advantages List (for Carbon Additives) */}
                                {sub.advantages && (
                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <h4 style={{ marginBottom: '0.5rem' }}>Advantages:</h4>
                                        <ol style={{ paddingLeft: '1.5rem' }}>
                                            {sub.advantages.map((adv, i) => (
                                                <li key={i} style={{ marginBottom: '0.25rem' }}>{adv}</li>
                                            ))}
                                        </ol>
                                    </div>
                                )}

                                {/* Product Table or List */}
                                {sub.products && sub.products.length > 0 ? (
                                    <div style={{ overflowX: 'auto' }}>
                                        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', minWidth: '600px' }}>
                                            <thead>
                                                <tr style={{ background: 'rgba(0,0,0,0.05)' }}>
                                                    <th style={{ padding: '1rem', textAlign: 'left' }}>Product Name</th>
                                                    <th style={{ padding: '1rem', textAlign: 'left' }}>Details</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {sub.products.map((prod, pIdx) => (
                                                    <tr key={pIdx} style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                                                        <td style={{ padding: '1rem', fontWeight: '600' }}>{prod.name}</td>
                                                        <td style={{ padding: '1rem' }}>
                                                            {prod.tableData ? (
                                                                <div style={{ overflowX: 'auto', marginTop: '1rem' }}>
                                                                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', minWidth: '100%' }}>
                                                                        <thead>
                                                                            <tr style={{ background: '#f1f5f9' }}>
                                                                                {prod.tableData.columns.map((col, cIdx) => (
                                                                                    <th key={cIdx} style={{ padding: '0.5rem', border: '1px solid #cbd5e1' }}>{col}</th>
                                                                                ))}
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {prod.tableData.rows.map((row, rIdx) => (
                                                                                <tr key={rIdx}>
                                                                                    {row.map((cell, cellIdx) => (
                                                                                        <td key={cellIdx} style={{ padding: '0.5rem', border: '1px solid #cbd5e1', textAlign: 'center' }}>{cell}</td>
                                                                                    ))}
                                                                                </tr>
                                                                            ))}
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            ) : prod.specs ? (
                                                                <pre style={{ fontFamily: 'inherit', whiteSpace: 'pre-wrap' }}>
                                                                    {JSON.stringify(prod.specs, null, 2).replace(/[{}"]/g, '')}
                                                                </pre>
                                                            ) : (
                                                                prod.description
                                                            )}

                                                            {/* Show Diagram if category is Sleeves and table exists */}
                                                            {category.category.includes('Sleeves') && prod.tableData && (
                                                                <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                                                                    <h4 style={{ marginBottom: '1rem', color: '#64748b' }}>Technical Diagram</h4>
                                                                    <img src="/assets/sleeves-diagram.png" alt="Sleeve Diagram" style={{ maxWidth: '100%', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                                                                </div>
                                                            )}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ) : sub.tableData ? (
                                    /* Render Table Directly if subCategory has tableData (like Metakol in updated JSON) */
                                    <div style={{ overflowX: 'auto', marginTop: '1rem' }}>
                                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', minWidth: '100%' }}>
                                            <thead>
                                                <tr style={{ background: '#f1f5f9' }}>
                                                    {sub.tableData.columns.map((col, cIdx) => (
                                                        <th key={cIdx} style={{ padding: '0.5rem', border: '1px solid #cbd5e1' }}>{col}</th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {sub.tableData.rows.map((row, rIdx) => (
                                                    <tr key={rIdx}>
                                                        {row.map((cell, cellIdx) => (
                                                            <td key={cellIdx} style={{ padding: '0.5rem', border: '1px solid #cbd5e1', textAlign: 'center' }}>{cell}</td>
                                                        ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        {sub.footerNote && <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', fontStyle: 'italic' }}>{sub.footerNote}</p>}
                                    </div>
                                ) : (
                                    <p>No specific products listed.</p>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    /* Render Flat Products List - Fallback for categories with direct products array like 'Other Products' */
                    <div className="glass-card">
                        {category.products && category.products.length > 0 ? (
                            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
                                {category.products.map((prod, idx) => (
                                    <li key={idx} style={{ padding: '1rem', border: '1px solid #eee', borderRadius: '8px', listStyle: 'none' }}>
                                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{prod.name}</h3>
                                        {prod.description && <p>{prod.description}</p>}
                                        {prod.specs && (
                                            <pre style={{ fontFamily: 'inherit', whiteSpace: 'pre-wrap', fontSize: '0.9rem' }}>
                                                {JSON.stringify(prod.specs, null, 2).replace(/[{}"]/g, '')}
                                            </pre>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>Product details coming soon.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategoryPage;
