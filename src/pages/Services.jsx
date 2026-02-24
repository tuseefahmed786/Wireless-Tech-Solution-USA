import React from 'react'

function Section({title,icon,children,bullets,imageSrc,imageAlt}){
  return (
    <section style={{marginBottom:60}}>
      <div style={{display:'flex',alignItems:'center',gap:16,marginBottom:28}}>
        <div style={{width:56,height:56,borderRadius:'12px',background:'linear-gradient(135deg, var(--blue) 0%, var(--blue-light) 100%)',display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontSize:'1.6rem',boxShadow:'0 4px 12px rgba(0, 102, 255, 0.2)'}}>
          {icon}
        </div>
        <h2 style={{margin:0}}>{title}</h2>
      </div>
      <div className="service-section">
        <div className="service-section__body">
          {children}
          {bullets && (
            <ul style={{listStyle:'none',padding:0,margin:'24px 0'}}>
              {bullets.map((b,i)=>(
                <li key={i} style={{padding:'12px 0',paddingLeft:'28px',position:'relative',color:'var(--gray-700)'}}>
                  <span style={{position:'absolute',left:0,color:'var(--blue)',fontWeight:'bold'}}>✓</span>
                  {b}
                </li>
              ))}
            </ul>
          )}
          <a className="btn btn-primary" href="/contact" style={{marginTop:'24px'}}>Request Service</a>
        </div>
        {imageSrc && (
          <div className="service-section__media">
            <img src={imageSrc} alt={imageAlt || ''} loading="lazy" />
          </div>
        )}
      </div>
    </section>
  )
}

export default function Services(){
  return (
    <div className="container" style={{padding:'20px 0'}}>
      <h1 style={{fontSize:'2.5rem',marginBottom:'12px'}}>Our Services</h1>
      <p style={{fontSize:'1.1rem',color:'var(--gray-700)',marginBottom:'60px',maxWidth:'700px'}}>We provide comprehensive wireless and IT infrastructure solutions tailored to your business needs, from initial design through implementation and ongoing support.</p>
      <div className="services-hero-media">
        <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1600&q=80" alt="Network and IT infrastructure service map" loading="lazy" />
      </div>

      <Section
        icon="📡"
        title="Wireless Network Installation"
        bullets={['Secure enterprise Wi-Fi design','Site surveys & capacity planning','Controller and AP configuration','Coverage optimization','Performance monitoring']}
        imageSrc="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Enterprise wireless network hardware"
      >
        <p style={{fontSize:'1.05rem',color:'var(--gray-700)',lineHeight:'1.8'}}>
          Design and deployment of secure, high-performance Wi-Fi networks for offices, retail locations, and warehouses. We conduct thorough site surveys and ensure optimal coverage and performance across your entire environment.
        </p>
        <p style={{fontSize:'1.05rem',color:'var(--gray-700)',lineHeight:'1.8'}}>
          Our wireless specialists configure enterprise-grade access points and controllers to meet your specific needs and future growth requirements.
        </p>
      </Section>

      <Section
        icon="🔌"
        title="Structured Cabling"
        bullets={['Cat6 & Cat6A installation','Fiber optic termination','Low-voltage cabling','Code-compliant installations','Professional documentation']}
        imageSrc="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Structured cabling and server rack infrastructure"
      >
        <p style={{fontSize:'1.05rem',color:'var(--gray-700)',lineHeight:'1.8'}}>
          Professional Cat6, Cat6A, fiber optic, and low-voltage cabling services installed to industry standards for long-term reliability and performance.
        </p>
        <p style={{fontSize:'1.05rem',color:'var(--gray-700)',lineHeight:'1.8'}}>
          Every project includes complete documentation and testing to ensure your infrastructure meets current and future bandwidth requirements.
        </p>
      </Section>

      <Section
        icon="🛠️"
        title="IT Support & Maintenance"
        bullets={['24/7 monitoring options','Rapid troubleshooting & response','Proactive patch management','System optimization','Preventive maintenance plans']}
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
        imageAlt="IT support team collaborating"
      >
        <p style={{fontSize:'1.05rem',color:'var(--gray-700)',lineHeight:'1.8'}}>
          Ongoing monitoring, troubleshooting, and system optimization to keep your infrastructure running smoothly and efficiently.
        </p>
        <p style={{fontSize:'1.05rem',color:'var(--gray-700)',lineHeight:'1.8'}}>
          We offer flexible support plans ranging from standard business hours to 24/7 monitoring with rapid response times.
        </p>
      </Section>

      <Section
        icon="📹"
        title="Security & Surveillance Systems"
        bullets={['CCTV design & installation','Remote monitoring','Video storage solutions','Access control integration','Professional monitoring services']}
        imageSrc="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Security camera monitoring"
      >
        <p style={{fontSize:'1.05rem',color:'var(--gray-700)',lineHeight:'1.8'}}>
          CCTV installation and monitoring solutions that integrate with broader security systems to protect your assets, employees, and customers.
        </p>
        <p style={{fontSize:'1.05rem',color:'var(--gray-700)',lineHeight:'1.8'}}>
          From design through deployment, we ensure comprehensive coverage and reliable recording capabilities tailored to your specific requirements.
        </p>
      </Section>

      <Section
        icon="☁️"
        title="Cloud & Data Solutions"
        bullets={['Backups & disaster recovery','Secure cloud migration','Encrypted storage solutions','Data management','Business continuity planning']}
        imageSrc="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Cloud data visualization"
      >
        <p style={{fontSize:'1.05rem',color:'var(--gray-700)',lineHeight:'1.8'}}>
          Data backup, cloud integration, and secure storage solutions designed for business continuity, scalability, and peace of mind.
        </p>
        <p style={{fontSize:'1.05rem',color:'var(--gray-700)',lineHeight:'1.8'}}>
          We help you safely migrate to cloud platforms, implement backup strategies, and maintain control of your critical business data.
        </p>
      </Section>
      
        <Section
          icon="💻"
          imageSrc="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80"
          imageAlt="Web development code on screen"
          title="Web Development"
          bullets={["Custom web applications","Responsive & accessible sites","API integrations","E-commerce solutions","Maintenance & support"]}
        >
          <p style={{fontSize:'1.05rem',color:'var(--gray-700)',lineHeight:'1.8'}}>
            Full-stack web development services building robust, scalable applications tailored to your business goals. We focus on performance, security, and maintainability.
          </p>
          <p style={{fontSize:'1.05rem',color:'var(--gray-700)',lineHeight:'1.8'}}>
            Our team delivers end-to-end solutions including frontend interfaces, backend APIs, database design, and deployment workflows.
          </p>
        </Section>

        <Section
          icon="🎨"
          imageSrc="https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80"
          imageAlt="Designer working on UI/UX"
          title="Web Design"
          bullets={["UI/UX design","Brand & visual identity","Prototyping & testing","Conversion optimization","Design systems"]}
        >
          <p style={{fontSize:'1.05rem',color:'var(--gray-700)',lineHeight:'1.8'}}>
            Professional web design focused on user experience, brand consistency, and conversion. We craft interfaces that look great and convert visitors into customers.
          </p>
          <p style={{fontSize:'1.05rem',color:'var(--gray-700)',lineHeight:'1.8'}}>
            From wireframes to high-fidelity prototypes, we iterate with user feedback to ensure your site meets business objectives and delight users.
          </p>
        </Section>
    </div>
  )
}
