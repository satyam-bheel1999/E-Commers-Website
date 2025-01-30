import React from 'react'
import Header from './Components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/home'element={<Home/>} />
        </Routes>


      </Router>


    </div>
  )
}

export default App
