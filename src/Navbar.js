import React from 'react'
import {Link} from'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-dark bg-dark navbar-expand-lg ">
    <li class="navbar-brand"to='/index'>Router-Dom</li>
    <div className='ml-auto'>
      <ul class="navbar-nav ">
        <li class="nav-item">
          <Link class="nav-link "to='/home'>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link "to='/about'>About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link "to='/services'>Services</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link "to='/contact'>Contact</Link>
        </li>
       
      </ul>
      </div>
</nav>
     </div>
  )
}

export default Navbar