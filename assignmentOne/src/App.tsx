import { useState } from 'react'
import assignmentData from './assignmentData.json';
import { DataType } from './DataType';

import './App.css'

function App() {

  // ** retrieves each object inside the assignmentData array
  //const myData = assignmentData.map((item) => item);

  // ** retrieves the data property inside each object's inside the assignmentArray
  //const myData = assignmentData.map((item) => item.data)
  
  
  // **won't work for single [] useState type because the person returns an array, and personData map method will return a new array, making it array of arrays
  //  const personData = myData.map((person) => person)
  //  console.log(personData)
  
  
  
  // we only have 1 object so it only retrieves the first object's data property 
  // returns a new array (the array inside the "data" property of assignmentData's first object)
  const personData = assignmentData[0].data.map((person) => person);



  




const [data, setData] = useState<DataType[]>(personData);
  
  



  return (
    <div>
     {data.map((person) => person.email)}
      
    </div>
    // <div>
    //   {data.map((person) => {
    //     return {console.log(person)}
    //   })}
    // </div>
  )
}

export default App
