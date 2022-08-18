import React from 'react'

export default function index({header="header", text="text"}) {
  return (
    <div>
        <h2>
            {header}
        </h2>
        <p>
            {text}
        </p>
    </div>
  )
}
