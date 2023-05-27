
import { DataType } from "../../DataType"
import { PersonProps } from "../../interface/PersonProps"


// We destructure the data coming from the parent component PersonInfo then defining a type for the properties
export const PersonCard = ({first_name, last_name, avatar, email} : DataType) => {

    return (
        <div className="grid grid-cols-2 bg-white text-slate-900 text-bold">
            <div className="">
                <img src={avatar} className="w-full h-full object-cover"/>
            </div>
            <div className="flex flex-wrap w-full">
                <p>{first_name}</p>
                <p>{last_name}</p>
                <div className="w-full bg-black">
                    <p className="break-words">{email}</p>
                </div>
            </div>
            {/* destructuring every object in the map
            {data.map(({first_name, last_name, avatar, email}) => <h1>Person{first_name}</h1>
              
                
            )} */}
        </div>
    )
}