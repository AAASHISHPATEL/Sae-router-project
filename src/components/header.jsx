import React from 'react'
import {Link,NavLink} from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css'

function Header() {
  return (
    
    <>
    
    <header className="p-3 text-bg-dark">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <Link to="" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <h1>Your logo</h1>
        </Link>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><NavLink to='' className={({isActive})=>             
         `nav-link px-2 ${isActive ? "text-secondary":"text-white" }`}>Home</NavLink></li>

          <li><NavLink to="Contact" className={({isActive})=>`nav-link px-2 ${isActive? "text-secondary":"text-white"}`}>Contact</NavLink></li>

          <li><NavLink to="FAQs" className={({isActive}) =>`nav-link px-2 ${isActive ? "text-secondary" :" text-white"}` }>FAQs</NavLink></li>

          <li><NavLink to="Your_card" className={({isActive}) => `nav-link px-2 ${isActive ? "text-secondary": "text-white"}`}>Your Cart</NavLink></li>

          <li><NavLink to="#" className={({isActive})=> `nav-link px-2 ${!isActive? "text-secondary": "text-white"}`}>About</NavLink></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
        </form>

        <div className="text-end">
          <NavLink to="login" className={({isActive})=>` btn btn-outline-light me-2 ${isActive?"bg-white text-black":"bg-red-500"}`}>Login</NavLink>
          
          <Link to="sign-in" type="button" className="btn btn-warning">Sign-up</Link>
        </div>
      </div>
    </div>
  </header>
    
    </>
    
  )
}

export default Header;

