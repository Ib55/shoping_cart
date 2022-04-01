
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import React from 'react'
import Home from '../Pages/Home'
import Cart from '../Pages/Cart'
function Router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default Router