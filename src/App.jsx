import { useState } from 'react'

import './App.css'
import Addtodo from './components/Addtodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className=' '>

            <h1>Learn about redux toolkit</h1>
            <Addtodo />
            <Todos />
     
      </div>
    </>
  )
}

export default App
