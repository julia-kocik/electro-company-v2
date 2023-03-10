import React, { type ChangeEvent, useState, type FormEvent, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Button from '../../common/Button/Button'
import Subtitle from '../../common/Subtitle/Subtitle'
import Title from '../../common/Title/Title'
import './Contact.scss'

interface initialStateInterface {
  name: string
  email: string
  message: string
}

const initialState: initialStateInterface = {
  name: '',
  email: '',
  message: ''
}

const Contact = (): JSX.Element => {
  const location = useLocation()
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (location.hash === '#contact' && contactRef.current !== null) {
      contactRef.current.scrollIntoView()
    }
  }, [location])

  const [formfields, setFormfields] = useState(initialState)
  const { name, email, message } = formfields

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>): void => {
    setFormfields({ ...formfields, [e.target.name]: e.target.value })
  }
  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    try {
      const response = await fetch('https://formspree.io/f/xyylawko', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formfields)
      })
      const data = await response.json()
      console.log('Success:', JSON.stringify(data))
    } catch (error) {
      console.log(error)
    }
    setFormfields(() => initialState)
  }
  return (
    <div className='contact_container' ref={contactRef} id='contact'>
      <Title title='Skontaktuj się z nami' />
      <div className='contact_data'>
        <Subtitle title='Email: biuro@montroe.com' />
        <Subtitle title='Telefon: 515-737-356' />
      </div>
      <div className="form_container">
         {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <form onSubmit={onSubmitHandler}>
          <input required type="text" id="name" name="name" placeholder='Imię' value={name} onChange={onChangeHandler} /><br />
          <input required type="email" id="email" name="email" placeholder='Adres email' value={email} onChange={onChangeHandler}/><br/>
          <textarea required id="message" name="message" placeholder='Wiadomość' value={message} onChange={onChangeHandler}></textarea>
          <Button title='Wyślij' color='light'/>
        </form>
      </div>
      <div className="company_data">
        <address>
          Montroe Mave Sp. z o.o.<br />
          NIP: 5252826564<br/>
          al. Solidarności 68/121<br/>
          00-240 Warszawa
        </address>
      </div>
    </div>
  )
}

export default Contact
