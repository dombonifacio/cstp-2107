import { useEffect, useState } from 'react'
import { useRoutes } from 'react-router-dom'

import './App.css'
import axios from 'axios'


// pages 
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { DetailsPage } from './pages/DetailsPage'


function App() {
  
  let element = useRoutes([
    {
      path: '/',
      element: <HomePage />
    },
    {
      // dynamic route
      path: '/name/:country',
      element: <DetailsPage />
    },
    {
      path: '*',
      element: <NotFoundPage />
    }
  ])

  return element
 
}

export default App
