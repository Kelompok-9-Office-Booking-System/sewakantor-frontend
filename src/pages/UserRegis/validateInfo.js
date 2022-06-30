export default function validateInfo(values) {
    let errors = {}

    if (!values.firstname.trim()) {
        errors.firstname = "First Name is required"
    } else if (!/^[A-Za-z\s]{1,}[.]{0,1}[A-Za-z\s]{0,}$/.test(values.firstname)) {
        errors.firstname = 'First Name is Invalid';
    }

    if (!values.lastname.trim()) {
        errors.lastname = "Last Name is required";
    } else if (!/^[A-Za-z\s]{1,}[.]{0,1}[A-Za-z\s]{0,}$/.test(values.lastname)) {
        errors.lastname = 'Last Name is Invalid';
    }

    if (!values.email) {
        errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    if (!values.password) {
        errors.password = 'Password is required';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/.test(values.password)) {
        errors.password = 'Password must be requires at least 1 lower case letter, 1 upper case letter, 1 number, and 1 special character';
    }

    if (!values.password2) {
        errors.password2 = 'Password is required';
    } else if (values.password2 !== values.password) {
        errors.password2 = 'Passwords do not match';
    }
    return errors;
}