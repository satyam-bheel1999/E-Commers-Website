import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <nav>

        <Link to="/" >Home</Link>
        <Link to="/productlist" >ProductList</Link>
        <Link to="/productdetails" >ProductDetails</Link>
        <Link to="/cart" >Cart</Link>
        <Link to="/checkout" >Checkout</Link>
        <Link to="/auth" >Auth</Link>
    
      </nav>
    </div>
  )
}

export default Header
