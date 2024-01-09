import './App.css'
import { useState } from 'react'
import Welcome from './Welcome'

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
        <Welcome name={myName} />
      </p>
    </>
  )
}

export default App
