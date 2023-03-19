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
  const [articles, setArticles] = useState<articleType[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [articlesPerPage] = useState(3)
  const [sliced, setSliced] = useState<articleType[]>([])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const fetchArticles = async (): Promise<void> => {
      try {
        const data = await getArticles()
        if (data) {
          setArticles(data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchArticles()
  }, [])

  useEffect(() => {
    const indexOfLastTrip = currentPage * articlesPerPage
    const indexOfFirstTrip = indexOfLastTrip - articlesPerPage
    const currentArticles = articles.slice(indexOfFirstTrip, indexOfLastTrip)
    setSliced(currentArticles)
  }, [currentPage, articles])

  return (
    <div className='blog_all_container'>
        <NavBar />
      <div className="blog_all_overlay">
      <Title title='Poznaj nas lepiej'/>
        <div className="blog_all_inner">
          {sliced.map((article: articleType, index: number) => {
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
          totalPosts={articles.length}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}/>
      </div>
    </div>
  )
}

export default Blog
