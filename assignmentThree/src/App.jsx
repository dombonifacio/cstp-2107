

import { useRoutes } from 'react-router-dom';
import './App.css'
import { ErrorPage } from './pages/ErrorPage';
import { FavouritesPage } from './pages/Favourites.Page';
import { HomePage } from './pages/HomePage';

function App() {


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

  return element;

 
}

export default App
