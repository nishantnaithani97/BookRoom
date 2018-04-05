import React, { Component } from 'react';
export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            email: '',
            password: '',
        }
    }
    validateName () {
        const name = this.name.value;
            let re=/^[a-zA-Z][a-zA-Z0-9. _]+$/;
            return re.test(value);
    }
    validateEmail () {

    }
    handleInput (e) {
        e.preventDefault();
        const name = this.name.value;
        const email = this.email.value;
        const pass = this.password.value;
        this.setState = {
            name: name,
            email: email,
            password: pass, 
        }
        console.log(name);
        console.log(email);
        console.log(pass);
      }
    render() {
        return (
            <div>
                <h2>Registration Page</h2>
                <hr></hr>
                <form onSubmit={ this.handleInput.bind(this) }>
                    <table>
                        <tr>
                            <td>
                                <input 
                                type = 'name'
                                name = 'name' 
                                required  
                                ref = {(input) => this.name = input }
                                placeholder = 'Enter your name'

                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                type = 'text'
                                name = 'email'
                                required 
                                ref = {(input) => this.email = input } 
                                placeholder = 'Enter your email address'

                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input 
                                type = 'password'
                                name = 'password'
                                required 
                                ref = {(input) => this.password = input }
                                placeholder = 'Password' 

                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input 
                                type = 'password'
                                name = 'confirmPassword'
                                required 
                                ref = {(input) => this.confirmPassword = input }
                                placeholder = 'Confirm Password'
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input 
                                type = 'submit' 
                                name = 'register' 
                                value = 'Register' />
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        );
    }

}