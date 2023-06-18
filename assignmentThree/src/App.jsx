

import { useRoutes } from 'react-router-dom';
import './App.css'
import { ErrorPage } from './pages/ErrorPage';
import { FavouritesPage } from './pages/FavouritesPage';
import { HomePage } from './pages/HomePage';
import { UserContext } from './context/UserContext';
import { useContext } from 'react';



function App() {

  const user = useContext(UserContext)

  // eslint-disable-next-line no-unused-vars
  const SECRET_KEY = "iM8M9566YIOyHW7sGqDQNBKe0GDJNVzVDRN9ZhgQqgk";
  // `https://api.unsplash.com/photos/?client_id={put secret key here}
  
    
  
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
    <UserContext.Provider value={user}>
      {/* makes sure to render each component depending on the routes */}
      {element}
    </UserContext.Provider>
  )

 
}

export default App
