import React, { useEffect, useRef, useState } from 'react'
import Title from '../../common/Title/Title'
import './Reviews.scss'
import { BsCircle } from 'react-icons/bs'
import Subtitle from '../../common/Subtitle/Subtitle'
import { useLocation } from 'react-router-dom'

const arr = [
  'Niedawno przeszedłem do tej firmy elektrycznej i jestem zaskoczony, ile pieniędzy oszczędzam każdego miesiąca na rachunkach za energię. Dodatkowo, ich obsługa klienta jest na najwyższym poziomie!',
  'Cieszę się, że znalazłem tę firmę elektryczną - ich opcje odnawialnych źródeł energii umożliwiają łatwe dbanie o środowisko, jednocześnie ciesząc się niezawodną usługą elektryczną.',
  'Ta firma elektryczna naprawdę ceni swoich klientów. Za każdym razem, gdy miałem problem, ich zespół wsparcia zawsze szybko reaguje i rozwiązuje problem.',
  'Nigdy nie doświadczyłem awarii ani przerw w usłudze z tą firmą elektryczną. Ich infrastruktura jest wyraźnie dobrze utrzymana, a to daje mi spokój, wiedząc, że zawsze na nich można polegać.',
  'Doceniam przejrzystość tej firmy elektrycznej w kwestii ich cenników i faktur. Nie ma żadnych ukrytych opłat ani niespodzianek, a ja czuję się pewny, że otrzymuję wartość za swoje pieniądze.',
  'Proces instalacji moich paneli słonecznych był bardzo prosty dzięki doświadczonym i przyjaznym technikom tej firmy elektrycznej. Poświęcili mi czas, wyjaśnili wszystko i odpowiedzieli na moje pytania.'
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
