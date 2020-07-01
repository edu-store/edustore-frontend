import React from 'react'
import './App.css'

import Header from './components/header'
import Hero from './components/Hero/hero'
import ResourcesList from './components/RourcesList/resourcesList'
import AllResourcesList from './components/RourcesList/AllResourcesList/allResourcesList'

function App() {
  return (
    <div className="App">
        <Header/>
        <Hero/>
        <ResourcesList/>
        <AllResourcesList/>
    </div>
  );
}

export default App;
