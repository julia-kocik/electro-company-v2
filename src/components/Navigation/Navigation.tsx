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
          <a href="#uslugi">Oferta</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#opinie">Opinie</a>
        </li>
        <li>
          <a href="#kontakt">Kontakt</a>
        </li>
      </ul>
    </div>
  )
}

export default Navigation
