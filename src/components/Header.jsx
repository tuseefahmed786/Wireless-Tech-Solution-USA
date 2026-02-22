import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header(){
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',height:'100%'}}>
        <Link to="/" className="brand" style={{display:'flex',alignItems:'center',gap:'12px',textDecoration:'none',cursor:'pointer'}}>
          <div style={{display:'flex',flexDirection:'column',lineHeight:'1.2'}}>
            <div style={{fontWeight:800,fontSize:'0.95rem'}}>Wireless Tech</div>
            <div style={{fontSize:'0.72rem',opacity:0.85,letterSpacing:'0.5px'}}>Solution USA LLC</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav style={{display:'none',gap:'32px',alignItems:'center',margin:0,listStyle:'none'}} className="nav-links-desktop">
          <NavLink 
            to="/" 
            style={({isActive})=>({
              color: isActive ? 'var(--white)' : 'rgba(255, 255, 255, 0.75)',
              fontWeight: isActive ? 600 : 500,
              position:'relative',
              paddingBottom: '6px'
            })}
          >
            Home
          </NavLink>
          <NavLink 
            to="/services" 
            style={({isActive})=>({
              color: isActive ? 'var(--white)' : 'rgba(255, 255, 255, 0.75)',
              fontWeight: isActive ? 600 : 500,
              position:'relative',
              paddingBottom: '6px'
            })}
          >
            Services
          </NavLink>
          <NavLink 
            to="/about" 
            style={({isActive})=>({
              color: isActive ? 'var(--white)' : 'rgba(255, 255, 255, 0.75)',
              fontWeight: isActive ? 600 : 500,
              position:'relative',
              paddingBottom: '6px'
            })}
          >
            About
          </NavLink>
          <NavLink 
            to="/contact" 
            style={({isActive})=>({
              color: isActive ? 'var(--white)' : 'rgba(255, 255, 255, 0.75)',
              fontWeight: isActive ? 600 : 500,
              position:'relative',
              paddingBottom: '6px'
            })}
          >
            Contact
          </NavLink>
          <Link className="cta-btn" to="/contact">Get a Consultation</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={()=>setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display:'flex',
            flexDirection:'column',
            gap:'6px',
            background:'none',
            border:'none',
            cursor:'pointer',
            padding:'8px',
            alignItems:'center',
            justifyContent:'center'
          }}
          className="mobile-menu-btn"
        >
          <span style={{
            display:'block',
            width:'24px',
            height:'2px',
            background:'white',
            borderRadius:'1px',
            transition:'all 0.3s ease',
            transform: mobileMenuOpen ? 'rotate(45deg) translateY(10px)' : 'rotate(0)'
          }}></span>
          <span style={{
            display:'block',
            width:'24px',
            height:'2px',
            background:'white',
            borderRadius:'1px',
            transition:'all 0.3s ease',
            opacity: mobileMenuOpen ? 0 : 1
          }}></span>
          <span style={{
            display:'block',
            width:'24px',
            height:'2px',
            background:'white',
            borderRadius:'1px',
            transition:'all 0.3s ease',
            transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-10px)' : 'rotate(0)'
          }}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          position:'absolute',
          top:'100%',
          left:0,
          right:0,
          background:'linear-gradient(180deg, var(--navy-dark) 0%, var(--navy) 100%)',
          borderTop:'1px solid rgba(255, 255, 255, 0.1)',
          padding:'24px',
          animation:'slideDown 0.3s ease forwards'
        }} className="mobile-menu">
          <nav style={{display:'flex',flexDirection:'column',gap:'16px'}}>
            <NavLink 
              to="/" 
              onClick={()=>setMobileMenuOpen(false)}
              style={({isActive})=>({
                color: isActive ? 'var(--blue)' : 'rgba(255, 255, 255, 0.75)',
                fontWeight: isActive ? 600 : 500,
                padding:'12px 0',
                borderBottom:'1px solid rgba(255, 255, 255, 0.1)'
              })}
            >
              Home
            </NavLink>
            <NavLink 
              to="/services" 
              onClick={()=>setMobileMenuOpen(false)}
              style={({isActive})=>({
                color: isActive ? 'var(--blue)' : 'rgba(255, 255, 255, 0.75)',
                fontWeight: isActive ? 600 : 500,
                padding:'12px 0',
                borderBottom:'1px solid rgba(255, 255, 255, 0.1)'
              })}
            >
              Services
            </NavLink>
            <NavLink 
              to="/about" 
              onClick={()=>setMobileMenuOpen(false)}
              style={({isActive})=>({
                color: isActive ? 'var(--blue)' : 'rgba(255, 255, 255, 0.75)',
                fontWeight: isActive ? 600 : 500,
                padding:'12px 0',
                borderBottom:'1px solid rgba(255, 255, 255, 0.1)'
              })}
            >
              About
            </NavLink>
            <NavLink 
              to="/contact" 
              onClick={()=>setMobileMenuOpen(false)}
              style={({isActive})=>({
                color: isActive ? 'var(--blue)' : 'rgba(255, 255, 255, 0.75)',
                fontWeight: isActive ? 600 : 500,
                padding:'12px 0',
                borderBottom:'1px solid rgba(255, 255, 255, 0.1)'
              })}
            >
              Contact
            </NavLink>
            <Link 
              className="cta-btn" 
              to="/contact"
              onClick={()=>setMobileMenuOpen(false)}
              style={{marginTop:'16px',display:'inline-block'}}
            >
              Get a Consultation
            </Link>
          </nav>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .nav-links-desktop {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
          .mobile-menu {
            display: none !important;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  )
}
