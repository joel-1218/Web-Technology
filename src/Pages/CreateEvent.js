import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";

const CreateEvent = () => (
    <div>
        <div id="eventJoin">
    <h1>Create Event</h1>
    <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Event Name</span>
        <input type="text" class="form-control" placeholder="Event Name" aria-label="EventName" aria-describedby="basic-addon1"/>
    </div>
    <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Start Date</span>
        <input type="datetime-local" class="form-control" placeholder="Start Date" aria-label="StartDate" aria-describedby="basic-addon1"/>
    </div>
    <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">End Date</span>
        <input type="datetime-local" class="form-control" placeholder="End Date" aria-label="EndDate" aria-describedby="basic-addon1"/>
    </div>
    <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Limit</span>
        <input type="number" class="form-control" placeholder="Limit" aria-label="Limit" aria-describedby="basic-addon1"/>
    </div>
    <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Location</span>
        <input type="text" class="form-control" placeholder="Location" aria-label="Location" aria-describedby="basic-addon1"/>
    </div>
    <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Details</span>
        <input type="text" class="form-control" placeholder="Details" aria-label="Details" aria-describedby="basic-addon1"/>
    </div>
    <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">image</span>
        <input type="url" class="form-control" placeholder="image" aria-label="image" aria-describedby="basic-addon1"/>
    </div>
    <NavLink class="btn btn-primary" to="/Events">Exit</NavLink>
    <button class="btn btn-primary" type="button">Create</button>
</div>
</div>

);

export default CreateEvent;