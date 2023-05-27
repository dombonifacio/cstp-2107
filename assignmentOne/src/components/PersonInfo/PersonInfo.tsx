import { DataType } from "../../interface/DataType"
import { PersonProps } from "../../interface/PersonProps"
import { PersonCard } from "../PersonCard/PersonCard"

// Props contains the array of data passed from the parent component App.tsx
// We must define a type for our props
// * * Props is an object so we can destructure the properties from our prop type
export const PersonInfo = ({data} : PersonProps) => {
  // console.log(props)
    return (
        <div className="bg-zinc-900 w-[1160px] grid grid-cols-3 gap-5 p-5">
            {/* destructuring the properties inside the data array */}
           {data.map(({first_name, last_name, avatar, email}) => {
            return (
                <PersonCard first_name={first_name}
                last_name={last_name}
                avatar={avatar}
                email={email}/>
            )
           })}
        </div>
    )
}