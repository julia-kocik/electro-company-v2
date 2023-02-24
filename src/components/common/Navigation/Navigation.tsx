import React from 'react'
import './Navigation.scss'

const Navigation = (): JSX.Element => {
  return (
    <div className='navigation_container'>
      <ul>
        <li>
          <a href="#start">Start</a>
        </li>
        <li>
          <a href="#offer">Oferta</a>
        </li>
        <li>
          <a href="#blogsection">Blog</a>
        </li>
        <li>
          <a href="#reviews">Opinie</a>
        </li>
        <li>
          <a href="#contact">Kontakt</a>
        </li>
      </ul>
    </div>
  )
}

export default Navigation
