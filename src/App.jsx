import React from 'react'
import ProductList from './Components/ProductList'
import Header from './Components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<ProductList />} />


        </Routes>


      </Router>

      <ProductList />
    </div>
  )
}

export default App
