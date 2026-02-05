import React from 'react';

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

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
                        <h3>Our Units</h3>
                        <p style={{ marginBottom: '0.5rem' }}><strong>Unit I:</strong> D-30, Industrial Area Bahadrabad, Haridwar-249402 Uttarakhand, INDIA</p>
                        <p style={{ marginBottom: '0.5rem' }}><strong>Unit II:</strong> Bahadrabad, Haridwar-249402</p>
                        <p style={{ marginBottom: '0.5rem' }}><strong>Unit III:</strong> Dausa, Rajasthan-303507</p>
                        <p style={{ marginBottom: '0.5rem' }}><strong>Unit IV:</strong> Mandi Gobindgarh, Punjab</p>
                        <p><strong>Warehouse I:</strong> 863, Hariom Nagar, Distt. Saraikella, Kharsawan, Jamshedpur, Jharkhand-832402</p>
                    </div>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <h3>Email</h3>
                        <p><a href="mailto:sales@visionmetalaids.com" style={{ color: 'var(--color-primary)' }}>sales@visionmetalaids.com</a></p>
                        <p><a href="mailto:ashish@visionmetalaids.com" style={{ color: 'var(--color-primary)' }}>ashish@visionmetalaids.com</a></p>
                        <p><a href="mailto:anurag@visionmetalaids.com" style={{ color: 'var(--color-primary)' }}>anurag@visionmetalaids.com</a></p>
                        <p><a href="mailto:quality@visionmetalaids.com" style={{ color: 'var(--color-primary)' }}>quality@visionmetalaids.com</a></p>
                        <p><a href="mailto:accounts@visionmetalaids.com" style={{ color: 'var(--color-primary)' }}>accounts@visionmetalaids.com</a></p>
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
                    <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {/* Web3Forms Access Key - You must replace this with your own key from https://web3forms.com/ */}
                        <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />

                        <input type="text" name="name" required placeholder="Your Name" style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e1' }} />
                        <input type="email" name="email" required placeholder="Your Email" style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e1' }} />
                        <textarea name="message" required rows="4" placeholder="Message" style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e1' }}></textarea>

                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                    {result && <p style={{ marginTop: '1rem', color: result.includes('Success') ? 'green' : 'red' }}>{result}</p>}
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
