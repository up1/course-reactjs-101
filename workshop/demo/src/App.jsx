import './App.css'
import { useState } from 'react'

function App() {

  const [myName, setMyName] = useState('???')

  function xxxx(event) {
    console.log(event.target.value)
    setMyName(event.target.value)
  }

  console.log("App render")

  return (
    <>
      <p>
        Name :: <input type='text' onChange={xxxx} />
      </p>
      <p>
        Hello <span>{myName}</span>
      </p>
    </>
  )
}

export default App
