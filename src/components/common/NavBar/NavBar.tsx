import { useEffect, useRef, useState } from 'react'
import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'
import './NavBar.scss'
import { AiOutlineMenu } from 'react-icons/ai'

const NavBar = (): JSX.Element => {
  const [scroll, setScroll] = useState(false)
  const [showMobMenu, setShowMobMenu] = useState(false)
  const burgerRef = useRef(null)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50)
    })
  }, [])

  const toggleMobMenuHandler = (): void => {
    setShowMobMenu(() => !showMobMenu)
  }

  return (
    <div className={scroll ? 'navbar_container navbar_scroll' : 'navbar_container'}>
      <Logo />
      <Navigation showMobMenu={showMobMenu} setShowMobMenu={setShowMobMenu} burgerRef={burgerRef} />
      <div onClick={toggleMobMenuHandler} ref={burgerRef} className='burger_mobile'><AiOutlineMenu className='burger_icon'/></div>
    </div>
  )
}

export default NavBar
