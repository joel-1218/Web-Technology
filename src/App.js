import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from './Components/Navbar';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Events from './Pages/Events';
import ErrorP from './Pages/Error';
import EventPage from './Pages/EventPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from './Pages/Calender';
import CreateEvent from './Pages/CreateEvent';
function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Events">
            <Events />
          </Route>
          <Route path="/EventPage">
            <EventPage />
          </Route>
          <Route path="/Calendar">
            <Calendar />
          </Route>
          <Route path="/CreateEvent">
            <CreateEvent/>
          </Route>
          <Route path="*">
            <ErrorP/>
          </Route>
          
        </Switch>
    </Router>
    
  );
}


export default App;
