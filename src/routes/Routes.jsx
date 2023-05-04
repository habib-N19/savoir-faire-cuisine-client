import { createBrowserRouter } from 'react-router-dom'
import LoginLayout from '../layouts/LoginLayout'
import Login from '../pages/Login/Login/Login'
import Register from '../pages/Login/Register/Register'
import Terms from '../pages/Shared/Terms/Terms'
import MainLayout from '../layouts/MainLayout'
import ChefData from '../pages/Home/ChefData/ChefData'
import Card from '../pages/Home/ChefCard/Card'
import NotFound from '../pages/ErrorPage/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    loader: () => fetch('http://localhost:9000/chefInfos'),
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: '/',
        element: <ChefData></ChefData>,
        loader: () => fetch('http://localhost:9000/chefInfos')
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
  //   {
  //     path: 'chefData',
  //     element: <MainLayout></MainLayout>,
  //     children: [
  //       {
  //         path: ':id',
  //         element: <ChefCard></ChefCard>,
  //         loader: ({ params }) =>
  //           fetch(`http://localhost:9000/chefInfos/${params.id}`)
  //       }
  //     ]
  //   }
])

export default router
