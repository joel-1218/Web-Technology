import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
  return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">ABJS</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <NavLink class="nav-link" to="/"> Home </NavLink>
                        <NavLink class="nav-link" to="/Login"> Login </NavLink>
                        <NavLink class="nav-link" to="/Events"> Events </NavLink>
                        <NavLink class="nav-link" to="/Calendar"> Calendar </NavLink>
                    </div>
                </div>
            </div>
        </nav>
  );
};

export default Navbar;