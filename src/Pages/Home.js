import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import './../Css/Home.css';


const Home = () => (
  <div>
  <div id="homeBackground" >
      <div id="WelcomeScreen">
        <h1>Welcome to ABJS Event Managment Service.</h1>
        <p>We beleve in provdiding the best service to manage your event and to connect people.</p>
        <NavLink class="btn btn-primary" to="/Login"> Get Started </NavLink>
      </div>
    </div>
    <div is="aboutUs">
      <h2>About the Creaters</h2>
      <div>
        <h3>Amuliya</h3>
        <h3>Bhargav</h3>
        <h3>Joel</h3>
        <h3>Sneha</h3>
      </div>
    </div>
  </div>
);

export default Home;