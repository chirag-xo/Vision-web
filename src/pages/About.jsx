import React from 'react';

const About = () => {
    return (
        <div className="section">
            <div className="container">
                <h1 style={{ marginBottom: '2rem', fontSize: '3rem' }}>About <span style={{ color: 'var(--color-accent)' }}>Us</span></h1>

                <div className="glass-card" style={{ marginBottom: '4rem' }}>
                    <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                        <strong style={{ color: 'var(--color-primary)' }}>Vision Metal Aids P Ltd</strong> was incorporated in 1993. Since the founding, we have consistently endeavoured to develop and manufacture superior Foundry and Steel melting shop products that win confidence and satisfaction of our customers. Today we are among the top producer of these products in India and a favoured supplier to many customers in India as well as abroad.
                    </p>
                    <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                        We started our manufacturing journey from all kind of Riser sleeves, hot tops, fluxes and gradually added products like coatings, Green sand additives (Coal additives) and Resin Coated Sand of premium grades because of the support and confidence of our prominent customers on us.
                    </p>
                    <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                        We are strictly following all safety norms and are continuously working in the interest of our society and environment by adopting latest technology and reducing wastage during production.
                    </p>
                    <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                        Our corporate philosophy is to supply foundry products that feed our customers with confidence and inspiration through development of technology. Drawing on our technological development capabilities, we have developed products to give our customer maximum benefits.
                    </p>
                    <div style={{ padding: '1.5rem', background: 'rgba(225, 29, 72, 0.1)', borderLeft: '4px solid var(--color-accent)', borderRadius: '0 4px 4px 0' }}>
                        <p style={{ fontStyle: 'italic' }}>
                            "Our long term business objectives are to achieve world class quality level and strengthen our position as global producer of Ferro Molybdenum, Foundry Coatings, Tundish Board, etc. We export our product Pakistan, Africa, Sri Lanka, Dubai, etc. countries."
                        </p>
                    </div>
                </div>

                <h2 style={{ marginBottom: '2rem', fontSize: '2.5rem' }}>Our <span style={{ color: 'var(--color-accent)' }}>Infrastructure</span></h2>
                <div className="glass-card">
                    <div className="about-infra-grid">
                        <div>
                            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                                With the assistance of our well-furnished infrastructure unit, we have been able to deliver premium quality products to our precious clients.
                            </p>
                            <p style={{ fontSize: '1.1rem' }}>
                                This facility is further divided into various departments like quality control department, procurement department, production department, research & development department and sales & marketing department. The works in these sub-units are managed by our skilled professionals.
                            </p>
                        </div>
                        <div style={{ height: '300px', background: 'linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
                            {/* Placeholder for Infrastructure Image */}
                            <span>Usage of Latest Technology</span>
                        </div>
                    </div>
                </div>

                <style>{`
                    .about-infra-grid {
                        display: grid;
                        grid-template-columns: 1fr;
                        gap: 2rem;
                        align-items: center;
                    }
                    @media(min-width: 768px) {
                        .about-infra-grid {
                            grid-template-columns: 1fr 1fr;
                        }
                    }
                `}</style>
            </div>
        </div>
    );
};

export default About;
