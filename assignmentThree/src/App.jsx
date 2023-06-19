

import { useRoutes } from 'react-router-dom';
import './App.css'
import { ErrorPage } from './pages/ErrorPage';
import { FavouritesPage } from './pages/FavouritesPage';
import { HomePage } from './pages/HomePage';
import { PictureContext } from './context/PictureContext';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { FavouriteContext } from './context/FavouriteContext';



function App() {

  // Create context file then use the createContext hook in that file
  // If using default value, just use useContext right away, if data is diffrenet, like useState, put that variable into the Provider



  // eslint-disable-next-line no-unused-vars
  const [pictureList, setPictureList] = useState([])
  const [favouritePictureList, setFavouritePictureList] = useState([])
 
  useEffect(() => {
    getPictureData()
  }, [])
  

  const getPictureData = () => {
    const SECRET_KEY = "iM8M9566YIOyHW7sGqDQNBKe0GDJNVzVDRN9ZhgQqgk";
 
  
    axios.get(`https://api.unsplash.com/photos/?client_id=${SECRET_KEY}`)
    .then(({data}) => {
      // for every object in the data array, 
      const requiredData = data.map((info) => {
        return {
          // grab every properties in each object then add a new property called IsFavourite
          ...info,
          IsFavourite: false
        }
      })
       setPictureList(requiredData)
     })
  }
  
 

    
  
  let element = useRoutes([
  
  {
    path: '/',
    
    element: <HomePage />
  },
  {
    path: '/favourite',
    element: <FavouritesPage />
  },
  {
    path: '*',
    element: <ErrorPage />
  }
  ])

  return (
    // Creating an object prop for the value prop inside the Provider. These are nested objects
    <PictureContext.Provider value={{pictureList, setPictureList}}>
      <FavouriteContext.Provider value={{favouritePictureList, setFavouritePictureList}}>
      {element}
      </FavouriteContext.Provider>
    </PictureContext.Provider>
  )
   

 
}

export default App
