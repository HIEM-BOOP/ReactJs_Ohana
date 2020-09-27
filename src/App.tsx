
import React from 'react';
import './App.css';
import ListRoomPage from './pages/ListRoomPage';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DetailRoomPage from './pages/DetailRoomPage';
import CreateRoomPage from './pages/CreateRoom';
import Login from './components/Login';
import SingUp from './components/SingUp';


function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/detail-room">
              <DetailRoomPage />
            </Route>
            <Route path="/create-room">
              <CreateRoomPage />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/SingUp">
              <SingUp />
            </Route>
            <Route path="/">
              <ListRoomPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
