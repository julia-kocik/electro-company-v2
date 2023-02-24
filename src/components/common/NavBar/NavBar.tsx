import { useEffect, useState } from 'react'
import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'
import './NavBar.scss'

const NavBar = (): JSX.Element => {
  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50)
    })
  }, [])
  return (
    <div className={scroll ? 'navbar_container navbar_scroll' : 'navbar_container'}>
      <Logo />
      <Navigation/>
    </div>
  )
}

export default NavBar
