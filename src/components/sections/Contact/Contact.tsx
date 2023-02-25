import React from 'react'
import Title from '../../common/Title/Title'
import './Contact.scss'

const Contact = (): JSX.Element => {
  return (
    <div className='contact_container' id='contact'>
      <Title title='Skontaktuj się z nami'/>
      <form>
        <input type="text" id="name" name="name"/><br />
        <input type="email" id="email" name="email"/><br/>
        <textarea id="message" name="message"></textarea>
      </form>
    </div>
  )
}

export default Contact
