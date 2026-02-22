import React from 'react'

export default function ServiceCard({icon, title, children}){
  return (
    <div className="service-card">
      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <div className="icon">{icon}</div>
        <div>
          <h3>{title}</h3>
          <p>{children}</p>
          <a className="learn-more" href="/services">Learn More →</a>
        </div>
      </div>
    </div>
  )
}
