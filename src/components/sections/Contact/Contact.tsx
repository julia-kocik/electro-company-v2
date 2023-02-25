import React from 'react'
import Button from '../../common/Button/Button'
import Title from '../../common/Title/Title'
import './Contact.scss'

const Contact = (): JSX.Element => {
  return (
    <div className='contact_container' id='contact'>
      <Title title='Skontaktuj się z nami' />
      <div className="form_container">
        <form>
          <input type="text" id="name" name="name" placeholder='Imię'/><br />
          <input type="email" id="email" name="email" placeholder='Adres email'/><br/>
          <textarea id="message" name="message" placeholder='Wiadomość'></textarea>
          <Button title='Wyślij' color='light'/>
        </form>
      </div>
    </div>
  )
}

export default Contact
