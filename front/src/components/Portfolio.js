import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { serverUrl } from '../config.js'

import Image from './Image'
import './Portfolio.css'

const Portfolio = () => {
  const [image, setImage] = useState([])

  const getImage = () => {
    axios.get(`http://localhost:8000/portfolio`)
    .then((res) => {
      console.log('res', res.data)
      setImage(res.data)
    })
} 

    useEffect(() => {
        getImage()
    }, [])
    
    return (
        <div className='imagesList'>
            {image ? 
                image.map((img, i) =>
                    <div className='card'>
                        <Image key={i} src={`${serverUrl}/${img.picture}`} alt={img.name} />
                    </div>
                ) : <p>loading</p>
            }
        </div>
        )
}

export default Portfolio