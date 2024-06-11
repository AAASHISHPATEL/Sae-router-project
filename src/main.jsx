import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signin from './components/signin.jsx'
import Login from './components/login.jsx'
import Home from './components/home.jsx'
import Your_card from './components/your-card.jsx'
import Contact_us from './components/contact-us.jsx'
import FAQs from './components/FAQs.jsx'

const router =createBrowserRouter([
  {
    path: '', element: <App/>,
    children: [
      {
        path:"/", element:<Home/>
      },
      {
        path:'sign-in', element:<Signin/> 
      },
      {
        path: 'login',element: <Login/>
      },
      {
        path: 'Your_card' , element:<Your_card/>
      },
      {
        path:"Contact", element:<Contact_us/>
      },
      {
        path:"FAQs", element:<FAQs/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   <RouterProvider  router={router}/>
   
  </React.StrictMode>,
)
