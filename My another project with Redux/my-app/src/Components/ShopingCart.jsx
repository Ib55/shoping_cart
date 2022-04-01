import React, { useState } from 'react'
import Icons from '../Assets'
import { useDispatch } from 'react-redux'

function ShopingCart({ item }) {
    const dispatch = useDispatch()
    const[quantity,setQuantity]=useState(item.quantity)
   
    return (
        <>
        <tr>
            <td><img src={item.image} alt="" className='w-16 h-16 rounded' /></td>
            <td>{item.category}</td>
            <td>{item.newPrice}</td>
            <td><button onClick={()=>setQuantity(quantity+1)} className='bg-indigo-500 w-5 m-2 text-white rounded hover:bg-indigo-700'>+</button><input type="number" className='w-10' value={quantity} onChange={(e)=>setQuantity(e.target.value)} /><button onClick={()=>setQuantity(quantity-1)} className='bg-indigo-500 w-5 m-2 text-white rounded hover:bg-indigo-700'>-</button></td>
            <td>{item.newPrice*quantity}</td>
            <td><img src={Icons.Cross} alt="" className='w-10 h-10 flex self-center' onClick={()=>dispatch({type:'REMOVE_ITEM',payload:{id:item.id}})} /></td>
            
        </tr>
        
        </>
    )
}

export default ShopingCart
