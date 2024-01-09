import { useEffect, useState } from 'react'
import Welcome from './Welcome'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

function App() {
  const [myName, setMyName] = useState('???') // React Hooks

  const [users, setUsers] = useState([]) // React Hooks
  // Call API with axios https://jsonplaceholder.typicode.com/users
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setUsers(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  function handleClick(e) {
    setMyName(e.target.value)
  }

  console.log(users)

  return (
    <>
      <Button variant="outlined" >Get data from API</Button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Your name" variant="outlined" onChange={handleClick} />
      </Box>
      <p>
        <Welcome name={myName} />
      </p>
      
    </>
  )
}

export default App
