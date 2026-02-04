import React from 'react';

const Contact = () => {
    return (
        <div className="section">
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                <div>
                    <h1>Contact Us</h1>
                    <p style={{ marginBottom: '2rem', color: '#64748b' }}>We'd love to hear from you. Reach out to us for any inquiries.</p>

                    <div className="contact-info">
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
                </div>

                <div className="glass-card">
                    <h3 style={{ marginBottom: '1.5rem' }}>Send a Message</h3>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <input type="text" placeholder="Your Name" style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e1' }} />
                        <input type="email" placeholder="Your Email" style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e1' }} />
                        <textarea rows="4" placeholder="Message" style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e1' }}></textarea>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
