import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


import './bootstrap/bootstrap.min.css';
import './bootstrap/bootstrap-rtl.min.css'
import './style.css';

import Navbar from './components/Navbar';
import MainHome from './MainHome'

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar />  
        <Route exact path='/' component={MainHome} />
        
        </Router>
      </div>
    )
  }
}

export default App
