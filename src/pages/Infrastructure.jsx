import React from 'react';

const Infrastructure = () => {
    const units = [
        {
            title: "Unit I",
            address: "D-30, Industrial Area Bahadrabad, Haridwar-249402 Uttarakhand, INDIA"
        },
        {
            title: "Unit II",
            address: "Bahadrabad, Haridwar-249402"
        },
        {
            title: "Unit III",
            address: "Dausa, Rajasthan-303507"
        },
        {
            title: "Unit IV",
            address: "Mandi Gobindgarh, Punjab"
        },
        {
            title: "Warehouse I",
            address: "863, Hariom Nagar, Distt. Saraikella, Kharsawan, Jamshedpur, Jharkhand-832402"
        }
    ];

    return (
        <div className="section">
            <div className="container">
                <h1 style={{ marginBottom: '3rem', textAlign: 'center' }}>Our Infrastructure & Presence</h1>

                <div style={{ marginBottom: '4rem' }}>
                    <div className="glass-card" style={{ padding: '2rem', display: 'flex', justifyContent: 'center', background: 'white' }}>
                        <img
                            src="/assets/infra-map.png"
                            alt="Vision Metal Aids Pan India Presence"
                            style={{ maxWidth: '100%', height: 'auto', maxHeight: '600px' }}
                        />
                    </div>
                </div>

                <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Manufacturing Units & Warehouses</h2>
                <div className="infra-grid">
                    {units.map((unit, index) => (
                        <div key={index} className="glass-card" style={{ padding: '2rem' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>{unit.title}</h3>
                            <p style={{ color: '#475569', lineHeight: '1.6' }}>{unit.address}</p>
                        </div>
                    ))}
                </div>

                <style>{`
                    .infra-grid {
                        display: grid;
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }
                    @media (min-width: 640px) {
                        .infra-grid {
                            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                        }
                    }
                `}</style>
            </div>
        </div>
    );
};

export default Infrastructure;
