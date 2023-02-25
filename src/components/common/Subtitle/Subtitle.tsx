import React from 'react'
import './Subtitle.scss'

interface SubtitleProps {
  title: string
}

const Subtitle: React.FC<SubtitleProps> = ({ title }): JSX.Element => {
  return (
        <h5 className='subtitle'>{title}</h5>
  )
}

export default Subtitle
