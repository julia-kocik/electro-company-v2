import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../common/Button/Button'
import NavBar from '../../common/NavBar/NavBar'
import Pagination from '../../common/Pagination/Pagination'
import Title from '../../common/Title/Title'
import './Blog.scss'
import { getArticles } from '../../../config'
import { secondsToDate } from '../../../utils/utils'

interface ArticleType {
  title: string
  content: string
  main_image: string
  published: {
    seconds: number
  }
}

const Blog = (): JSX.Element => {
  const [articles, setArticles] = useState<ArticleType[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [articlesPerPage] = useState(3)
  const [sliced, setSliced] = useState<ArticleType[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

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
        setLoading(false)
        setError(false)
      } catch (error) {
        console.error(error)
        setError(true)
      }
    }

    fetchArticles()
  }, [])

  useEffect(() => {
    const indexOfLastArticle = currentPage * articlesPerPage
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage
    const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle)
    setSliced(currentArticles)
  }, [currentPage, articles])

  return (
    <div className="blog_all_container">
      <NavBar />
      <div className="blog_all_overlay">
        <Title title="Poznaj nas lepiej" />
        <div className="blog_all_inner">
          {error && <p>Error</p>}
          {loading && <p>Loading</p>}
          {sliced.map((article: ArticleType, index: number) => {
            const date = secondsToDate(article.published.seconds).toLocaleDateString()
            return (
              <article key={index} className="blog_all_article">
                <h2>{article.title}</h2>
                <p>{date}</p>
                <p>{article.content.substring(0, 200)}...</p>
                <Link to={`/blog/${index}`}>
                  <Button title="czytaj wiecej" color="light" />
                </Link>
              </article>
            )
          })}
        </div>
        <Pagination
          postsPerPage={articlesPerPage}
          totalPosts={articles.length}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  )
}

export default Blog
