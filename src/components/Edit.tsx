import Table from './Table'
import React from 'react'
import { Typography } from '@mui/material';
import { useState } from 'react';
import FormValidation from './Form/FormValidation';

function Edit() {

    const[isVisible, setIsVisible]= useState(false);

    const changeVisiblilty = () =>{
        setIsVisible(true);
    }

  return (
    <div>
        <Typography variant='h5'> Edit Entries </Typography>
        {
    isVisible?
    <FormValidation/> : 
      < Table editing="true" delete='false' changeVisibility={changeVisiblilty}/> 
      
        }
    </div>
  )
}

export default Edit
