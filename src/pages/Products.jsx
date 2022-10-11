import React from 'react'
import Product from './Product'
import { Link } from 'react-router-dom'
function Products() {
  return (
    <div style={{display:'flex',flexDirection:'column'}}>
      <Link to="/products/add">Add new</Link>
      <Link to="/products/1">Product 1</Link>
      <Link to="/products/2">Product 2</Link>
      <Link to="/products/3">Product 3</Link>
      <Link to="/products/4">Product 4</Link>
      <Link to="/products/5">Product 5</Link>
    </div>
  )
}

export default Products