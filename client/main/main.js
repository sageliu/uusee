import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route} from 'react-router-dom'
import Home from '../containers/Home'
import Profile from "../containers/Profile/index";
import Wrap from "../components/Wrap/index";
import Rank from "../containers/Rank/index";
import Join from "../containers/Join/index";
import Rules from "../containers/Rules/index";
import store from '../redux/store'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux';
import createHistory from 'history/createHashHistory';
window._store = store;
let history = createHistory();
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
    <Wrap>
      <Route exact path="/" component={Home} />
      <Route path="/rank" component={Rank} />
      <Route path="/profile" component={Profile}/>
      <Route exact path="/join" component={Join}/>
      <Route path="/join/rules" component={Rules}/>
    </Wrap>
    </ConnectedRouter>
  </Provider>
  , document.querySelector('#root'));
