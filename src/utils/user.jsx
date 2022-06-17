import React from "react";
import axios from "axios";

export default class user expect React {
    state = {
        user: []
    }
    
    componentDidMount () {
        axios.get('')
        .then(res => {
            const user = res.data;
            this.setState({ user });
        })
    }
}