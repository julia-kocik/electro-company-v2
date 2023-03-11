import React from 'react'
import './Toast.scss'

interface ToastProps {
  message: string
}

const Toast: React.FC<ToastProps> = ({ message }): JSX.Element => {
  return (
      <div className={'toast_container'}>
          <span>{message}</span>
      </div>
  )
}

export default Toast
