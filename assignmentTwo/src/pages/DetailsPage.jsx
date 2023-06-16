import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"

export const DetailsPage = () => {
    // tells you what url you are in parameter
    const {country} = useParams()
    const [countryDetails, setCountryDetails] = useState({})
    const [loading, setLoading] = useState(false)


    const navigate = useNavigate()


    // useEffect depends on the component's lifecycle
    // If the component's state changes inside the array, call the useEffect again
    useEffect(() => {
        getFlagData()
    }, [country])

    const handleNavigate = () => {
        navigate('/')
    }

    
    
    
    const getFlagData = () => {
        // once we try to call api, setloading to true
        setLoading(true)
        axios.get(`https://restcountries.com/v3.1/name/${country}`)
        .then((res) => {
        setCountryDetails(res.data[0])
        // once api process is finished, set false setLoading
        setLoading(false)
        
        }
       )

    }


  
    // if loading is false, show the loading h1 tag, once api is there, show the api data
    return loading ? <h1>loading...</h1> : (
        
        <>
           
      
            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            
         
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{countryDetails.name?.common}</h5>
      
                <img src={countryDetails.flags?.png} />
                <button class="mt-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleNavigate}>
                    Go Back
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
        </>
    )
}