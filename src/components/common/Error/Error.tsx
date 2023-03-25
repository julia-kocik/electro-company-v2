import React from 'react'
import './Error.scss'

interface ErrorProps {
  notFound?: boolean
}

const Error: React.FC<ErrorProps> = ({ notFound }): JSX.Element => {
  return (
      <div className='error_container'>
          <div className='error_overlay'>
              <p>{`${notFound ? 'Niestety nic tu nie ma, sprawdź czy adres strony jest poprawny' : 'Wystąpił nieoczekiwany błąd. Spróbuj ponownie później'}  lub skontaktuj się z naszym centrum wspracia na adres biuro@montroe.com`}</p>
          </div>
      </div>
  )
}

export default Error
