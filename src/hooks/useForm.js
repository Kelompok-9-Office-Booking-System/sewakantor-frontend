import axios from "axios";
import { useState, useEffect } from "react";
import { Redirect, useNavigate } from "react-router-dom";
import routes from "../routes";
import useLocalstorage from "./useLocalstorage";

const REGISTER_URL = "http://54.211.120.43/api/v1/customer/auth/register";
const LOGIN_URL = "http://54.211.120.43/api/v1/customer/auth/login";

const useForm = (validate) => {
  const navigate = useNavigate();
  const { setLSValue } = useLocalstorage();

  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});
  const [showpassword, setShowpassword] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setShowpassword((prevState) => !prevState);
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const getError = await validate(values);

    setErrors(getError);
    if (Object.keys(getError).length > 0) {
      return;
    }

    try {
      const response = await axios.post(REGISTER_URL, {
        email: values.email,
        password: values.password,
        firstName: values.firstname,
        lastName: values.lastname,
      });

      if (response.status === 400) {
        alert("Email already exists");
        return;
      }
      if (response.status === 200) {
        alert("Successfully registered");
        return navigate(routes.login);
      }
    } catch (err) {
      if (!err.response) {
        setErrors("No Server Response");
      } else if (err.response?.status === 409) {
        setErrors("Username Taken");
      } else {
        setErrors("Registration Failed");
      }
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const getError = await validate(values);

    setErrors(getError);
    if (Object.keys(getError).length > 0) {
      return;
    }

    try {
      const response = await axios.post(LOGIN_URL, {
        email: values.email,
        password: values.password,
      });

      if (response.status === 400) {
        console.log(response.data);
        alert(response.data.message);
        return;
      }
      if (response.status === 404) {
        alert(response.data.message);
        return;
      }
      if (response.status === 200) {
        alert("Logged in");
        setLSValue("auth", {
          name: response.data.data.username,
          role: response.data.data.role,
          token: response.data.data.token,
        });
        return navigate(routes.home, { replace: true });
      }
    } catch (error) {
      console.log(error);
      return alert(error);
    }
  };

  useEffect(() => {
    setErrors("");
  }, [values]);

  return {
    handleChange,
    values,
    handleSubmit,
    handleLogin,
    errors,
    showpassword,
    handleToggle,
  };
};

export default useForm;
