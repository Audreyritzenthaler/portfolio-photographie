import React from 'react'
import './Image.css'

const Image = ({ src, alt }) => {
 
  return (
    <img className='imgPortfolio' src={src} alt={alt}/>
  )
}

export default Image