import { useEffect, useState } from 'react'
import './NavBar.scss'

const NavBar = (): JSX.Element => {
  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50)
    })
  }, [])
  return (
    <div className={scroll ? 'navbar_container navbar_scroll' : 'navbar_container'}>NavBar</div>
  )
}

export default NavBar
