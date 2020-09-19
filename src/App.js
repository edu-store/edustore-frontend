import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/reducer'
import './App.css'

import Header from './components/header'
import Hero from './components/Hero/hero'
import AllResourcesList from './components/RourcesList/AllResourcesList/allResourcesList'
import ResourcePage from './components/ResourcePage/resource-page'
import Footer from './components/footer'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

const initialState = {
  AppList: []
}


const store = createStore(reducer, initialState)

function App() {
  return (
    <div className="App">
      <Provider
      store = {store}>
          <Router>
              <Header/>
              <Switch>
                <Route path="/recurso/:id" component={ResourcePage}/>
                <Route path="/">
                  <Hero/>
                  <AllResourcesList/>
                </Route>
              </Switch>
              <Footer/>
        </Router>
      </Provider>
    </div>

  );
}

export default App;
