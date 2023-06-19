import { FavouritesContainerComponent } from "../components/FavouritesContainerComponent"
import { useContext } from "react"
import { FavouriteContext } from "../context/FavouriteContext"
import { useNavigate } from "react-router-dom"



export const FavouritesPage = () => {
    // get the list from context API, then filter that list then style it using the container component then just pass props

    const { favouritePictureList } = useContext(FavouriteContext)
    
    
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate('/')
    }
    return (
        <>
        <h1 className="text-5xl font-bold">My Favourites</h1>
        <button onClick={handleGoBack} className="bg-slate-500 hover:bg-slate-700 p-3 rounded-lg my-5">Go back to Home page</button>
       
        
            <FavouritesContainerComponent data={favouritePictureList}/>
           
         
        
        </>
        
    )
}