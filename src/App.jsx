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
                ...product, quantity : 0
            }));

            setProducts(updateProducts);

        } catch (erro) {
            console.log("error")
        }

    }

    fetchData();
}, [])

const handleCart = (product) => {
  setCart((prevCart) => {
    let existingProduct = prevCart.find((item) => item.id === product.id);

    if (existingProduct) {
      return prevCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      return [...prevCart, { ...product, quantity: 1 }];
    }
  });
};


  const handleIncrement = (productId) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );

  };
  

  const handleDecrement = (productId) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
  


  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/home'element={<Home handleCart={handleCart} products = {products}
           handleIncrement={handleIncrement} handleDecrement={handleDecrement}/>} />
          <Route path='/cart'element={<MyCart cart={cart}/>} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
