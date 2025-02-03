import React, { useState } from 'react'
import Header from './Components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import MyCart from './Components/myCart'


function App() {

  const [cart, setCart] = useState([]);

  const handleCart = (product) =>{

    setCart([...cart, product]); // Add product to cart



  }
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/home'element={<Home handleCart={handleCart}/>} />
          <Route path='/cart'element={<MyCart cart={cart}/>} />
        </Routes>


      </Router>


    </div>
  )
}

export default App
