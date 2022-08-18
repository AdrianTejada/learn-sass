import React from 'react'
import './Button.css'

export default function Button({text="button"}) {
  return (
    <button className='button'>
        {text}
    </button>
  )
}
