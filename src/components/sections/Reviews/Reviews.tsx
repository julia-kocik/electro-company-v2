import React, { useEffect, useState } from 'react'
import Title from '../../common/Title/Title'
import './Reviews.scss'
import { BsCircle } from 'react-icons/bs'
import Subtitle from '../../common/Subtitle/Subtitle'

const arr = [
  'Niedawno przeszedłem do tej firmy elektrycznej i jestem zaskoczony, ile pieniędzy oszczędzam każdego miesiąca na rachunkach za energię. Dodatkowo, ich obsługa klienta jest na najwyższym poziomie!',
  'Cieszę się, że znalazłem tę firmę elektryczną - ich opcje odnawialnych źródeł energii umożliwiają łatwe dbanie o środowisko, jednocześnie ciesząc się niezawodną usługą elektryczną.',
  'Ta firma elektryczna naprawdę ceni swoich klientów. Za każdym razem, gdy miałem problem, ich zespół wsparcia zawsze szybko reaguje i rozwiązuje problem.',
  'Nigdy nie doświadczyłem awarii ani przerw w usłudze z tą firmą elektryczną. Ich infrastruktura jest wyraźnie dobrze utrzymana, a to daje mi spokój, wiedząc, że zawsze na nich można polegać.',
  'Doceniam przejrzystość tej firmy elektrycznej w kwestii ich cenników i faktur. Nie ma żadnych ukrytych opłat ani niespodzianek, a ja czuję się pewny, że otrzymuję wartość za swoje pieniądze.',
  'Proces instalacji moich paneli słonecznych był bardzo prosty dzięki doświadczonym i przyjaznym technikom tej firmy elektrycznej. Poświęcili mi czas, wyjaśnili wszystko i odpowiedzieli na moje pytania.'
]

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
                  <Subtitle title={item}></Subtitle>
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
