import React, { type ChangeEvent, useState, type FormEvent, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Button from '../../common/Button/Button'
import Subtitle from '../../common/Subtitle/Subtitle'
import Title from '../../common/Title/Title'
import Toast from '../../common/Toast/Toast'
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
  const [formfields, setFormfields] = useState(initialState)
  const [disabled, setDisabled] = useState(true)
  const [info, showInfo] = useState('')
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const { name, email, message } = formfields

  useEffect(() => {
    if (location.hash === '#contact' && contactRef.current !== null) {
      contactRef.current.scrollIntoView()
    }
  }, [location])

  useEffect(() => {
    setDisabled(!(name.length && email.length && message.length && regex.test(email)))
  }, [name, email, message])

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>): void => {
    setFormfields({ ...formfields, [e.target.name]: e.target.value })
  }
  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    if (disabled) {
      if (!(name.length && email.length && message.length)) {
        showInfo('Upewnij się, że wszystkie pola są uzupełnione')
      } else if (!regex.test(email)) {
        showInfo('Upewnij się, że email jest prawidłowy')
      } else {
        showInfo('Wystąpił nieznany błąd, spróbój ponownie później')
      }
      setTimeout(() => {
        showInfo('')
      }, 3000)
      return
    }
    try {
      const response = await fetch('https://formkeep.com/f/da906ed4f464', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept-charset': 'UTF-8'
        },
        body: JSON.stringify(formfields)
      })
      await response.json()
      showInfo('Otrzymaliśmy Twoją wiadomość!')
      setTimeout(() => {
        showInfo('')
      }, 3000)
    } catch (error: unknown) {
      if (error instanceof Error) {
        showInfo(error.message)
      } else {
        const errorMessage = typeof error === 'string' ? error : 'An unknown error occurred'
        showInfo(errorMessage)
      }
      setTimeout(() => {
        showInfo('')
      }, 3000)
    }
    setFormfields(() => initialState)
  }
  return (
    <div className='contact_container' ref={contactRef} id='contact'>
      {info && <Toast message={info}/>}
      <Title title='Skontaktuj się z nami' />
      <div className='contact_data'>
        <Subtitle title='Email: biuro@montroe.com' />
        <Subtitle title='Telefon: 790270070' />
      </div>
      <div className="form_container">
         {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <form onSubmit={onSubmitHandler}>
          <input type="text" id="name" name="name" placeholder='Imię' value={name} onChange={onChangeHandler} /><br />
          <input type="email" id="email" name="email" placeholder='Adres email' value={email} onChange={onChangeHandler}/><br/>
          <textarea id="message" name="message" placeholder='Wiadomość' value={message} onChange={onChangeHandler}></textarea>
          <Button title='Wyślij' color={`${disabled ? 'disabled' : 'light'}`} />
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
