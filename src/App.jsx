import React, { useState } from 'react'
import Header from './Components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import MyCart from './Components/myCart'


function App() {

  const [cart, setCart] = useState([]);
  const [productQuantity, setProductQuantity] = useState({});

  const handleCart = (product) =>{

    setCart( (prevCart) =>{

      let existingProduct = prevCart.find((item) => item.id == product.id);

      if (existingProduct) {
        // If product exists, update its quantity
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      } else {
        // If product is new, add it with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

    
    // setCart([...cart, product]); // Add product to cart

  }

  const handleIncreament = (quantity) =>{

    setProductQuantity( (prev) => (
        {...prev,
            [id] : (prev[id] || 0) + 1,
        }
    ))

}

const handleDecreament = (id) =>{

    setProductQuantity( (prev) =>(
        {
            ...prev,
            [id] : prev[id] > 0 ? prev[id] - 1 : 0,
        }
    ))
}
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/home'element={<Home handleCart={handleCart} handleIncreament={handleIncreament}
           handleDecreament={handleDecreament} productQuantity={productQuantity}/>} />
          <Route path='/cart'element={<MyCart cart={cart} productQuantity={productQuantity}/>} />
        </Routes>


      </Router>


    </div>
  )
}

export default App
