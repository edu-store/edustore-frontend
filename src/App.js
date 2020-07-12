import React from 'react'
import './App.css'

import Header from './components/header'
import Hero from './components/Hero/hero'
import ResourcesList from './components/RourcesList/resourcesList'
import AllResourcesList from './components/RourcesList/AllResourcesList/allResourcesList'
import ResourcePage from './components/ResourcePage/resource-page'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
          <Header/>
          <Switch>
            <Route path="/recurso">
              <ResourcePage/>
            </Route>
            <Route path="/">
              <Hero/>
              <ResourcesList/>
              <AllResourcesList/>
            </Route>
          </Switch>
    </Router>
      </div>

  );
}

export default App;
