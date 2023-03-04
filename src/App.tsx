
import Homepage from './components/views/Homepage/Homepage'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Article from './components/views/Article/Article'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage/>
  },
  {
    path: '/blog/:id',
    element: <Article/>
  }
])

const App = (): JSX.Element => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
