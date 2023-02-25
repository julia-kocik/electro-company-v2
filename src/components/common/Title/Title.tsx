import React from 'react'
import './Title.scss'

interface TitleProps {
  title: string
}
const Title: React.FC<TitleProps> = ({ title }): JSX.Element => {
  return (
      <h2 className='title'>{title}</h2>
  )
}

export default Title
