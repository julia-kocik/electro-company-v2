
import Homepage from './components/views/Homepage/Homepage'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import BlogContent from './components/views/BlogContent/BlogContent'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage/>
  },
  {
    path: '/blog/:id',
    element: <BlogContent/>
  }
])
const App = (): JSX.Element => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
