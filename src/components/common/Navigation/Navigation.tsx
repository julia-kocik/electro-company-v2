import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Navigation.scss'

interface NavigationProps {
  showMobMenu: boolean
  setShowMobMenu: any
  burgerRef: any
}

const Navigation: React.FC<NavigationProps> = ({ showMobMenu, setShowMobMenu, burgerRef }): JSX.Element => {
  const ref = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target as Node) && !burgerRef.current.contains(event.target)) {
        setShowMobMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [burgerRef, ref])

  return (
    <div className='navigation_container'>
      <ul ref={ref} className={`${showMobMenu ? 'show' : ''}`}>
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
