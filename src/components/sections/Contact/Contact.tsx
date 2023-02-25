import React, { type ChangeEvent, useState, type FormEvent } from 'react'
import Button from '../../common/Button/Button'
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
  const [formfields, setFormfields] = useState(initialState)
  const { name, email, message } = formfields
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>): void => {
    setFormfields({ ...formfields, [e.target.name]: e.target.value })
  }
  const onSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log(formfields)
    setFormfields(() => initialState)
  }
  return (
    <div className='contact_container' id='contact'>
      <Title title='Skontaktuj się z nami' />
      <div className="form_container">
        <form onSubmit={onSubmitHandler}>
          <input required type="text" id="name" name="name" placeholder='Imię' value={name} onChange={onChangeHandler} /><br />
          <input required type="email" id="email" name="email" placeholder='Adres email' value={email} onChange={onChangeHandler}/><br/>
          <textarea required id="message" name="message" placeholder='Wiadomość' value={message} onChange={onChangeHandler}></textarea>
          <Button title='Wyślij' color='light'/>
        </form>
      </div>
    </div>
  )
}

export default Contact
