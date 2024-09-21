import './App.css'
import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <h1>hello world!</h1>
     <p>count: {count} </p>
     <button onClick={() => {setCount(count+1)}}>Click</button>
     <button onClick={() => {setCount(0)}}>Reset</button>
    </>
  )
}

export default App
