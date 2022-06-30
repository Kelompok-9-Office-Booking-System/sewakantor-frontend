import { useState, useEffect } from "react";

const useForm = validate => {
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email:'',
    password:'',
    password2:''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  useEffect(() => {
    setErrors('');
  }, [values])

  // useEffect(() => {
  //   if (Object.keys(errors).length === 0 )
  // })

  return { handleChange, values, handleSubmit, errors};
};

export default useForm