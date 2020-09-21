import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import BackOffice from './components/BackOffice'
import Portfolio from './components/Portfolio'


function App() {
  return (
    <div className="App">
      {/* <BackOffice />     
       <Portfolio /> */}

      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
      
    </div>
  );
}

export default App
