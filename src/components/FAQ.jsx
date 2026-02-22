import React, { useState, useRef } from 'react'

export default function FAQ({ initialItems = [] }){
  const [items, setItems] = useState(initialItems)
  const [openIndex, setOpenIndex] = useState(null)
  const dragItem = useRef(null)
  const dragOverItem = useRef(null)

  function handleDragStart(e, index){
    dragItem.current = index
    e.dataTransfer.effectAllowed = 'move'
  }

  function handleDragEnter(e, index){
    dragOverItem.current = index
  }

  function handleDrop(e){
    e.preventDefault()
    const list = Array.from(items)
    const draggedIndex = dragItem.current
    const hoverIndex = dragOverItem.current
    if (draggedIndex == null || hoverIndex == null) return
    const [moved] = list.splice(draggedIndex, 1)
    list.splice(hoverIndex, 0, moved)
    dragItem.current = null
    dragOverItem.current = null
    setItems(list)
  }

  function toggle(i){
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="faq container" style={{padding:'48px 0'}}>
      <div style={{maxWidth:1100,margin:'0 auto'}}>
        <h2>What We Do</h2>
        <p style={{color:'var(--gray-700)',marginTop:6}}>Transform your brand with distinctive style and identity through Wireless Tech Solution — your trusted digital solutions partner.</p>

        <div style={{display:'grid',gap:12,marginTop:20}}>
          {items.map((it, idx) => (
            <div
              key={idx}
              draggable
              onDragStart={(e)=>handleDragStart(e, idx)}
              onDragEnter={(e)=>handleDragEnter(e, idx)}
              onDragOver={(e)=>e.preventDefault()}
              onDrop={handleDrop}
              style={{
                border: '1px solid rgba(15,23,42,0.06)',
                padding:16,
                borderRadius:8,
                background:'var(--card-bg, #fff)',
                cursor:'grab'
              }}
            >
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <h4 style={{margin:0}}>{it.q}</h4>
                <button
                  onClick={()=>toggle(idx)}
                  aria-expanded={openIndex === idx}
                  style={{border:0,background:'none',fontSize:20,lineHeight:1,cursor:'pointer'}}
                >
                  {openIndex === idx ? '−' : '+'}
                </button>
              </div>

              {openIndex === idx && (
                <p style={{marginTop:12,color:'var(--gray-600)'}}>{it.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
