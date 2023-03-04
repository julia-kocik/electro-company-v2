import React, { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from '../../common/Button/Button'
import Title from '../../common/Title/Title'
import './BlogSection.scss'

const BlogSection = (): JSX.Element => {
  const location = useLocation()
  const blogsectionRef = useRef<HTMLDivElement>(null)
  const str: string = 'Smart homes are equipped with advanced technology that allows homeowners to remotely control and automate various functions of their homes, such as lighting, temperature, and security systems. With smart homes, homeowners can use their smartphones or other internet-connected devices to control their homes systems from anywhere in the world'

  useEffect(() => {
    if (location.hash === '#blogsection' && blogsectionRef.current !== null) {
      blogsectionRef.current.scrollIntoView()
    }
  }, [location])
  return (
    <div className='blog_container' ref={blogsectionRef} id='blogsection'>
      <Title title='Poczytaj naszego bloga'/>
      <div className="blog_container_inner">
        <article className='blog_article'>
          <h2>Title of Article</h2>
          <p>{str.substring(0, 200)}...</p>
          <Link to='/blog/1'>
            <Button title='czytaj wiecej' color='light' />
          </Link>
        </article>
        <article className='blog_article'>
          <h2>Title of Article</h2>
          <p>{str.substring(0, 200)}...</p>
          <Link to='/blog/2'>
            <Button title='czytaj wiecej' color='light'/>
          </Link>
        </article>
        <article className='blog_article'>
          <h2>Title of Article</h2>
          <p>{str.substring(0, 200)}...</p>
          <Link to='/blog/3'>
            <Button title='czytaj wiecej' color='light' />
          </Link>
        </article>
      </div>
    </div>
  )
}

export default BlogSection
