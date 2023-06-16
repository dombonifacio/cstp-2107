// third party libraries
import axios from "axios"
import { useState, useEffect} from "react"
import { FlagCardComponent } from "./FlagGridComponent"

export const FlagsContainerComponent = () => {

    const [flags, setFlags] = useState([])
    const [searchText, setSearchText] = useState("")
    
    
    useEffect(() =>
    {
        return !searchText ? showCountries() : getSearchedCountry()
       
    }, !searchText ? [] : [searchText])

    const getSearchedCountry = () => {
        axios
        .get(`https://restcountries.com/v3.1/name/${searchText}`)
        .then((res) => 
        {
        setFlags(res.data)
        })
    }


    // if there is nothing in the search bar, show this, otherwise use the useEFFECT

    

    const showCountries = () => {
        
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) => 
            {
            setFlags(res.data)
        })
    }



    return (
       
        <div className="max-w-[1560px]">
            
            <div className="h-10 w-full min-w-[200px]">
                <input type="text" className="peer h-full max-w-[200px] rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" placeholder="Search a Country" onChange={(event) => setSearchText(event.target.value)}/>
            </div>
            <h1>
                {searchText}
            </h1>
            <FlagCardComponent data={flags}/>
        </div>
         
    )
}