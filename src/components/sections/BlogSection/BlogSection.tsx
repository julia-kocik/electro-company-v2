import React from 'react'
import Button from '../../common/Button/Button'
import './BlogSection.scss'

const BlogSection = (): JSX.Element => {
  const str: string = 'Smart homes are equipped with advanced technology that allows homeowners to remotely control and automate various functions of their homes, such as lighting, temperature, and security systems. With smart homes, homeowners can use their smartphones or other internet-connected devices to control their homes systems from anywhere in the world'
  return (
    <div className='blog_container' id='blogsection'>
      <article className='blog_article'>
        <h2>Title of Article</h2>
        <p>{str.substring(0, 200)}...</p>
        <Button title='czytaj wiecej' color='light'/>
      </article>
      <article className='blog_article'>
        <h2>Title of Article</h2>
        <p>{str.substring(0, 200)}...</p>
        <Button title='czytaj wiecej' color='light'/>
      </article>
      <article className='blog_article'>
        <h2>Title of Article</h2>
        <p>{str.substring(0, 200)}...</p>
        <Button title='czytaj więcej' color='light'/>
      </article>
    </div>
  )
}

export default BlogSection
