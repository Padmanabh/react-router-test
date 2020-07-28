import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UserList from "./UserList";
import AlbumList from "./AlbumList"
import Photos from "./Photos"

function App() {
  return (
    <div className="App">
      <Router>
        <ul className="nav nav-pills nav-fill flex-md-row flex-sm-column">
          <li className="nav-item"><NavLink exact activeClassName="active" className="nav-link" to="/">Home</NavLink></li>
          <li className="nav-item"><NavLink activeClassName="active" className="nav-link" to="/Users">Users</NavLink></li>
          <li className="nav-item"><NavLink activeClassName="active" className="nav-link" to="/About">About</NavLink></li>
          <li className="nav-item"><NavLink activeClassName="active" className="nav-link" to="/Contact">Contact</NavLink></li>
        </ul>
        <div className="d-flex main-contanier flex-md-row flex-sm-column">
          <div className="left">
            <Switch>
            <Route path="/Users" render={() => (<UserList />)}></Route>
            <Route exact={true} path="/" render={() => (<UserList />)}></Route>
            <Route path="/About" render={() => (<UserList />)}></Route>
              <Route path="/Contact" render={() => (<UserList />)}></Route>
          </Switch>
          </div>
          <div className="main">
            <Switch>
              <Route path="/About" render={() => (<div>About</div>)}></Route>
              <Route path="/Contact" render={() => (<div>Contact</div>)}></Route>
              <Route exact={true} path="/Users/:userID/albums" component={AlbumList}></Route>
              <Route path="/Users/:userID/albums/:albumID/photos" component={Photos}></Route>
              
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
