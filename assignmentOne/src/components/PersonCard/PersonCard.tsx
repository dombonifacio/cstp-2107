
import { DataType } from "../../DataType"
import { PersonProps } from "../../interface/PersonProps"


// We destructure the data coming from the parent component PersonInfo then defining a type for the properties
export const PersonCard = ({first_name, last_name, avatar, email} : DataType) => {

    return (
        <div className="grid grid-cols-2 bg-white text-slate-900 text-bold">
            <div className="">
                <img src={avatar} className="w-full h-full object-cover"/>
            </div>
            <div className="flex p-2">
               <ul className="leading-5 space-y-2">
                    <li><span className="font-bold">Name: </span> {first_name} {last_name}</li>
                    <li className="break-all"><span className="font-bold">Email: </span><a href="#" className="text-blue-600 underline">{email}</a></li>
               </ul>
            </div>
            {/* destructuring every object in the map
            {data.map(({first_name, last_name, avatar, email}) => <h1>Person{first_name}</h1>
              
                
            )} */}
        </div>
    )
}