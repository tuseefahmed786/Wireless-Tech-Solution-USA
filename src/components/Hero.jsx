import React from 'react'

export default function Hero(){
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden></div>
      <div className="hero-shape" aria-hidden></div>
      <div className="container">
        <div className="hero-copy">
          <h1 style={{margin: 0}}>Revolutionize your home entertainment with next-generation Premium IPTV streaming built for modern viewers.</h1>
          <p>Gain instant access to over 1,500+ HD & SD live channels streaming from the USA, Europe, UAE, and countries worldwide. From sports and movies to international news and premium entertainment, everything you love is available at your fingertips.</p>
          <div className="buttons">
            <a className="btn btn-primary" href="/contact">Get a Free Consultation</a>
            <a className="btn btn-ghost" href="/contact">Contact Us Today</a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden>
          <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80" alt="" />
        </div>
      </div>
    </section>
  )
}
