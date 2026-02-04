import React from 'react';
import ProductCard from '../components/ProductCard';
import productsData from '../products.json';

const Products = () => {
  const getLink = (category) => {
    if (category.slug) return `/products/${category.slug}`;
    // Fallback for categories without explicit slug in older data
    return '/products/' + category.category.toLowerCase().replace(/ /g, '-').replace(/&/g, 'and');
  };

  return (
    <div className="section">
      <div className="container">
        <h1 style={{ marginBottom: '1rem' }}>Our Products</h1>
        <p style={{ marginBottom: '3rem', maxWidth: '800px', color: '#64748b' }}>
          Explore our wide range of high-quality foundry consumables. From exothermic sleeves to advanced coatings, we provide solutions that enhance casting quality and efficiency.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {productsData.map((cat, index) => (
            <ProductCard
              key={index}
              title={cat.category}
              description={cat.description}
              link={getLink(cat)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
