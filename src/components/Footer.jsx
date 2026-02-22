import React from 'react'

export default function Footer(){
  const socialLinks = [
    {icon:'f',label:'Facebook',href:'#'},
    {icon:'𝕏',label:'Twitter',href:'#'},
    {icon:'in',label:'LinkedIn',href:'#'},
  ]

  const quickLinks = [
    {label:'Home',href:'/'},
    {label:'Services',href:'/services'},
    {label:'About',href:'/about'},
    {label:'Contact',href:'/contact'},
  ]

  return (
    <footer className="site-footer">
      <div className="container">
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))',gap:40,marginBottom:48}}>
          {/* Company Info */}
          <div>
            <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:24}}>
              <div style={{width:40,height:40,background:'linear-gradient(135deg, var(--blue) 0%, var(--blue-light) 100%)',borderRadius:'10px',display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontWeight:800,fontSize:'0.9rem',boxShadow:'0 4px 12px rgba(0, 102, 255, 0.3)'}}>W</div>
              <div>
                <div style={{fontWeight:800,fontSize:'0.95rem',color:'white'}}>Wireless Tech</div>
                <div style={{fontSize:'0.7rem',opacity:0.7,letterSpacing:'0.5px'}}>Solution USA LLC</div>
              </div>
            </div>
            <p style={{color:'rgba(255, 255, 255, 0.7)',fontSize:'0.95rem',lineHeight:1.7,margin:0}}>
              Delivering innovative wireless and IT infrastructure solutions to businesses throughout New Jersey and beyond.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{color:'white',marginBottom:20,fontSize:'1rem',fontWeight:700}}>Get in Touch</h4>
            <div style={{display:'flex',flexDirection:'column',gap:12}}>
              <div>
                <div style={{fontSize:'0.85rem',color:'rgba(255, 255, 255, 0.6)',marginBottom:4}}>Address</div>
                <div style={{color:'rgba(255, 255, 255, 0.85)',fontSize:'0.9rem',lineHeight:1.6}}>
                  123 Birkshire Ct Apt B<br />
                  Hasbrouck Heights, NJ 07604
                </div>
              </div>
              <div>
                <div style={{fontSize:'0.85rem',color:'rgba(255, 255, 255, 0.6)',marginBottom:4}}>Phone</div>
                <a href="tel:+18623737478" style={{color:'var(--blue)',fontWeight:600,fontSize:'0.9rem',textDecoration:'none',transition:'var(--transition)'}}>
                  (+1) 862-373-7478
                </a>
              </div>
              <div>
                <div style={{fontSize:'0.85rem',color:'rgba(255, 255, 255, 0.6)',marginBottom:4}}>Email</div>
                <a href="mailto:Wireless.tech1987@gmail.com" style={{color:'var(--blue)',fontWeight:600,fontSize:'0.9rem',textDecoration:'none',transition:'var(--transition)'}}>
                  Wireless.tech1987@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{color:'white',marginBottom:20,fontSize:'1rem',fontWeight:700}}>Quick Links</h4>
            <nav style={{display:'flex',flexDirection:'column',gap:10}}>
              {quickLinks.map((link,i)=>(
                <a 
                  key={i}
                  href={link.href}
                  style={{
                    color:'rgba(255, 255, 255, 0.7)',
                    fontSize:'0.9rem',
                    textDecoration:'none',
                    transition:'var(--transition)',
                    paddingLeft:'8px',
                    borderLeft:'2px solid transparent',
                    position:'relative'
                  }}
                  onMouseEnter={(e)=>{
                    e.target.style.borderLeftColor='var(--blue)'
                    e.target.style.color='var(--blue)'
                    e.target.style.paddingLeft='12px'
                  }}
                  onMouseLeave={(e)=>{
                    e.target.style.borderLeftColor='transparent'
                    e.target.style.color='rgba(255, 255, 255, 0.7)'
                    e.target.style.paddingLeft='8px'
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 style={{color:'white',marginBottom:20,fontSize:'1rem',fontWeight:700}}>Follow Us</h4>
            <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
              {socialLinks.map((social,i)=>(
                <a
                  key={i}
                  href={social.href}
                  title={social.label}
                  style={{
                    width:44,
                    height:44,
                    borderRadius:'10px',
                    background:'rgba(0, 102, 255, 0.1)',
                    border:'1px solid rgba(0, 102, 255, 0.2)',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    color:'var(--blue)',
                    fontWeight:700,
                    fontSize:'1.1rem',
                    textDecoration:'none',
                    transition:'var(--transition)',
                    cursor:'pointer'
                  }}
                  onMouseEnter={(e)=>{
                    e.target.style.background='var(--blue)'
                    e.target.style.color='white'
                    e.target.style.borderColor='var(--blue)'
                    e.target.style.transform='translateY(-4px)'
                    e.target.style.boxShadow='0 8px 20px rgba(0, 102, 255, 0.4)'
                  }}
                  onMouseLeave={(e)=>{
                    e.target.style.background='rgba(0, 102, 255, 0.1)'
                    e.target.style.color='var(--blue)'
                    e.target.style.borderColor='rgba(0, 102, 255, 0.2)'
                    e.target.style.transform='translateY(0)'
                    e.target.style.boxShadow='none'
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{borderTop:'1px solid rgba(255, 255, 255, 0.1)',paddingTop:32,marginTop:32}}>
          <div style={{display:'grid',gridTemplateColumns:'1fr auto',gap:20,alignItems:'center',justifyContent:'space-between'}}>
            <p style={{margin:0,color:'rgba(255, 255, 255, 0.6)',fontSize:'0.85rem'}}>
              © 2026 Wireless Tech Solution USA LLC. All rights reserved.
            </p>
            <div style={{display:'flex',gap:24}}>
              <a href="#" style={{color:'rgba(255, 255, 255, 0.6)',fontSize:'0.85rem',textDecoration:'none',transition:'var(--transition)'}} 
                onMouseEnter={(e)=>e.target.style.color='var(--blue)'}
                onMouseLeave={(e)=>e.target.style.color='rgba(255, 255, 255, 0.6)'}
              >Privacy Policy</a>
              <a href="#" style={{color:'rgba(255, 255, 255, 0.6)',fontSize:'0.85rem',textDecoration:'none',transition:'var(--transition)'}}
                onMouseEnter={(e)=>e.target.style.color='var(--blue)'}
                onMouseLeave={(e)=>e.target.style.color='rgba(255, 255, 255, 0.6)'}
              >Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .site-footer {
            padding: 48px 0 24px !important;
          }
        }
      `}</style>
    </footer>
  )
}
