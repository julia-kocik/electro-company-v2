import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { AiOutlineCheckSquare } from 'react-icons/ai'
import './Offer.scss'

const offerArray = [
  'Instalacje elektryczne',
  'Inteligentne domy',
  'Systemy alarmowe',
  'Systemy monitoringu',
  'Instalacje fotowoltaiczne'
]

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
          {offerArray.map((item, index) => (
              <li key={index}><AiOutlineCheckSquare className='icon'/><span>{item}</span></li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Offer
