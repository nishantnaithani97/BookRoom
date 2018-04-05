import React, { Component } from 'react';
export default class Login extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Login Page</h2>
                <hr></hr>
                <form >
                <input
                type = 'email'
                name = 'uemail'
                text = 'Email Address'
                required 
                // ref = {(input) => this.email = input } 
                placeholder = 'Enter your email address'
                />
                <input 
                type = 'password'
                name = 'Password'
                text = 'Password'
                required 
                // ref = {(input) => this.password = input }
                placeholder = 'Password' 
                />
                <input type = 'submit' name = 'submit' value = 'Login' />
                </form>
            </div>
        );
    }

}