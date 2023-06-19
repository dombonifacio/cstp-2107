import axios from "axios"
import React from "react"
// components
import { FavouritesPage } from "./FavouritesPage"

// hooks
import { useContext } from "react"
import { PictureContext } from "../context/PictureContext"

// icons
import { AiOutlineHeart } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { Link, Navigate, useNavigate } from "react-router-dom"
import { PictureCardComponent } from "../components/PictureCardComponent"




export const HomePage = () => {
    // destructuring from the PictureContext
    const { pictureList } = useContext(PictureContext)

    const navigate = useNavigate()

    const handleNextPage = () =>{
        navigate('/favourite')
    }

   

   
    
    return (
        <>
        <h1 className="text-5xl font-bold ">You are on the Home Page</h1>
        <button onClick={handleNextPage} className="bg-slate-500 hover:bg-slate-700 p-3 rounded-lg my-5">Go to Favourites Page</button>
        
        <div className="grid grid-cols-3 gap-5">
            {pictureList.map((picture, index) => {
                return <PictureCardComponent data={picture}/>
                   
                  
                    
                
            })}
         
           
        </div>
        </>
         
    )
}