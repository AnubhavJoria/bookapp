import Table from './Table'
import React from 'react'
import { Typography } from '@mui/material';
import { useState } from 'react';
import FormValidation from './Form/FormValidation';

function Edit() {

    const[isVisible, setIsVisible]= useState(false);
    const [index, setIndex] = useState(-1);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [book, setBook] = useState("");
    const [price, setPrice] = useState(0);

    const changeVisiblilty = (row : any, ind : any) =>{
      console.log(ind)
        setIsVisible(true);
        setIndex(ind);
        setName(row.name);
        setEmail(row.email)
        setBook(row.book)
        setPrice(row.price)
    
    }

  return (
    <div>
        <Typography variant='h5'> Edit Entries </Typography>
        {
    isVisible?
    <FormValidation name = {name}  email = {email} book = {book}  price = {price}  add={false}  editing={true} index = {index} /> : 
      < Table editing="true" delete='false' changeVisibility={changeVisiblilty} /> 
        }
    </div>
  )
}

export default Edit
