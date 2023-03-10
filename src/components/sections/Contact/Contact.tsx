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
  img: any
}

const initialState: initialStateInterface = {
  name: '',
  email: '',
  message: '',
  img: ''
}

const Contact = (): JSX.Element => {
  const location = useLocation()
  const contactRef = useRef<HTMLDivElement>(null)
  const [formfields, setFormfields] = useState(initialState)
  const { name, email, message, img } = formfields

  useEffect(() => {
    if (location.hash === '#contact' && contactRef.current !== null) {
      contactRef.current.scrollIntoView()
    }
  }, [location])

  useEffect(() => {
    console.log(img)
  }, [img])

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0]
    const reader = new FileReader()
    console.log('here', reader, file)

    reader.onload = (event: ProgressEvent<FileReader>) => {
      const image = new Image()
      image.onload = () => {
        const width = image.width
        const height = image.height
        console.log(`Width: ${width}, Height: ${height}`)
        setFormfields(() => {
          return {
            ...formfields,
            img: {
              width,
              height,
              src: file?.name
            }
          }
        })
      }
      image.src = event.target?.result as string
    }

    reader.readAsDataURL(file as Blob)
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>): void => {
    setFormfields({ ...formfields, [e.target.name]: e.target.value })
  }
  const onSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log(formfields)
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
        <form onSubmit={onSubmitHandler}>
          <input required type="text" id="name" name="name" placeholder='Imię' value={name} onChange={onChangeHandler} /><br />
          <input required type="email" id="email" name="email" placeholder='Adres email' value={email} onChange={onChangeHandler}/><br/>
          <input type="file" id='img' name='img' onChange={handleFileUpload} />
          <textarea required id="message" name="message" placeholder='Wiadomość' value={message} onChange={onChangeHandler}></textarea>
          <Button title='Wyślij' color='light' />
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
