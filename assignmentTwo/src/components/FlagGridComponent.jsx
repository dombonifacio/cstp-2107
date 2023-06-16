import { Link } from "react-router-dom"

export const FlagCardComponent = ({data}) => {
    // const country = data[199]
    // console.log(country.flags.png)
  
    return (

        <div className={data.length > 1 ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-5" : "grid grid-cols-1"}> 
            {data.map((countryInfo, index) => {
                return (
                    <div key={index} className="flex flex-col w-full bg-white h-auto">
                        <img src={`${countryInfo.flags.png}`} className=" h-48 object-cover"></img>
                        

                        {/* show country name and learn more button here */}
                        <div className=" p-5 ">
                            <ul className="flex justify-between ">
                                <li className="text-2xl text-slate-800 font-bold text-start w-full lg:w-3/4">
                                    {countryInfo.name.common}
                                </li>
                                <li className="w-full text-end">
                                   <Link to={`/name/${countryInfo.name.common}`} className="items-center justify-center p-3 w-full break-words font-medium text-gray-500 rounded-lg bg-gray-200 hover:text-gray-900 hover:bg-gray-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                                    Learn More
                                   </Link> 
                                </li>
                            </ul>
                        </div>
                    </div>

                )
            })}
        </div>
       
        
    )
}