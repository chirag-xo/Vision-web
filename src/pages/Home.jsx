import React from 'react';
import { Link } from 'react-router-dom';
import productsData from '../products.json';

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="hero" style={{
                background: 'linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.8)), url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                padding: '8rem 0',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h1 style={{ marginBottom: '1rem', color: 'white', textTransform: 'uppercase', lineHeight: '1.1' }}>
                        <span style={{ display: 'block', fontSize: '6rem', fontWeight: '900', letterSpacing: '6px', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>VISION</span>
                        <span style={{ display: 'block', fontSize: '2.5rem', fontWeight: '400', letterSpacing: '4px', marginTop: '0.5rem' }}>TO SERVE CASTERS</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                        Premier manufacturer of Exothermic Sleeves, Coatings, and Metallurgical Products.
                        ISO 9001:2015 Certified.
                    </p>
                    <Link to="/products" className="btn btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>Explore Products</Link>
                </div>
            </section>

            {/* Categories Highlights */}
            <section className="section" style={{ padding: '3rem 0' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Product Range</h2>
                    <div className="product-grid">
                        {productsData.map((cat, index) => (
                            <div key={index} className="glass-card">
                                <h3>{cat.category}</h3>
                                <p style={{ margin: '1rem 0' }}>{cat.description}</p>
                                <Link to={`/products/${cat.slug}`} style={{ color: 'var(--color-accent)', fontWeight: '600', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                                    Learn More &rarr;
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style>{`
                .hero h1 span:first-child { fontSize: 4rem !important; }
                .hero h1 span:last-child { fontSize: 1.5rem !important; }

                .product-grid { 
                    display: grid; 
                    gap: 2rem; 
                    grid-template-columns: 1fr;
                }
                
                @media (min-width: 640px) {
                    .product-grid { grid-template-columns: repeat(2, 1fr); }
                    .hero h1 span:first-child { fontSize: 5rem !important; }
                    .hero h1 span:last-child { fontSize: 2rem !important; }
                }
                
                @media (min-width: 1024px) {
                    .hero h1 span:first-child { fontSize: 7rem !important; }
                    .hero h1 span:last-child { fontSize: 2.5rem !important; }
                    .product-grid { grid-template-columns: repeat(3, 1fr); }
                }
            `}</style>
        </div>
    );
};

export default Home;
