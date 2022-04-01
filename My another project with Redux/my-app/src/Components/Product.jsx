import React from 'react'
import {useDispatch} from 'react-redux'

function Product({product}) {
const dispatch= useDispatch()
  return (
    
    <>
    
    <div className='container mt-20 border-2  border-emerald-900 rounded'>
      
        <img src={product.image} alt="" className='api-img' />
        
        <h5>{product.category}</h5>
       <div className='flex justify-between'>
           <h5>{product.oldPrice}</h5>
           <h5 className='disabled:opacity-75 bg-slate-400'>{product.newPrice}</h5>
       </div>
       <button className='bg-yellow-400 p-1 mb-2 shadow rounded hover:bg-yellow-500' onClick={()=>dispatch({type:'ADD_TO_CART',payload:product})}><h6>Add To Cart</h6></button>
    </div>
   
    </>
  )
}

export default Product