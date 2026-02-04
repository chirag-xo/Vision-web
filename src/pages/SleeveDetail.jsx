import React from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../products.json';
import ProductTable from '../components/ProductTable';

const SleeveDetail = () => {
    const { type } = useParams();
    const sleevesData = productsData.find(p => p.slug === 'sleeves');
    const product = sleevesData?.subProducts?.find(sub => sub.id === type);

    if (!product) {
        return (
            <div className="section container">
                <h2>Product Not Found</h2>
                <Link to="/products/sleeves" className="btn btn-primary">Back to Sleeves</Link>
            </div>
        );
    }

    return (
        <div className="section">
            <div className="container">
                {/* Breadcrumbs */}
                <div style={{ marginBottom: '2rem' }}>
                    <Link to="/products" style={{ color: '#64748b' }}>Products</Link>
                    <span style={{ margin: '0 0.5rem', color: '#cbd5e1' }}>/</span>
                    <Link to="/products/sleeves" style={{ color: '#64748b' }}>Sleeves</Link>
                    <span style={{ margin: '0 0.5rem', color: '#cbd5e1' }}>/</span>
                    <span style={{ fontWeight: '600' }}>{product.title}</span>
                </div>

                <h1 style={{ marginBottom: '2rem', fontSize: '2.5rem' }}>{product.detailTitle || product.title}</h1>
                {product.intro && <p style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '3rem' }}>{product.intro}</p>}

                {product.variants ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
                        {product.variants.map((variant, index) => (
                            <div key={index} id={variant.name.toLowerCase().replace(/ /g, '-')}>
                                <h2 style={{ marginBottom: '2rem', fontSize: '2rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>{variant.heading}</h2>
                                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(300px, 400px)', gap: '4rem', alignItems: 'start' }}>
                                    {/* Left Content */}
                                    <div>
                                        <div style={{ whiteSpace: 'pre-line', fontSize: '1.1rem', color: '#334155', lineHeight: '1.8', marginBottom: '3rem' }}>
                                            {variant.description}
                                        </div>
                                        {variant.tableData && (
                                            <div>
                                                <h3 style={{ marginBottom: '1rem' }}>Technical Specifications</h3>
                                                <ProductTable columns={variant.tableData.columns} rows={variant.tableData.rows} />
                                            </div>
                                        )}
                                    </div>
                                    {/* Right Images */}
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                        {variant.images && variant.images.map((img, idx) => (
                                            <div key={idx} style={{ border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden', background: 'white', padding: '1rem' }}>
                                                <img src={img} alt={`${variant.name} ${idx + 1}`} style={{ width: '100%', display: 'block' }} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(300px, 400px)', gap: '4rem', alignItems: 'start' }}>
                        {/* Left Content */}
                        <div>
                            <div style={{ whiteSpace: 'pre-line', fontSize: '1.1rem', color: '#334155', lineHeight: '1.8', marginBottom: '3rem' }}>
                                {product.description}
                            </div>

                            {product.tableData ? (
                                <div>
                                    <h3 style={{ marginBottom: '1rem' }}>Technical Specifications</h3>
                                    <ProductTable columns={product.tableData.columns} rows={product.tableData.rows} />
                                </div>
                            ) : (
                                <div style={{ padding: '2rem', background: '#f1f5f9', borderRadius: '8px' }}>
                                    <p>Detailed specifications coming soon.</p>
                                </div>
                            )}
                        </div>

                        {/* Right Images */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {product.images && product.images.length > 0 ? (
                                product.images.map((img, idx) => (
                                    <div key={idx} style={{ border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden', background: 'white', padding: '1rem' }}>
                                        <img src={img} alt={`${product.title} ${idx + 1}`} style={{ width: '100%', display: 'block' }} />
                                    </div>
                                ))
                            ) : (
                                <div style={{ height: '300px', background: '#f1f5f9', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>
                                    No images available
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SleeveDetail;
