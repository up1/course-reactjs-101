import { useState, useRef } from 'react'
import Welcome from './Welcome'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {
  const [myName, setMyName] = useState('???') // React Hooks
  const nameRef = useRef(null)

  function handleClick(e) {
    setMyName(e.target.value)
  }

  return (
    <>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Your name" variant="outlined" onChange={handleClick} />
        <Button variant="outlined" >Chage</Button>
      </Box>
      <p>
        <Welcome name={myName} />
      </p>
    </>
  )
}

export default App
