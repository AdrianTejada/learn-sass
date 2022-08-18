import React from 'react'
import './Card.css'

export default function Card({header="header", text="text"}) {
  return (
    <div className='card'>
        <h2>
            {header}
        </h2>
        <p>
            {text}
        </p>
    </div>
  )
}
