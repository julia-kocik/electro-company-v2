import React, { useEffect, useRef, useState } from 'react'
import Title from '../../common/Title/Title'
import './Reviews.scss'
import { BsCircle } from 'react-icons/bs'
import Subtitle from '../../common/Subtitle/Subtitle'
import { useLocation } from 'react-router-dom'

const arr = [
  'Firma wykonała u mnie instalację elektryczną i jestem bardzo zadowolony z ich pracy. Elektrycy byli bardzo profesjonalni i dokładni, a praca została wykonana zgodnie z moimi oczekiwaniami.',
  'Zdecydowanie polecam tę firmę do montażu wideodomofonu. Elektrycy przyjechali na czas i bardzo szybko zainstalowali urządzenie. Pokazali mi, jak działa i jak go obsługiwać.',
  'Firma zainstalowała u mnie płytę AGD. Elektrycy byli bardzo kompetentni i wiedzieli, co robią. Praca została wykonana szybko i sprawnie, a wszystko działa bez problemów.'
]

const Reviews = (): JSX.Element => {
  const [current, setCurrent] = useState(0)
  const location = useLocation()
  const reviewsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (location.hash === '#reviews' && reviewsRef.current !== null) {
      reviewsRef.current.scrollIntoView()
    }
  }, [location])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrent(current => {
        if (current === arr.length - 1) {
          return 0
        }
        return current + 1
      })
    }, 5000)
    return () => {
      clearInterval(intervalId)
    }
  }, [current])

  const onDotClickHandler = (dot: number): void => {
    setCurrent(dot)
  }

  return (
    <div className='reviews_container' ref={reviewsRef} id='reviews'>
            <Title title='Opinie klientów'/>
      <div className='reviews_container_inner'>
        <div className="reviews_content_container">
          {arr.map((item, index) => {
            let position = 'prev'
            if (current === index) {
              position = 'active'
            }
            if (current === index + 1 || (current === 0 && index === arr.length - 1)) {
              position = 'next'
            }
            return (<div key={index} className={`reviews_content ${position}`}>
              <Subtitle title={item}></Subtitle>
            </div>
            )
          })}
        </div>
      </div>
      <div className={'reviews_dots_container'}>
        {Array(arr.length).fill(0).map((_item, index) => (
          <BsCircle className={`reviews_icon ${current === index ? 'active' : ''}`} onClick={() => onDotClickHandler(index)} key={index} />
        ))}
      </div>
        </div >
  )
}

export default Reviews
