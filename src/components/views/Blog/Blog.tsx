import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../common/Button/Button'
import NavBar from '../../common/NavBar/NavBar'
import Title from '../../common/Title/Title'
import './Blog.scss'

const Blog = (): JSX.Element => {
  const str: string = 'Smart homes are equipped with advanced technology that allows homeowners to remotely control and automate various functions of their homes, such as lighting, temperature, and security systems. With smart homes, homeowners can use their smartphones or other internet-connected devices to control their homes systems from anywhere in the world'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='blog_all_container'>
        <NavBar />
      <div className="blog_all_overlay">
      <Title title='Poznaj nas lepiej'/>
        <div className="blog_all_inner">
          <article className='blog_all_article'>
            <h2>Title of Article</h2>
            <p>{str.substring(0, 200)}...</p>
            <Link to='/blog/1'>
              <Button title='czytaj wiecej' color='light' />
            </Link>
          </article>
          <article className='blog_all_article'>
            <h2>Title of Article</h2>
            <p>{str.substring(0, 200)}...</p>
            <Link to='/blog/2'>
              <Button title='czytaj wiecej' color='light'/>
            </Link>
          </article>
          <article className='blog_all_article'>
            <h2>Title of Article</h2>
            <p>{str.substring(0, 200)}...</p>
            <Link to='/blog/3'>
              <Button title='czytaj wiecej' color='light' />
            </Link>
          </article>
          <article className='blog_all_article'>
            <h2>Title of Article</h2>
            <p>{str.substring(0, 200)}...</p>
            <Link to='/blog/1'>
              <Button title='czytaj wiecej' color='light' />
            </Link>
          </article>
          <article className='blog_all_article'>
            <h2>Title of Article</h2>
            <p>{str.substring(0, 200)}...</p>
            <Link to='/blog/2'>
              <Button title='czytaj wiecej' color='light'/>
            </Link>
          </article>
          <article className='blog_all_article'>
            <h2>Title of Article</h2>
            <p>{str.substring(0, 200)}...</p>
            <Link to='/blog/3'>
              <Button title='czytaj wiecej' color='light' />
            </Link>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Blog
