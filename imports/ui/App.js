import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './Main';
import Login from './Login.js';
import Register from './Register.js';
import Task from './Task.js';
 

export default class App extends Component {

 
  render() {
    return (
      <div>
        <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Main}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/register" component={Register}/> 
                    </Switch>
                </BrowserRouter>
            </div>
      </div>
    );
  }
}