import React from 'react'

import Navbar from './navbar'

export default props => (
  <header className='main-header'>
    <a href='/#/' className='logo'>
      <span className='logo-mini'><b>F</b>T</span>
      <span className='logo-lg'>
        <i className='fa fa-twitter'></i>
        <b> Feelings</b> Tweets
  </span>
    </a>
    <nav className='navbar navbar-static-top'>
      <a href className='sidebar-toggle' data-toggle='offcanvas'></a>
      <Navbar />
    </nav>

  </header>
)
