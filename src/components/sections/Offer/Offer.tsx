import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import './Offer.scss'

const Offer = (): JSX.Element => {
  const location = useLocation()
  const offerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (location.hash === '#offer' && offerRef.current !== null) {
      offerRef.current.scrollIntoView()
    }
  }, [location])
  return (
    <div className='offer_container' id='offer' ref={offerRef}>
      <img src="https://images.unsplash.com/photo-1514803400321-3ca29fc47334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80" alt="Smart Home" />
      <div className="offer_content">
        <ul>
          <li>Instalacje elektryczne</li>
          <li>Inteligentne domy</li>
          <li>Systemy alarmowe</li>
          <li>Systemy monitoringu</li>
          <li>Instalacje fotowoltaiczne</li>
        </ul>
      </div>
    </div>
  )
}

export default Offer
