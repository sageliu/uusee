import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route} from 'react-router-dom'
import Home from '../containers/Home'
import Profile from "../containers/Profile/index";
import Wrap from "../components/Wrap/index";
ReactDOM.render(
  <Router>
    <Wrap>
      <Route exact path="/" component={Home}/>
      <Route path="/profile" component={Profile}/>
    </Wrap>
  </Router>
  , document.querySelector('#root'));
