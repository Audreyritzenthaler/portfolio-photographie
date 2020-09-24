import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import BackOffice from './components/BackOffice'
import Identification from './components/Identification'
import Portfolio from './components/Portfolio'


function App() {
  return (
    <div className="App">
       {/* <Portfolio /> */}

      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/backoffice' component={BackOffice}/>
        <Route path='/identification' component={Identification}/>
      </Switch>
      
    </div>
  );
}

export default App
