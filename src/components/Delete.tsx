import React from 'react'
import { Typography } from '@mui/material'
import Table from './Table'


function Delete() {
    const changeVisibility = () =>{
    
    }


  return (
   
       <div>
        <Typography variant='h5'>Delete Entries </Typography>
        {

        < Table editing='false' changeVisibility={changeVisibility} delete="true" />
        }
    </div>
  
  )
}

export default Delete
