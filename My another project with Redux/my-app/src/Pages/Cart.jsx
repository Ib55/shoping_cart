import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { Table } from 'react-bootstrap'
import ShopingCart from '../Components/ShopingCart'

function Cart() {
  

  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  return (
    <>
      <Header />
  


      <div className='container mt-5'>

        <Table striped bordered hover>
          <thead className='text-center'>
            <tr>
              
              <th>Product</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody className='text-center'>
           {
             cart.map(item=>(
               <ShopingCart item={item} />
             ))
           }
           
          </tbody>
        </Table>
        <button className='mt-5 bg-cyan-400 p-3 hover:bg-cyan-500 hover:text-white rounded' onClick={() => dispatch({ type: 'CLEAR_ALL' })}>CLEAR ALL</button>
      </div>


      <Footer />
    </>
  )
}

export default Cart