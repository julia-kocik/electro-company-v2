import React, { useEffect, useState } from 'react'
import Title from '../../common/Title/Title'
import './Reviews.scss'

const arr = ['super', 'extra', 'wow', 'awesome']

const Reviews = (): JSX.Element => {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActive(active => {
        if (active === arr.length - 1) {
          return 0
        }
        return active + 1
      })
    }, 3000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])
  return (
        <div className="reviews_container" id='reviews'>
            <Title title='Opinie klientów'/>
            <div className='reviews_container_inner'>
              {arr.map((item, index) => (
                <div key={index} className={`reviews_content ${active === index ? 'reviews_content_active' : ''}`}>
                  { item}
                </div>
              ))}
            </div>
        </div >
  )
}

export default Reviews
