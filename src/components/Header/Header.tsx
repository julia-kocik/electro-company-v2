import React from 'react'
import NavBar from '../NavBar/NavBar'
import './Header.scss'

const Header = (): JSX.Element => {
  return (
     <div id='start' className='header_container'>
        <NavBar/>
    </div>
  )
}

export default Header
