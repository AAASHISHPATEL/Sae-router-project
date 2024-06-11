import { useState } from 'react'

// import './App.css'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
// import Login from './components/login.jsx'
// import Signin from './components/signin.jsx'
// import Home from './components/home.jsx'
import { Outlet } from 'react-router-dom'


// import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  // const [count, setCount] = useState(0)

  return (
   <>
   <Header></Header>
   <Outlet/>
   <Footer></Footer>
   </>
  )
}

export default App
