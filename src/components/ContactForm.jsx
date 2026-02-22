import React from 'react'

export default function ContactForm(){
  return (
    <form style={{display:'grid',gap:16,maxWidth:700}} onSubmit={(e)=>{e.preventDefault();alert('Form submission placeholder')}}>
      <div style={{display:'grid',gap:16}}>
        <input placeholder="Full Name" required style={{padding:'14px 16px'}} />
        <input placeholder="Company Name" />
        <input placeholder="Email" type="email" required />
        <input placeholder="Phone Number" />
        <select style={{padding:'14px 16px'}}>
          <option>Service Needed</option>
          <option>Wireless Network Installation</option>
          <option>Structured Cabling</option>
          <option>IT Support & Maintenance</option>
          <option>Security & Surveillance Systems</option>
          <option>Cloud & Data Solutions</option>
        </select>
        <textarea placeholder="Message" rows={5} style={{padding:'14px 16px'}}></textarea>
      </div>
      <button className="btn btn-primary" type="submit" style={{marginTop:'8px'}}>Send Message</button>
    </form>
  )
}
