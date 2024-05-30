import React from 'react'

import Input from '../../Shared/FormElements/Input'

import "./NewPlaces.css"


export default function NewPlaces() {
  return (
    <form className='place-form'>
      <Input element="input" type="text" label="Title" vaildator={[]} errorText="Please enter a valid title. "></Input>
    </form>
  )
}
