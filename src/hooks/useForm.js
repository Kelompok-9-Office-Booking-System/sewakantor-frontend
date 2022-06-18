import { useState, useEffect } from "react";

import React from 'react'

const useForm = (validate) => {
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email:'',
    password:'',
    password2:''
  })
  const [errors, setErrors] = useState({})

  const handleChange = e => {
    setValues({
        ...values,
        [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
  }

  return{handleChange, values, handleSubmit, errors};
};

export default useForm