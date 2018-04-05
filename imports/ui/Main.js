import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default class Main extends Component {
    toRegister(e) {
        e.preventDefault();
        this.props.history.push('/register');
      }
    toLogin(e) {
        e.preventDefault();
        this.props.history.push('/login');
    }
    render() {
        return(
            <div className="container">
                <header>
                    <h1>RoomBook.in - Room Booking made simple.</h1>
                    <input type="button" value="register" name="register" onClick = { this.toRegister.bind(this) } />
                    <input type="button" value="login" name="login" onClick = { this.toLogin.bind(this) } />
                </header>
            </div>
        ); 
    }
}