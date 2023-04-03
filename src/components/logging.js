import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import Axios from "axios";

export default function Logging({sessionKey, setSessionKey}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isCorectCridentials, setIsCorectCridentials] = useState(false)
  const [loginStatus, setLoginStatus] = useState(""); 
  
  const login = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3002/logging.js", {
      username: username,
      password: password,
    }).then((response) => {
      if(response.data.message){
        setLoginStatus(response.data.message);
      }else{
        setLoginStatus(response.data[0].email);
      }
    })
  }

  const handleSubmit= (e)=>{
    e.preventDefault();
    if(username && password){
        console.log(username)
        console.log(password)
        setUsername('')
        setPassword('')
        }else {
          setIsCorectCridentials(true)
          setTimeout(()=>{
            setIsCorectCridentials(false)
          },1000)
        }
  }
return (
    <div className='form'>
    <form>
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <div className='itemForm'>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="username" label="Username" variant="standard" 
            type='text' value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
      </Box>
      </div>
      <div className='itemForm'>

      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="password" label="Password" variant="standard" 
            type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      </Box>
      { isCorectCridentials && <p className='important'>Incorrect Cridentials</p>}

      <div className='buttonForm'>
      <Box>
        <button id='buttonForm' type='Submit'  onClick={login}  >Connect</button>
      </Box>
      </div>
      </div>

    </Box>
    </form>
    </div>
  );
}
