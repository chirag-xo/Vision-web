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
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'white', textTransform: 'uppercase', letterSpacing: '2px' }}>VISION TO SERVE CASTERS</h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                        Premier manufacturer of Exothermic Sleeves, Coatings, and Metallurgical Products.
                        ISO 9001:2008 Certified.
                    </p>
                    <Link to="/products" className="btn btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>Explore Products</Link>
                </div>
            </section>

            {/* Categories Highlights */}
            <section className="section">
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Product Range</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
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
        </div>
    );
};

export default Home;
