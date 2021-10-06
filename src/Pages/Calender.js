import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";

const Calendar = () => (
    <div>
        <div>
            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    {/*Event Image */}
                    Event name 1
                    <h6>Start Data</h6>
                    <h6>End Data</h6>
                    <span class="badge bg-primary rounded-pill">Time left</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    {/*Event Image */}
                    Event name 2
                    <h6>Start Data</h6>
                    <h6>End Data</h6>
                    <span class="badge bg-primary rounded-pill">2H</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    {/*Event Image */}
                    Event name 2
                    <h6>Start Data</h6>
                    <h6>End Data</h6>  
                    <span class="badge bg-secondary rounded-pill">1M</span>
                </li>
            </ul>
        </div>
    </div>

);

export default Calendar;