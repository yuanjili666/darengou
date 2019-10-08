import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux"   //生产  解决多个store问题
import store from "@store"
import { HashRouter as Router, Route } from "react-router-dom"
ReactDOM.render(
    <Provider store={store}>
        <Router>
          
            <Route path="/" component={App}></Route>
            
        </Router>
    </Provider>, document.getElementById('root'));
