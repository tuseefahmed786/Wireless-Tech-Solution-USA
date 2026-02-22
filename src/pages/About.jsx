import React from 'react'

export default function About(){
  return (
    <div>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-bg" aria-hidden></div>
        <div className="container">
          <h1 className="about-title">About Wireless Tech Solution USA</h1>
          <p className="about-subtitle">Pioneering cutting-edge wireless, IT infrastructure, and digital solutions since day one.</p>
        </div>
      </section>

      <div className="container" style={{padding:'0'}}>
        <div style={{display:'grid',gap:80,padding:'80px 0'}}>
          {/* Our Story */}
          <section className="about-section">
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:60,alignItems:'center'}}>
              <div>
                <h2 style={{marginBottom:'24px',fontSize:'2.2rem'}}>Our Story</h2>
                <p style={{fontSize:'1.05rem',lineHeight:'1.8',color:'var(--gray-700)',marginBottom:18}}>
                  Wireless Tech Solution USA LLC was founded with a mission to provide reliable wireless and IT solutions to businesses throughout New Jersey and surrounding areas. We focus on delivering quality, reliability, and exceptional customer satisfaction with every project we undertake.
                </p>
                <p style={{fontSize:'1.05rem',lineHeight:'1.8',color:'var(--gray-700)'}}>
                  From small businesses to enterprise clients, we've built lasting partnerships by consistently delivering results and exceeding expectations.
                </p>
              </div>
              <div style={{background:'linear-gradient(135deg, rgba(0,102,255,0.1), rgba(99,102,241,0.05))',borderRadius:'20px',padding:'40px',border:'1px solid rgba(0,102,255,0.1)',minHeight:300,display:'flex',alignItems:'center',justifyContent:'center'}}>
                <div style={{textAlign:'center'}}>
                  <div style={{fontSize:'4rem',marginBottom:16}}>🚀</div>
                  <p style={{fontSize:'1.1rem',color:'var(--gray-700)',fontWeight:500}}>Innovating wireless solutions since day one</p>
                </div>
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="two-col" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:40}}>
            <div className="about-card mission-card">
              <div className="card-icon">🎯</div>
              <h2 style={{marginBottom:'18px',fontSize:'1.6rem'}}>Our Mission</h2>
              <p style={{margin:0,fontSize:'1rem',lineHeight:'1.7',color:'var(--gray-700)'}}>
                To deliver innovative, secure, and scalable wireless technology solutions that empower businesses to grow, succeed, and stay competitive in an ever-evolving digital landscape.
              </p>
            </div>

            <div className="about-card vision-card">
              <div className="card-icon">🌟</div>
              <h2 style={{marginBottom:'18px',fontSize:'1.6rem'}}>Our Vision</h2>
              <p style={{margin:0,fontSize:'1rem',lineHeight:'1.7',color:'var(--gray-700)'}}>
                To become a leading wireless and IT solutions provider in the United States, known for excellence, innovation, and unwavering customer commitment.
              </p>
            </div>
          </section>

          {/* Core Values */}
          <section>
            <h2 style={{marginBottom:'48px',fontSize:'2.2rem',textAlign:'center'}}>Core Values</h2>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))',gap:32}}>
              {[
                {title:'Integrity',desc:'Honest, transparent, and ethical in all dealings',icon:'✓'},
                {title:'Innovation',desc:'Forward-thinking solutions tailored to unique needs',icon:'💡'},
                {title:'Excellence',desc:'Highest quality in every project and interaction',icon:'⭐'},
                {title:'Customer Commitment',desc:'Your success is our success',icon:'❤️'}
              ].map((val,i)=>(
                <div key={i} className="value-card">
                  <div className="value-icon">{val.icon}</div>
                  <h4 style={{margin:'12px 0 8px 0',fontSize:'1.1rem',color:'var(--blue)'}}>{val.title}</h4>
                  <p style={{margin:0,color:'var(--gray-600)',fontSize:'0.95rem',lineHeight:1.6}}>{val.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section>
            <h2 style={{marginBottom:'48px',fontSize:'2.2rem',textAlign:'center'}}>Meet Our Team</h2>
            <div className="team-placeholder">
              <div style={{textAlign:'center'}}>
                <div style={{fontSize:'3.5rem',marginBottom:'16px'}}>👥</div>
                <div style={{fontSize:'1.3rem',fontWeight:600,marginBottom:'12px'}}>Dedicated Professional Team</div>
                <div style={{fontSize:'1rem',opacity:0.85}}>Expert technicians and specialists ready to serve you</div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section>
            <div className="about-cta">
              <h2 style={{margin:'0 0 16px 0',fontSize:'2rem'}}>Ready to Transform Your Business?</h2>
              <p style={{margin:'0 0 28px 0',maxWidth:800,fontSize:'1.05rem',lineHeight:1.7}}>
                Let's discuss your project and create a custom solution that drives your business forward. Our expert team is ready to bring your vision to life.
              </p>
              <a href="/contact" className="btn btn-primary">Get Started Today</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
