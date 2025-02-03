import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Home({handleCart}) {

    const [search, setSearch] = useState('')

    const [products, setProducts] = useState([]);

    const [filteredProducts, setFilteredProducts] = useState([]);

    // const handleCart = (productId) => {

    //     let findProduct = products.find(product => {product.id === productId});

    //     if(findProduct){
    //         setCart((prevCart) => [...prevCart, findProduct] );
    //     }


    // }


    useEffect(() => {
        const fetchData = async () => {

            try {
                let productResponse = await axios.get('https://fakestoreapi.com/products');
                setProducts(productResponse.data);

                console.log(products);

            } catch (erro) {
                console.log("error")
            }

        }

        fetchData();
    }, [])


    const searchedProduct = () => {
        const filtered = products.filter((product) =>
            product.title.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredProducts(filtered);
    };



    return (
        <div>

            {/* <MyCart cart = {cart}/> */}

            <h1>Products</h1>


            {/*Search bar*/}
            <div className='w-screen h-20 flex justify-center items-center' >
                <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search Product' className=' border-b-2 p-2 mr-5 focus:outline-none'></input>

                <button onClick={searchedProduct} className='border flex flex-row p-2 cursor-pointer rounded-2xl hover:bg-emerald-600'>Search <img className='h-6 ml-3' src='src\Components\Images\magnifying-glass-solid.svg' /></button>

                <button className='border flex flex-row p-2 cursor-pointer absolute right-3'>Filter <img className='h-6 ml-3' src='src\Components\Images\filter-solid.svg' /> </button>

            </div>

            {/*display the products and searched product on screen */}
            <div>
                <ul className='grid grid-cols-5 gap-3'>

                    {
                        filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <li key={product.id} className='h-72 w-96 flex flex-col justify-center items-center cursor-pointer
                    transition-transform duration-100 ease-in-out hover:translate-y-2'>
                                    <img src={product.image} alt={product.title} className='w-32 h-32' />
                                    <div className='flex flex-col justify-center items-center'>

                                        <h3>{product.title}</h3>
                                        <p>${product.price}</p>


                                    </div>
                                    <button className='h-11 w-24 border border-emerald-600 font-semibold
                                     hover:bg-emerald-600 cursor-pointer' onClick={handleCart(product)}>Add to Cart</button>

                                </li>
                            ))
                        ) : (

                            products.map(product => (

                                <li key={product.id} className='h-72 w-96 flex flex-col justify-center items-center cursor-pointer
                            transition-transform duration-100 ease-in-out hover:translate-y-2'>
                                    <img src={product.image} alt={product.title} className='w-32 h-32' />
                                    <div className='flex flex-col justify-center items-center'>

                                        <h3>{product.title}</h3>
                                        <p>${product.price}</p>


                                    </div>
                                    <button className='h-11 w-24 border border-emerald-600 font-semibold
                                     hover:bg-emerald-600 cursor-pointer' onClick={handleCart(product)}>Add to Cart</button>

                                </li>
                            ))

                        )
                    }




                </ul>

            </div>

            <div>

            </div>

            



        </div>
    )
}

export default Home
