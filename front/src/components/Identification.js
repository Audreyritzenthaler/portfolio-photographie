import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './Identification.css'

const Identification = () => {
  const [state, setState] = useState({ 
    mail: '',
    pwd: ''
   })

  const connection = () => {
    console.log(state)
  }

  return (
    <div>
      <form onSubmit={connection}>
        <input type='email' placeholder='Enter your email' onChange={e => setState({ ...state, mail: e.target.value })}/>
        <input type='password' placeholder='Enter your password' onChange={e => setState({ ...state, pwd: e.target.value })}/>
        <input type='submit' value='submit'/>
      </form>
    </div>
  )
}

export default Identification