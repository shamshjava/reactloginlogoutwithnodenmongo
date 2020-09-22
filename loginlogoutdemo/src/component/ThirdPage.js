import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class ThirdPage extends Component {
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
        }else if(localStorage.getItem("role") !== 'admin'){
            alert('Only Admin can see this page');
            return <Redirect to="/SecondPage"/>
        }
        return (
            <div>
                <h1>Hello {localStorage.getItem("name")}, This is Admin page and only Authorize people can see !!!!</h1>
                <Link to="/Admin">Go to First page</Link><br/>
                <Link to="/SecondPage">Go to Second page</Link><br/>
                <Link to="/Logout">Logout</Link>
            </div>
        );
    }
}

export default ThirdPage;