// third party libraries
import axios from "axios"
import { useState, useEffect} from "react"

export const FlagsContainerComponent = () => {


    axios
    .get("https://restcountries.com/v3.1/all")
        .then((res) => {
        console.log(res.data)
    })


    

    return (
        <div>

        </div>
    )
}