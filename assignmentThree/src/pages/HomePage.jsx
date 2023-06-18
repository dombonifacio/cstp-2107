import { createContext } from "react"

// components
import { FavouritesPage } from "./FavouritesPage"
import { UserContext } from "../context/UserContext"
import { useContext } from "react"

export const HomePage = () => {
    const data = useContext(UserContext)
    
    

    return (
       
           
               
        <div>
            <h1>You are on the Home Page</h1>
 
            {data}
            <FavouritesPage />
        </div>
         
       
    )
}