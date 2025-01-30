import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ProductList() {

    const [search, setSearch] = useState('')

    const [products, setProducts] = useState([]);

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
        <ul className='grid grid-cols-5 gap-1'>
            {
                products.map( product => (
    
                    <li key={product.id}>
                        <img src={product.image} alt={product.title} className='w-52 h-52' />
                        <div>

                            <h3>{product.title}</h3>
                            <p>${product.price}</p>


                        </div>
                            
                    </li>
                ))
            }
        </ul>
        <div>

        </div>

        
      
    </div>
  )
}

export default ProductList
