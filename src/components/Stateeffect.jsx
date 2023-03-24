import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

const Stateeffect = () => {
    var [value,setvalue]= useState();
    
  return (
    <div>
      <Typography variant='h1'>{value}</Typography>
    </div>
  )
}

export default Stateeffect
