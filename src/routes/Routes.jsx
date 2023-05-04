import { Navigate, createBrowserRouter } from 'react-router-dom'
import LoginLayout from '../layouts/LoginLayout'
import Login from '../pages/Login/Login/Login'
import Register from '../pages/Login/Register/Register'
import Terms from '../pages/Shared/Terms/Terms'
import MainLayout from '../layouts/MainLayout'
import ChefData from '../pages/Home/ChefData/ChefData'
import Card from '../pages/Home/ChefCard/Card'
import NotFound from '../pages/ErrorPage/NotFound'
import DetailedChefPage from '../pages/DetailedChefPage/DetailedChefPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: '/',
        element: <ChefData></ChefData>,
        loader: () => fetch('http://localhost:9000/chefInfos')
      },
      {
        path: 'chefData/:id',
        element: <DetailedChefPage></DetailedChefPage>,
        loader: ({ params }) =>
          fetch(`http://localhost:9000/chefInfos/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/terms',
        element: <Terms></Terms>
      }
    ]
  }
])

export default router
