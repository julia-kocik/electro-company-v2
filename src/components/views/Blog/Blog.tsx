import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../common/Button/Button'
import NavBar from '../../common/NavBar/NavBar'
import Pagination from '../../common/Pagination/Pagination'
import Title from '../../common/Title/Title'
import './Blog.scss'
import { getArticles } from '../../../config'
import { secondsToDate } from '../../../utils/utils'

interface articleType {
  title: string
  content: string
  main_image: string
  published: any
}

const Blog = (): JSX.Element => {
  const [articles, setArticles] = useState<any>([])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const fetchArticles = async (): Promise<void> => {
      try {
        const data = await getArticles()
        if (data) {
          // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
          setArticles(data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchArticles()
  }, [])

  useEffect(() => {
    console.log(articles)
  }, [articles])

  const [currentPage, setCurrentPage] = useState(1)
  const [articlesPerPage] = useState(3)
  return (
    <div className='blog_all_container'>
        <NavBar />
      <div className="blog_all_overlay">
      <Title title='Poznaj nas lepiej'/>
        <div className="blog_all_inner">
          {articles.map((article: articleType, index: number) => {
            const date = secondsToDate(article.published.seconds).toLocaleDateString()
            return (
            <article key={index} className='blog_all_article'>
              <h2>{article.title}</h2>
              <p>{date}</p>
                <img src={article.main_image} alt="" style={{ height: '50px', width: '50px' }}/>
                <p>{article.content.substring(0, 200)}...</p>
              <Link to={`/blog/${index}`}>
              <Button title='czytaj wiecej' color='light' />
            </Link>
          </article>
            )
          })}
        </div>
        <Pagination
          postsPerPage={articlesPerPage}
          totalPosts={6}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}/>
      </div>
    </div>
  )
}

export default Blog
