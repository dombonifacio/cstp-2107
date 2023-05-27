import { useState } from 'react'
import assignmentData from './assignmentData.json';
import { DataType } from './DataType';

import './App.css'
import { PersonInfo } from './components/PersonInfo/PersonInfo';


function App() {

  // we only have 1 object so it only retrieves the first object's data property 
  // returns a new array (the array inside the "data" property of assignmentData's first object)
  const personData = assignmentData[0].data.map((person) => person);

  // an array of the people
  const [data, setData] = useState<DataType[]>(personData);
  
  //console.log(data);
  return (
    <div>
   
    <PersonInfo data={data}/> 
    
    </div>
    // <div>
    //   {data.map((person) => {
    //     return {console.log(person)}
    //   })}
    // </div>
  )
}

export default App
