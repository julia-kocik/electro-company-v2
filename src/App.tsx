
import Homepage from './components/views/Homepage/Homepage'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Article from './components/views/Article/Article'
import Blog from './components/views/Blog/Blog'
import Error from './components/common/Error/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />
  },
  {
    path: '/blog',
    element: <Blog/>
  },
  {
    path: '/blog/:id',
    element: <Article/>
  },
  {
    path: '*',
    element: <Error notFound={true} />
  }
])

const App = (): JSX.Element => {
  return (
      <RouterProvider router={router} />
  )
}

export default App
