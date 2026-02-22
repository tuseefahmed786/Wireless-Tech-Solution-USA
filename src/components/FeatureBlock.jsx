import React from 'react'

export default function FeatureBlock({title, children}){
  return (
    <div className="feature">
      <h4>{title}</h4>
      <p>{children}</p>
    </div>
  )
}
