import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formsubmit.co/ajax/ghorkhuji@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Message from ${formData.name}: ${formData.subject}`,
          _captcha: 'false',
        }),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    }

    window.setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-layout">
        <div className="contact-copy">
          <span className="section-kicker">Get In Touch</span>
          <h2 className="title left">Let's talk about how we can work together</h2>
          <p className="subtitle left">
            Whether you're a renter, property owner, or potential partner — we'd love to hear from you.
          </p>

          <div className="contact-cards">
            <div className="contact-card">
              <span>Phone</span>
              <strong>+8801410688168</strong>
            </div>
            <div className="contact-card">
              <span>Email</span>
              <strong>ghorkhuji@gmail.com</strong>
            </div>
            <div className="contact-card">
              <span>Based in</span>
              <strong>Dhaka, Bangladesh</strong>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>

            <div className="form-group two-up">
              <div>
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-input"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help?"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us what you need..."
              />
            </div>

            <button type="submit" className="btn submit-btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <div className="form-status success">Message sent successfully! We'll get back to you soon.</div>
            )}
            {status === 'error' && (
              <div className="form-status error">Something went wrong. Please try again later.</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
