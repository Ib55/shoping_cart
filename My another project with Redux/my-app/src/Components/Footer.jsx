import React from 'react'
import Icons from '../Assets'

function Footer() {
  return (
      <>
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-20  bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 p-5 rounded'>
        <div>
            
            <img src={Icons.logo} alt="" />
            <h6 className='ml-5'>All rights reserved</h6>
            <div className='flex'>
                <img className='w-8 ml-5' src={Icons.facebook} alt="" />
                <img className='w-8 ml-5' src={Icons.google} alt="" />
                <img className='w-8 ml-5' src={Icons.instagram} alt="" />
                <img className='w-8 ml-5' src={Icons.twitter} alt="" />
            </div>
        </div>
        <div>
           <h6>Terms of privacy</h6>
           <h6>Help</h6>
           <h6>Terms of installment</h6>
           <h6>About us</h6>
        </div>
        <div>
            <h6>Public offer</h6>
            <h6>Eco-friendly</h6>
            <h6>Payment and delivery service</h6>
        </div>
        <div>
            <h5>Call-center</h5>
            <h6>(229)555-0109</h6>
        </div>
    </div>
    </>
  )
}

export default Footer