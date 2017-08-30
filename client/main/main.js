import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route} from 'react-router-dom'
import Home from '../containers/Home'
import Profile from "../containers/Profile/index";
import Wrap from "../components/Wrap/index";
import Rank from "../containers/Rank/index";
import Join from "../containers/Join/index";
import Rules from "../containers/Rules/index";
import Myhome from "../containers/Myhome/Myhome";

ReactDOM.render(
  <Router>
    <Wrap>
      <Route exact path="/" component={Home} />
      <Route path="/rank" component={Rank} />
      <Route   path="/profile" component={Profile}/>
        <Route   path="/profile/myhome" component={Myhome}/>
      <Route exact path="/join" component={Join}/>
      <Route path="/join/rules" component={Rules}/>
    </Wrap>
  </Router>
  , document.querySelector('#root'));
