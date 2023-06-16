// third party libraries
import axios from "axios"
import { useState, useEffect} from "react"
import { FlagCardComponent } from "./FlagGridComponent"

export const FlagsContainerComponent = () => {

    const [flags, setFlags] = useState([])
    


    axios
        .get("https://restcountries.com/v3.1/all")
        .then((res) => 
        {
        setFlags(res.data)
    })


    // console.log(flags)
    
    

    return (
       
        <div className="max-w-[1560px]">

            <FlagCardComponent data={flags}/>
        </div>
         
    )
}