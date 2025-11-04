import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './store/store.js'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthLayout } from './components/index.js'

const router =  createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <AuthLayout authentication={false}><Login /></AuthLayout>
      },
      {
        path: '/add-post',
        element: <AuthLayout authentication={true}><AddPost /></AuthLayout>
      },
      {
        path: '/all-posts',
        element: <AuthLayout authentication={true}><AllPosts /></AuthLayout>
      },
      {
        path: '/edit-post/:slug',
        element: <AuthLayout authentication={true}><EditPost /></AuthLayout>
      },
      {
        path: '/post/:slug',
        element: <Post />
      },
      {
        path: '/signup',
        element: <AuthLayout authentication={false}><Signup /></AuthLayout>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>
)
