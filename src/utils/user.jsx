import React from "react";
import Login from "./pages/UserLogin";
import axios from "axios";

export default class user extends React {
    state = {
        user: []
    }
    
    componentDidMount () {
        axios.get('/v1/customer/auth/login')
        .then(res => {
            const user = res.data;
            this.setState({ user });
        })
    }
}