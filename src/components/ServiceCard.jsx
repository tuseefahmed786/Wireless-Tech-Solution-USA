import React from 'react'

export default function ServiceCard({icon, title, children, imageSrc, imageAlt}){
  return (
    <div className="service-card">
      {imageSrc && (
        <div className="service-card__image">
          <img src={imageSrc} alt={imageAlt || ''} loading="lazy" />
        </div>
      )}
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
