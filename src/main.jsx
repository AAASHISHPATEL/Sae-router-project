import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Routes,Route,createRoutesFromElements, RouterProvider,createBrowserRouter } from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signin from './components/signin.jsx'
import Login from './components/login.jsx'
import Home from './components/home.jsx'
import Your_card from './components/your-card.jsx'
import Contact_us from './components/contact-us.jsx'
import FAQs from './components/FAQs.jsx'

// const router =createBrowserRouter([
//   {
//     path: '/Sae-router-project/', element: <App/>,
//     children: [
//       {
//         path:"", element:<Home/>
//       },
//       {
//         path:'sign-in', element:<Signin/> 
//       },
//       {
//         path: 'login',element: <Login/>
//       },
//       {
//         path: 'Your_card' , element:<Your_card/>
//       },
//       {
//         path:"Contact", element:<Contact_us/>
//       },
//       {
//         path:"FAQs", element:<FAQs/>
//       }
//     ]
//   }
// ])

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/Sae-router-project/" element={<App/>}>
      <Route path='' element={<Home/>} />
      <Route path='sign-in' element={<Signin/>} />
      <Route path='login' element={<Login/>} />
      <Route path='Your_card' element={<Your_card/>} />
      <Route path='Contact' element={<Contact_us/>} />
      <Route path='FAQs' element={<FAQs/>} />
    </Route>
  )
  
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   <RouterProvider  router={router}/>
   
  </React.StrictMode>,
)
