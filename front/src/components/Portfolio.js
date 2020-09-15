import React, { useState } from 'react'
import axios from 'axios'

const Portfolio = () => {
  const [state, setState] = useState({
    file: null,
    author: '',
    serie_name: '',
    name: ''
  })


  // const getImage = () => {
  //   axios.get(`http://localhost:8000/portfolio`)
  //   .then((res) => {
  //     setState(res.data)
  //   })
  // }
 
  //   useEffect(() => {
  //   getImage()
  // }, [])

  const handleClick = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', state.file, state.file.name)
    formData.append('author', state.author)
    formData.append('serie_name', state.serie_name)
    formData.append('name', state.name)
    axios.post('http://localhost:8000/portfolio', formData)
  }

  const handleChangeFile = (e) => {
    e.preventDefault()
    const file = e.target.files[0]
    setState({ ...state, file: file })
  }

    return (
        <div>
            <input type='file' onChange={e => handleChangeFile(e)}/>
            <input type='text' placeholder='Write name of your picture' onChange={e => setState({...state, name: e.target.value})} />
            <button disabled={!state.file} onClick={e => handleClick(e)}>Importer</button>
        </div>
    )
}

export default Portfolio