import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import BackOffice from './components/BackOffice'
import Portfolio from './components/Portfolio'
import Navbar from './components/Navbar'


function App() {


  return (
    <>
    <div className="App">
      <Navbar />
    </div>

    
    <Switch>
      {/* <Route exact path='/' component={Home} /> */}
      <Route exact path='/portfolio' component={Portfolio} />
      {/* <Route exact path='/' component={Contact} /> */}
    </Switch>

    </>

  )
}

export default App
