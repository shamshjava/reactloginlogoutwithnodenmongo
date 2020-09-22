import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Admin extends Component {
    constructor(props){
        super(props)
        let loggedIn = true
        const token = localStorage.getItem("token")
        if(token === null){
            loggedIn = false
        }
        this.state ={
            loggedIn
        }
    }
    render() {
        if(this.state.loggedIn === false){
            return <Redirect to="/"/>
        }
        return (
            <div>
                <h1>Hello {localStorage.getItem("name")}, This is First Page !!!!</h1>
                <Link to="/SecondPage">Go to second page</Link><br/>
                <Link to="/Logout">Logout</Link>
            </div>
        );
    }
}

export default Admin;