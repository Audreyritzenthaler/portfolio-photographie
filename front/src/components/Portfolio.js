import React, { useState, useEffect } from 'react'
import { serverUrl } from '../config.js'
import axios from 'axios'

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
        <div>
            {image ? 
                image.map((img, i) => 
                    <img key={i} src={`${serverUrl}/${img.picture}`} alt={img.name}></img>
                ) : <p>loading</p>
            }
        </div>
        )
}

export default Portfolio