import { useState } from 'react'
import {createBrowserRouter,RouterProvider}  from "react-router-dom"
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Contact } from './pages/Contact'
import './App.css'

const router = createBrowserRouter([
  {
    path:"/",
    element:<SignIn/>
  },{
    path:"/signup",
    element:<SignUp/>
  },{
    path:"/contact",
    element:<Contact/>
  }
])

function App() {
  

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
