import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.scss'

const Navigation = (): JSX.Element => {
  return (
    <div className='navigation_container'>
      <ul>
        <li>
          <Link to="/#start">Start</Link>
        </li>
        <li>
          <Link to="/#offer">Oferta</Link>
        </li>
        <li>
          <Link to="/#blogsection">Blog</Link>
        </li>
        <li>
          <Link to="/#reviews">Opinie</Link>
        </li>
        <li>
          <Link to="/#contact">Kontakt</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navigation
