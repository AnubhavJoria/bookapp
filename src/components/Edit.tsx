import Table from './Table'
import React from 'react'
import { Typography } from '@mui/material';
import { useState } from 'react';
import FormValidation from './Form/FormValidation';

function Edit() {

    const[isVisible, setIsVisible]= useState(false);
    const [index, setIndex] = useState(-1);
    const changeVisiblilty = (ind : any) =>{
        setIsVisible(true);
        setIndex(ind);
    }

  return (
    <div>
        <Typography variant='h5'> Edit Entries </Typography>
        {
    isVisible?
    <FormValidation add={false} editing={true} index = {index} /> : 
      < Table editing="true" delete='false' changeVisibility={changeVisiblilty}/> 
        }
    </div>
  )
}

export default Edit
