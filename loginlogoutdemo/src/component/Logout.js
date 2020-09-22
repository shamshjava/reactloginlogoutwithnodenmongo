import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Logout extends Component {
    constructor(props){
        super(props)
        localStorage.removeItem("token")
    }
    render() {
        return (
            <div>
                <h1>You hae successfully Lougged out</h1>
                <Link to="/">Log in again</Link>
                
            </div>
        );
    }
}

export default Logout;