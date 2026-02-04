import React from 'react';

const Contact = () => {

    return (
        <div className="section">
            <div className="container contact-grid">
                {/* Intro Text - Order 1 on Mobile */}
                <div className="contact-intro">
                    <h1>Contact Us</h1>
                    <p style={{ marginBottom: '2rem', color: '#64748b' }}>We'd love to hear from you. Reach out to us for any inquiries.</p>
                </div>

                {/* Contact Info - Order 3 on Mobile */}
                <div className="contact-details">
                    <div style={{ marginBottom: '1.5rem' }}>
                        <h3>Corporate Office</h3>
                        <p><strong>Unit I:</strong> D-30, Industrial Area Bahadrabad, Haridwar-249402 Uttarakhand, INDIA</p>
                    </div>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <h3>Email</h3>
                        <p><a href="mailto:visionmetal2000@yahoo.com" style={{ color: 'var(--color-primary)' }}>visionmetal2000@yahoo.com</a></p>
                        <p><a href="mailto:visionmetal2000@gmail.com" style={{ color: 'var(--color-primary)' }}>visionmetal2000@gmail.com</a></p>
                        <p><a href="mailto:sales@visionmetalaids.net" style={{ color: 'var(--color-primary)' }}>sales@visionmetalaids.net</a></p>
                        <p><a href="mailto:ashish@visionmetalaids.net" style={{ color: 'var(--color-primary)' }}>ashish@visionmetalaids.net</a></p>
                        <p><a href="mailto:visionmetal3000@gmail.com" style={{ color: 'var(--color-primary)' }}>visionmetal3000@gmail.com</a></p>
                    </div>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <h3>Phone</h3>
                        <p>+91 98370 27988</p>
                        <p>+91 92196 94802</p>
                    </div>
                </div>

                {/* Contact Form - Order 2 on Mobile */}
                <div className="glass-card contact-form">
                    <h3 style={{ marginBottom: '1.5rem' }}>Send a Message</h3>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <input type="text" placeholder="Your Name" style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e1' }} />
                        <input type="email" placeholder="Your Email" style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e1' }} />
                        <textarea rows="4" placeholder="Message" style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e1' }}></textarea>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>

            <style>{`
                .contact-grid {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }

                /* Mobile Order */
                .contact-intro { order: 1; }
                .contact-form { order: 2; }
                .contact-details { order: 3; }

                /* Desktop Layout */
                @media (min-width: 768px) {
                    .contact-grid {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 4rem;
                        align-items: start;
                    }
                    
                    /* Reset Order/Grid placement */
                    .contact-intro {
                        grid-column: 1;
                        grid-row: 1;
                    }
                    
                    .contact-details {
                        grid-column: 1;
                        grid-row: 2;
                    }

                    .contact-form {
                        grid-column: 2;
                        grid-row: 1 / span 2;
                    }
                }
            `}</style>
        </div>
    );
};

export default Contact;
