import React from 'react'
import Button from '../../common/Button/Button'
import NavBar from '../../common/NavBar/NavBar'
import Title from '../../common/Title/Title'
import './Header.scss'

const Header = (): JSX.Element => {
  return (
     <div className='header_container' id='start'>
      <NavBar />
      <div className='header_content'>
        <div className='header_content_box'>
          <Title title='Elektryczne rozwiązania na miarę Twoich potrzeb'/>
          <h3>Nasza firma oferuje szeroki zakres usług elektrycznych, obejmujący zarówno instalacje, jak i naprawy i konserwację. Zaufaj naszej wiedzy i doświadczeniu, a zyskasz spokojną głowę w kwestii bezpieczeństwa i niezawodności swoich instalacji elektrycznych.</h3>
          <a href="#offer">
            <Button title='Oferta' color='light'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
