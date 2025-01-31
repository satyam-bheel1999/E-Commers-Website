import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

  let links = "w-20 h-8 flex flex-row item-center justify-center hover:bg-white"
  return (
    <div className='w-screen h-16 border border-red-400 flex justify-center items-center bg-emerald-600'>
      <nav className='flex flex-row justify-around w-screen text-lg font-semibold text-black'>

        <Link to="/home" className={links} >Home</Link>
        {/* <Link to="/productlist" >ProductList</Link> */}
        {/* <Link to="/productdetails" >ProductDetails</Link> */}
        <Link to="/cart" className={links}><img src='src\Components\Images\cart-plus-solid.svg' className='w-5 h-8' />Cart</Link>
        <Link to="/checkout" className={links} >Checkout</Link>
        <Link to="/auth" className={links} >Auth</Link>
    
      </nav>

    </div>
  )
}

export default Header
