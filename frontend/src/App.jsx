import { useState } from 'react'
import {createBrowserRouter,RouterProvider}  from "react-router-dom"
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import './App.css'

const router = createBrowserRouter([
  {
    path:"/",
    element:<h1>Home Page</h1>
  },
  {
    path:"/signin",
    element:<SignIn/>
  },{
    path:"/signup",
    element:<SignUp/>
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
