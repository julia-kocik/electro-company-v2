import React, { useEffect, useState } from 'react'
import { getArticles } from '../../../config'
import NavBar from '../../common/NavBar/NavBar'
import Title from '../../common/Title/Title'
import './Article.scss'
import { useParams } from 'react-router-dom'
import { secondsToDate } from '../../../utils/utils'
import Loader from '../../common/Loader/Loader'
import Error from '../../common/Error/Error'
import ReactMarkdown from 'react-markdown'

interface ArticleType {
  title: string
  content: string
  main_image: string
  published: {
    seconds: number
  }
}

const initialState = {
  title: '',
  content: '',
  main_image: '',
  published: {
    seconds: 0
  }
}
const BlogContent = (): JSX.Element => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [article, setArticle] = useState<ArticleType | undefined>(initialState)
  const params = useParams<{ id: string }>()
  const { id } = params

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const fetchArticles = async (): Promise<void> => {
      try {
        const data = await getArticles()
        if (data && id) {
          const findMatchingArticle = data.find((_article, index) => index === +id)
          setArticle(findMatchingArticle)
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
    window.scrollTo(0, 0)
  }, [])
  const formattedDate = secondsToDate(article?.published.seconds).toLocaleDateString()
  return (
    <div className='blog_content_container'>
        <NavBar />
      <div className="blog_content_overlay">
        {error
          ? <Error/>
          : loading
            ? <Loader />
            : (
                <article className='article_container'>
                  <div className="img_container">
                    <img src={article?.main_image} alt="Smart Home" />
                  </div>
                  <div className='article_content'>
                    <Title title={article?.title ? article.title : ''}></Title>
                    <div className='article_data'>
                      <span>{formattedDate}</span>
                      </div>
                    <p>
                      <ReactMarkdown>
                        {article?.content ? article.content : ''}
                      </ReactMarkdown>
                    </p>
                  <div className='article_social'></div>
                  </div>
                </article>
              )
        }
      </div>
    </div>
  )
}

export default BlogContent
