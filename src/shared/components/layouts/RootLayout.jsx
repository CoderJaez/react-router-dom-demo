import React from 'react'
import Header from '../Partials/Header'
import Footer from '../Partials/Footer'
import {Link,Outlet} from 'react-router-dom'
const RootLayout = ({children}) => {
  return (
    <div>
      {/* links */}
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/about">About</Link>
      <Header/>
        <Outlet/>
      <Footer/>
    </div>
  )
}

export default RootLayout