import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Slider from '../Components/Slider'
import Product from '../Components/Product'
import Footer from '../Components/Footer'

function Home() {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/products')
    .then(response=>response.json())
    .then(data=>setProducts(data))
  }, [])
  return (
    <>
      <Header />
      <Slider />
      <h1 className='text-center mt-10 border-2 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100'>Products List</h1>

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {
          products.map(product=>(
            <Product product={product}/>
          ))
        }
      </div>
      <Footer/>
    </>
  )
}

export default Home