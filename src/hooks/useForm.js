import axios from "axios";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2'

const REGISTER_URL = "http://54.211.120.43/api/v1/customer/auth/register";

const useForm = validate => {
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email:'',
    password:'',
    password2:''
  })
  const [errors, setErrors] = useState({})
  const [showpassword, setShowpassword] = useState(false)

  const handleToggle = () => {
    setShowpassword(prevState => !prevState)
  }

  const handleChange = e => {
    setValues({
        ...values,
        [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const getError = await validate(values)

    setErrors(validate(values));
    if(Object.keys(getError).length > 0) {
      return;
    }

    try {
      const response = await axios.post(
        REGISTER_URL,
        {
          "email": values.email,
          "password": values.password,
          "firstName": values.firstname,
          "lastName": values.lastname
        },
        {
          headers: {
            Authorization:
            'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqaG9uZG9lQG1haWwuY29tIiwiZXhwIjoxNjU2MzM1MzA2LCJpYXQiOjE2NTYzMTczMDZ9.zRnaXeVa9k4cIKslLpPDckBOibkVMbLgb2rpdkJMbH1fKPNZmLMccSj4PvGeZi4Q-x0-SPXZcrz8PvuQm7fyRA',
          }
        })

        if(response.status === 400){
          Swal.fire({
            title: 'Sorry!',
            text: 'Email already exists',
            icon: 'error',
            confirmButtonText: 'OK'
          })
          return;
        } 
        
        if (response.status === 200) {
          Swal.fire({
            title: 'Success!',
            text: 'Succesfully registered',
            icon: 'success',
            confirmButtonText: 'OK'
          })
        }
        console.log(response.data)
    } catch (err) {
      if(!err.response) {
        setErrors('No Server Response');
      } else if (err.response?.status === 409) {
        setErrors('Username Taken');
      } else {
        setErrors('Registration Failed')
      }
    }
  }

  useEffect(() => {
    setErrors('');
  }, [values])

  

  return { handleChange, values, handleSubmit, errors, showpassword, handleToggle};
};

export default useForm