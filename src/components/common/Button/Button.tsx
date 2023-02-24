import React from 'react'
import './Button.scss'

interface ButtonProps {
  title: string
  color: string
}

const Button: React.FC<ButtonProps> = ({ title, color }): JSX.Element => {
  const className = `btn ${color === 'light' ? 'btn_light' : ''} ${color === 'dark' ? 'btn_dark' : ''}`
  return (
        <button className={className}>
            <span>{title}</span>
        </button>
  )
}

export default Button
