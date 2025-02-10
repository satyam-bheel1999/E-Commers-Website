import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Header from './Components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import MyCart from './Components/myCart'


function App() {

  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);


  useEffect(() => {
    const fetchData = async () => {

        try {
            let productResponse = await axios.get('https://fakestoreapi.com/products');

            let updateProducts = productResponse.data.map(product => ({
                ...product, quantity : 1
            }));

            setProducts(updateProducts);

        } catch (erro) {
            console.log("error")
        }

    }

    fetchData();
}, [])

  

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


  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/home'element={<Home handleCart={handleCart} products = {products}/>} />
          <Route path='/cart'element={<MyCart cart={cart}/>} />
        </Routes>


      </Router>


    </div>
  )
}

export default App
