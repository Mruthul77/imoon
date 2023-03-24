import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statetask = () => {
    var[pagename,setPagename] = useState("")

    const changeName = () =>{
        setPagename("Home page")
    }
    const changeGallery = () =>{
        setPagename("Gallery page")
    }
    const changeNameA = () =>{
        setPagename("Contact page")
    }
  return (
    <div>
        <br></br>
        <Button variant='contained' color='primary'onClick={changeName}>Home page</Button>
        <Button variant='contained' color='secondary'onClick={changeGallery}>Gallery page</Button>
        <Button variant='contained' color='error'onClick={changeNameA}>Contact page</Button>
        <Typography>Welcome to {pagename}</Typography>
      
    </div>
  )
}

export default Statetask
