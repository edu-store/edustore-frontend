import React from 'react'
import './App.css'

import Header from './components/header'
import Hero from './components/Hero/hero'
import ResourcesList from './components/RourcesList/resourcesList'

function App() {
  return (
    <div className="App">
        <Header/>
        <Hero/>
        <ResourcesList/>
        <p>App mas buscadas</p>
        <p>Lista de app</p>
    </div>
  );
}

export default App;
