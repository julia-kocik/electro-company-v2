import React from 'react'
import './Offer.scss'

const Offer = (): JSX.Element => {
  return (
    <div className='offer_container' id='offer'>
      <img src="https://cdn.pixabay.com/photo/2019/01/08/10/58/smart-home-3920905_960_720.jpg" alt="Smart Home" />
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
