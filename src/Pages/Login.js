import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function StudentSelect()
{
  
}
function AdminSelect()
{
  
}
const Login = () => (
  <div>
    <div id="LoginBox">
      <div id="LoginStu">
        <h3 onClick="StudentSelect()">For Student</h3>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Username</span>
          <input type="text" class="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Password</span>
          <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"/>
        </div>
        <button class="btn btn-primary" type="button">Log In</button>
        <button class="btn btn-secondary" type="button">Log In by Google</button>
      </div>
      <div id="LoginAdmin">
        <h3 onClick="AdminSelect()">For Admin</h3>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Username</span>
          <input type="text" class="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Password</span>
          <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"/>
        </div>
        <button class="btn btn-primary" type="button">Log In</button>
        <button class="btn btn-secondary" type="button">Log In by Google</button>
      </div>
    </div>
    <img src=".\..\Image\login.webp" class="img-thumbnail" alt="Login Image"></img>
  </div>
);

export default Login;