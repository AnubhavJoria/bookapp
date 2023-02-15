import React from 'react'
import FormValidation from './Form/FormValidation'

function Add() {
  return (
    <div>
      <FormValidation name='' email='' book='' price={0} add = {true} editing={false} index={-1}/>
    </div>
  )
}

export default Add
