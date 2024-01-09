import './App.css'
import { useState } from 'react'

function App() {
  const [myName, setMyName] = useState('???') // React Hooks
  function xxxx(event) {
    setMyName(event.target.value)
  }
  
  return (
    <>
      <p>
        Name :: <input type='text' id="username_tf" onChange={xxxx} />
      </p>
      <p>
        Hello <span>{myName}</span>
      </p>
    </>
  )
}

export default App
