import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import LoginService from '../services/LoginService';


class login extends Component {
    constructor(props){
        super(props);
        const token = localStorage.getItem("token")
        let loggedIn = true;
        if(token === null){
            loggedIn = false
        }
        this.state = {
            username: "",
            password: "",
            loggedIn
        }
        this.onChange = this.onChange.bind(this);
        this.LoginForm = this.LoginForm.bind(this);
    }
    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    LoginForm(e){
        e.preventDefault()
        let message = "";
        let role = "";
        const {username,password} = this.state
        LoginService.checkLogin(username,password).then(res =>{
            message = res.data.message
            role = res.data.role
            if(message === "Success"){
                localStorage.setItem("token","shamsh")
                localStorage.setItem("name",username)
                localStorage.setItem("role",role)
                this.setState({
                    loggedIn: true
                })
            }else{
                alert(message)
            }
        })
        
    }
    render() {
        if(this.state.loggedIn){
            return <Redirect to="/Admin"/>
        }
        return (
            <div>
                <h1>Login Form</h1>
                <form>
                    <label>User Name:</label>
                    <input type="text" name= "username" placeholder="username" value={this.state.username} onChange={this.onChange}></input><br/>
                    <label>Password:</label>
                    <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.onChange}></input><br/>
                    <button name="Login" onClick={this.LoginForm}>Login</button>
                </form>
            </div>
        );
    }
}

export default login;