import React, { useEffect, useState } from 'react'
import Title from '../../common/Title/Title'
import './Reviews.scss'
import { BsCircle } from 'react-icons/bs'

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
    }, 5000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const onDotClickHandler = (dot: number): void => {
    setActive(dot)
  }
  return (
        <div className='reviews_container' id='reviews'>
            <Title title='Opinie klientów'/>
            <div className='reviews_container_inner'>
              {arr.map((item, index) => (
                <div key={index} className={`reviews_content ${active === index ? 'reviews_content_active' : ''}`}>
                  {item}
                </div>
              ))}
      </div>
      <div className='reviews_dots_container'>
      {Array(arr.length).fill(<BsCircle className='reviews_icon'/>).map((item, index) => (
        <span onClick={() => onDotClickHandler(index)} key={index}>{item}</span>
      ))}
      </div>
        </div >
  )
}

export default Reviews
