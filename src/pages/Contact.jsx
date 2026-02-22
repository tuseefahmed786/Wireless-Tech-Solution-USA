import React from 'react'
import ContactForm from '../components/ContactForm'

export default function Contact(){
  return (
    <div>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-bg" aria-hidden></div>
        <div className="container">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-subtitle">We're here to help. Reach out with any questions about our wireless, IT, and IPTV solutions.</p>
        </div>
      </section>

      <div className="container" style={{padding:'0'}}>
        <div style={{display:'grid',gap:80,padding:'80px 0'}}>
          {/* Contact Cards Section */}
          <section>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))',gap:32}}>
              {/* Address Card */}
              <div className="contact-card">
                <div className="contact-icon">📍</div>
                <h3 style={{margin:'16px 0 12px 0',fontSize:'1.2rem'}}>Address</h3>
                <p style={{margin:0,color:'var(--gray-600)',lineHeight:'1.7'}}>
                  123 Birkshire Ct Apt B<br />
                  Hasbrouck Heights, New Jersey 07604
                </p>
              </div>

              {/* Phone Card */}
              <div className="contact-card">
                <div className="contact-icon">📞</div>
                <h3 style={{margin:'16px 0 12px 0',fontSize:'1.2rem'}}>Phone</h3>
                <a href="tel:+18623737478" style={{color:'var(--blue)',fontWeight:600,fontSize:'1.1rem',textDecoration:'none',display:'block',marginBottom:12}}>
                  (+1) 862-373-7478
                </a>
                <p style={{margin:0,color:'var(--gray-600)',fontSize:'0.9rem'}}>Available during business hours</p>
              </div>

              {/* Email Card */}
              <div className="contact-card">
                <div className="contact-icon">✉️</div>
                <h3 style={{margin:'16px 0 12px 0',fontSize:'1.2rem'}}>Email</h3>
                <a href="mailto:Wireless.tech1987@gmail.com" style={{color:'var(--blue)',fontWeight:600,fontSize:'1rem',textDecoration:'none',wordBreak:'break-all',display:'block',marginBottom:12}}>
                  Wireless.tech1987@gmail.com
                </a>
                <p style={{margin:0,color:'var(--gray-600)',fontSize:'0.9rem'}}>We respond within 24 hours</p>
              </div>

              {/* Hours Card */}
              <div className="contact-card">
                <div className="contact-icon">⏰</div>
                <h3 style={{margin:'16px 0 12px 0',fontSize:'1.2rem'}}>Business Hours</h3>
                <p style={{margin:'0 0 8px 0',color:'var(--gray-600)',fontWeight:500}}>Monday – Friday:</p>
                <p style={{margin:0,color:'var(--gray-600)'}}>9:00 AM – 6:00 PM EST</p>
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section>
            <div>
              <h2 style={{marginBottom:'32px',fontSize:'2.2rem'}}>Send Us a Message</h2>
              <div className="form-wrapper">
                <ContactForm />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
