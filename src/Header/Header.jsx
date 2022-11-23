import React from 'react'
import Logo from '../img/logo.svg';
import './Header.css';

function Header({setActivePage, activePage}) {
  return (
    <div className='header'>
      <div className="header_container">
          <img src={Logo}  className='logo' onClick={()=>setActivePage('home')}/>
        <div className='nav'>
            <a onClick={()=>setActivePage('home')} className={activePage == 'home' ? 'active' : '' }>home</a>
            <a className={activePage == 'community' ? 'active' : '' }>community</a>
            <a onClick={()=>setActivePage('docs')} className={activePage == 'docs' ? 'active' : '' }>docs</a>
            <a onClick={()=>setActivePage('contact')} className={activePage == 'contact' ? 'active' : '' }>contact</a>
        </div>
      </div>
      
    </div>
  )
}

export default Header