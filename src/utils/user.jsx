import React from "react";
import Login from "./pages/AdminLogin";
import axios from "axios";

export default class user extends React {
    state = {
        user: []
    }
    
    componentDidMount () {
        axios.get('/v1/admin/auth/login')
        .then(res => {
            const user = res.data;
            this.setState({ user });
        })
    }
}