import './App.css'
import { useState, useRef } from 'react'
import Welcome from './Welcome'

function App() {
  const [myName, setMyName] = useState('???') // React Hooks
  const nameRef = useRef(null)

  function xxxx() {
    setMyName(nameRef.current.value)
  }
  
  return (
    <>
      <p>
        Name :: <input type='text' ref={nameRef} />
        <button onClick={xxxx}>Change</button>
      </p>
      <p>
        <Welcome name={myName}/>
      </p>
    </>
  )
}

export default App
