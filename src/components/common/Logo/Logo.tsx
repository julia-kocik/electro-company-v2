import React from 'react'
import './Logo.scss'
import { FaRegLightbulb } from 'react-icons/fa'

const Logo = (): JSX.Element => {
  return (
      <div className='logo_container'>
          <FaRegLightbulb className='logo'/>
    </div>
  )
}

export default Logo
