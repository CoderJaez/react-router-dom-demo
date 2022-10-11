import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import RootLayout from './shared/components/layouts/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Product from './pages/Product'
import AddProduct from './pages/AddProduct'
import NotFoundPage from './pages/NotFound'
const App = () => {

  return (
      <Routes>
        <Route element={<RootLayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path="/products/:id" element={<Product/>}/>
          <Route path="/products/add" element={<AddProduct/>}/>
          <Route path='/about' element={<About/>}/>
        </Route>
        <Route path='*' element={<NotFoundPage/>}/>
        
      </Routes>
  )
}

export default App
