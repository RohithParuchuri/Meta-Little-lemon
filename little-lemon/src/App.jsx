import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './HomePage/HomePage'
import LoginPage from './LoginPage/LoginPage';

const App = () => {
  var router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/login',
      element: <LoginPage />
    },
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App