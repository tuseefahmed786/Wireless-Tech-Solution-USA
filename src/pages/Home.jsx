import React from 'react'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import FeatureBlock from '../components/FeatureBlock'

export default function Home(){
  return (
    <div>
      <Hero />

      <section className="iptv-showcase container" style={{padding:'80px 40px', marginTop:80}}>
        <div className="iptv-showcase-inner">
          <div className="iptv-content">
            <h2 style={{marginBottom:20,fontSize:'2.4rem'}}>Premium IPTV Services</h2>
            <p style={{marginTop:0,color:'var(--gray-600)',fontSize:'1.1rem',lineHeight:1.7,marginBottom:24,maxWidth:800}}>Transform the way you experience television with our cutting-edge Premium IPTV services. Step into a new era of digital entertainment designed for speed, clarity, and reliability.</p>
            <p style={{color:'var(--gray-600)',fontSize:'1.1rem',lineHeight:1.7,marginBottom:0,maxWidth:800}}>Gain instant access to over 1,500+ HD & SD live channels streaming from the USA, Europe, UAE, and countries worldwide. From sports and movies to international news and premium entertainment, everything you love is available at your fingertips.</p>
          </div>
          <div className="iptv-media">
            <img src="https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1400&q=80" alt="Premium IPTV streaming interface" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="services container" style={{padding:'72px 0'}}>
        <div>
          <h2 style={{marginBottom:8}}>Our Services</h2>
          <p style={{marginTop:0,color:'var(--gray-700)',maxWidth:760}}>We provide end-to-end wireless, IT infrastructure, and web services tailored to your business needs — from planning and cabling to cloud, security, and full-stack web solutions.</p>

          <div className="services-grid">
            <ServiceCard
              icon={"📡"}
              title="Wireless Network Installation"
              imageSrc="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80"
              imageAlt="Wireless network equipment"
            >
              Design and deploy secure Wi‑Fi for offices, retail and warehouses with coverage and performance guarantees.
            </ServiceCard>
            <ServiceCard
              icon={"🔌"}
              title="Structured Cabling"
              imageSrc="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=80"
              imageAlt="Structured cabling and server racks"
            >
              Cat6, Cat6A and fiber optic cabling, professional termination and testing for long-term reliability.
            </ServiceCard>
            <ServiceCard
              icon={"🛠️"}
              title="IT Support & Maintenance"
              imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80"
              imageAlt="IT support team in meeting"
            >
              Proactive monitoring, patching, and rapid troubleshooting to keep systems online and secure.
            </ServiceCard>
            <ServiceCard
              icon={"📹"}
              title="Security & Surveillance"
              imageSrc="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=80"
              imageAlt="Security camera monitoring"
            >
              CCTV, access control and integrated monitoring tailored to your site and compliance needs.
            </ServiceCard>
            <ServiceCard
              icon={"☁️"}
              title="Cloud & Data Solutions"
              imageSrc="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80"
              imageAlt="Cloud data visualization"
            >
              Backups, disaster recovery and secure cloud migrations to protect your critical data.
            </ServiceCard>
            <ServiceCard
              icon={"💻"}
              title="Web Development"
              imageSrc="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80"
              imageAlt="Web development code"
            >
              Custom web apps, e-commerce, and API integrations that scale with your business.
            </ServiceCard>
            <ServiceCard
              icon={"🎨"}
              title="Web Design"
              imageSrc="https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=900&q=80"
              imageAlt="Designer working on interface"
            >
              Conversion-focused UI/UX, branding and responsive design that strengthens your online presence.
            </ServiceCard>
          </div>
        </div>
      </section>



      <section className="features container">
        <h2>Why Choose Us</h2>
        <div className="feature-grid">
          <FeatureBlock title="Certified Technicians">Our team is certified and continually trained on latest systems.</FeatureBlock>
          <FeatureBlock title="Fast Response Time">Rapid support and maintenance to minimize downtime.</FeatureBlock>
          <FeatureBlock title="Affordable Pricing">Transparent and competitive pricing for projects of any size.</FeatureBlock>
          <FeatureBlock title="Scalable Solutions">Designs that grow with your business and future needs.</FeatureBlock>
        </div>
      </section>

      <section className="about-preview container about-preview">
        <div style={{flex:1}}>
          <h2>About Wireless Tech Solution USA</h2>
          <p>Wireless Tech Solution USA LLC delivers professional wireless and IT infrastructure services focused on reliability, security, and customer satisfaction. Serving New Jersey and surrounding areas with tailored solutions.</p>
          <a className="btn btn-primary" href="/about">Learn More</a>
        </div>
        <div className="about-preview-media">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80" alt="Professional team collaboration" loading="lazy" />
        </div>
      </section>


    </div>
  )
}
