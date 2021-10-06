import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";

const EventPage = () => (
    <div>
        <NavLink class="btn btn-primary" to="/Events"> Go Back </NavLink>
        <div is="eventDetails">
            {/*image*/}
            <h1>Event Name</h1>
            <h2>Details</h2>
            <h3>Start Time : </h3>
            <h3>End Time : </h3>
            <h3>Limit : </h3>
            <h3>Location : </h3>
            <p>About : </p>
        </div>
        <div id="eventJoin">
            <h1>Join Event</h1>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">First Name</span>
                <input type="text" class="form-control" placeholder="First Name" aria-label="Fname" aria-describedby="basic-addon1"/>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Last Name</span>
                <input type="text" class="form-control" placeholder="Last Name" aria-label="Lname" aria-describedby="basic-addon1"/>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Email</span>
                <input type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"/>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Number</span>
                <input type="number" class="form-control" placeholder="Number" aria-label="Number" aria-describedby="basic-addon1"/>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Semister</span>
                <input type="number" class="form-control" placeholder="Semister" aria-label="Semister" aria-describedby="basic-addon1"/>
            </div>
            <button class="btn btn-primary" type="button">Register</button>
        </div>
    </div>

);

export default EventPage;