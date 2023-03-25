import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getArticles } from '../../../config'
import Button from '../../common/Button/Button'
import Loader from '../../common/Loader/Loader'
import Error from '../../common/Error/Error'
import Title from '../../common/Title/Title'
import './BlogSection.scss'

interface articleType {
  title: string
  content: string
  main_image: string
  published: any
}

const BlogSection = (): JSX.Element => {
  const location = useLocation()
  const blogsectionRef = useRef<HTMLDivElement>(null)
  const [articles, setArticles] = useState<articleType[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  useEffect(() => {
    const fetchArticles = async (): Promise<void> => {
      try {
        const data = await getArticles()
        if (data) {
          setArticles(data)
          setLoading(false)
          setError(false)
        }
      } catch (error) {
        console.error(error)
        setError(true)
      }
    }
    fetchArticles()
  }, [])

  useEffect(() => {
    if (location.hash === '#blogsection' && blogsectionRef.current !== null) {
      blogsectionRef.current.scrollIntoView()
    }
  }, [location])
  return (
    <div className='blog_container' ref={blogsectionRef} id='blogsection'>
      <Title title='Poznaj nas lepiej'/>
      <div className="blog_container_inner">
        {error
          ? <Error/>
          : loading
            ? <Loader />
            : articles.slice(0, 3).map((article: articleType, index: number) => (
              <article key={index} className='blog_article'>
                <h3>{article.title}</h3>
              <p>{article.content.split('.')[0]}...</p>
              <Link to={`/blog/${index}`}>
                <Button title='czytaj wiecej' color='light' />
              </Link>
            </article>
            ))
        }
      </div>
      <div className='blog_redirect'>
        <Link to='/blog'>
          <Button title='pokaż wszystko' color='light'></Button>
        </Link>
      </div>
    </div>
  )
}

export default BlogSection
