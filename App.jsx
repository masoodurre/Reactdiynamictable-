import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Wellcome from './components/AddNumber'
import AddNumbers from './components/AddNumber'
import DaynamicTable from './components/DaynamicTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Wellcome/> */}
      {/* <AddNumbers/> */}
      <DaynamicTable/>
     
   
      

   
     <h1>Masood</h1>
     <p>I love my Allah</p>
    </div>
  )
}

export default App
