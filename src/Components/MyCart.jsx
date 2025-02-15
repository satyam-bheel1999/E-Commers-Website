import React, { useState } from "react";

function MyCart({ cart }) {

  let [myCart, setMycart] = useState(cart)

  const handleRemove = (id) =>{

    setMycart( (prevmyCart) => 

      prevmyCart.filter((item) => item.id !== id )

    )


  }

  return (
    <div>
      <ul className="grid grid-cols-5 gap-3">
        {myCart.map((product) => (
          <li
            key={product.id}
            className="h-72 w-96 flex flex-col justify-center items-center cursor-pointer
            transition-transform duration-100 ease-in-out hover:translate-y-2"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-32 h-32"
            />
            <div className="flex flex-col justify-center items-center">
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <p>Quantity: {product.quantity}</p>
            </div>

            <button onClick={() => handleRemove(product.id)} className="h-11 w-24 border border-emerald-600 font-semibold hover:bg-emerald-600 cursor-pointer">Remove</button>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyCart;
