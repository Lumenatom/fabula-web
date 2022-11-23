import React from 'react'
import Logo from '../img/logo.svg';
import './Header.css';

function Header({setActivePage}) {
  return (
    <div className='header'>
      <div className="header_container">
          <img src={Logo}  className='logo' onClick={()=>setActivePage('home')}/>
        <div className='nav'>
            <a className='nav_community'>community</a>
            <a className='nav_docs'>docs</a>
            <a onClick={()=>setActivePage('contact')} className='nav_contact'>contact</a>
        </div>
      </div>
      
    </div>
  )
}

export default Header