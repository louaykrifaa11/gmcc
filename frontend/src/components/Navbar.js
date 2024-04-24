import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to="/profile">profile</Link>
        <Link to="/login">login</Link>
        <Link to="/register">register</Link>
        <button>logout</button>
        
    </div>
  )
}

export default Navbar