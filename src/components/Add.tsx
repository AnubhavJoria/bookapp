import React from 'react'
import FormValidation from './Form/FormValidation'

function Add() {
  return (
    <div>
      <FormValidation add = {true} editing={false} index={-1}/>
    </div>
  )
}

export default Add
