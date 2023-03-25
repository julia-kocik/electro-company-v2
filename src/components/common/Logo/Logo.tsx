import React from 'react'
import './Logo.scss'
import { FaRegLightbulb } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Logo = (): JSX.Element => {
  return (
    <div className='logo_container'>
      <Link to='/#start'>
        <FaRegLightbulb className='logo'/>
      </Link>
    </div>
  )
}

export default Logo
