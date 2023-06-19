import { useContext, useState, useEffect } from "react"

// context
import { PictureContext } from "../context/PictureContext"
import { FavouriteContext } from "../context/FavouriteContext"

// icons 
import { AiOutlineHeart } from 'react-icons/ai'
import { AiOutlineUser, AiFillHeart } from 'react-icons/ai'
export const PictureCardComponent = ({data}) => {
    const { pictureList, setPictureList } = useContext(PictureContext)
    const { favouritePictureList, setFavouritePictureList } = useContext(FavouriteContext)
    console.log(favouritePictureList, 'favourite pictures')
    const handleFavouriteChange = () => {
        // If the button is clicked, get the original picture list, change the IsFavourite property to true
        // If IsFavourite property is true, add it to another array that consists the Favourited objects
        const pictureListAfterFav = pictureList.map((pictureData) => {
            if (pictureData.id === data.id){
                pictureData.IsFavourite = !pictureData.IsFavourite;
            }
            
            return pictureData
        })

        setPictureList(pictureListAfterFav)
        const updatedFavouriteList = pictureList.filter((picture) => picture.IsFavourite)
        setFavouritePictureList(updatedFavouriteList)
       
        // if (element.IsFavourite == true){
        //     setFavouritePictureList([...favouritePictureList, element])
        // }
    }


    return (
        
        <div className="bg-white flex flex-col w-80 rounded-lg">
                      
            <img src={data.urls?.regular} className="w-full h-64 object-cover rounded-t-lg"/>
            <div className="p-3">
                <ul className="flex justify-between">
                    <div className="flex items-center gap-1">
                        <li>
                            <AiOutlineUser size='2rem' color="black"/>
                        </li>
                        <li>
                            <h1 className=" text-start text-slate-600 text-md ">Posted by: {data.user?.first_name}</h1>
                        </li>

                    </div>
                    <li>
                       
                        <button onClick={handleFavouriteChange}>
                            
                            {data.IsFavourite ? <AiFillHeart  size='2rem' color="red" /> : <AiOutlineHeart size='2rem' color="black" /> } 
                        </button>
                    </li>
                </ul>
                
                <div className="text-start pt-1">
                    <button className="bg-blue-500 rounded-lg hover:bg-blue-700 p-2">
                        <p className="text-md">Show Post</p>
                    </button>
                </div>
            </div>
        </div>

     
    )
}