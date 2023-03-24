import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    var[fname,setfname] = useState("chingu")

    const changeName = () =>{
        setfname("Arjun")
    }
  return (
    <div>
      <Typography>Welcome {fname}</Typography>
      <br></br>
      <Button variant='contained'onClick={changeName} >Change</Button>
    </div>
  )
}

export default Statebasics
