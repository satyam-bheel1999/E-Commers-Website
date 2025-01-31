import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Home() {

    const [search, setSearch] = useState('')

    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    const handleCart = (productId) =>{

        

    }


    useEffect( () =>{
        const fetchData = async() =>{

            try{
                let productResponse = await axios.get('https://fakestoreapi.com/products');
                setProducts(productResponse.data);

                console.log(products);

            } catch(erro){
                    console.log("error")
            }

        }

        fetchData();
    }, [])



  return (
    <div>

        <h1>Products</h1>

        {/*Search bar*/}
        <div>
        <input type='text' value={search} onChange={() => setSearch(e.target.value)} placeholder='search product'></input>

        </div>
        <ul className='grid grid-cols-5 gap-3'>
            {
                products.map( product => (
    
                    <li key={product.id} className='h-72 w-96 flex flex-col justify-center items-center
                    transition-transform duration-100 ease-in-out hover:translate-y-2'>
                        <img src={product.image} alt={product.title} className='w-32 h-32' />
                        <div className='flex flex-col justify-center items-center'>

                            <h3>{product.title}</h3>
                            <p>${product.price}</p>


                        </div>
                        <button className='h-11 w-24 border border-emerald-600 font-semibold hover:bg-emerald-600 ' onClick={handleCart(product.id)}>Add to Cart</button>
                            
                    </li>
                ))
            }
        </ul>
        <div>

        </div>

        
      
    </div>
  )
}

export default Home
