import { useEffect, useState } from 'react'
import { useRoutes } from 'react-router-dom'

import './App.css'
import axios from 'axios'


// pages 
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'


function App() {
  
  let element = useRoutes([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/name:country',
      
    },
    {
      path: '*',
      element: <NotFoundPage />
    }
  ])

  return element
 
}

export default App
