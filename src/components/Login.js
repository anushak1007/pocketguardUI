import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useState } from "react";

function Login(props) {
  var navigate = useNavigate();
  var [user, setUser] = useState({});
  function getEmail(e) {
    user.email = e.target.value;
    setUser(user);
    //console.log(user.email)
  }
  function getPassword(e) {
    user.password = e.target.value;
    setUser(user);
    //console.log(user.password)
  }
  function onLogin(e) {
    e.preventDefault();

    if (user.email && user.password) {
      alert(`User email: ${user.email}, Password: ${user.password}`);
      axios({
        url: "http://localhost:5050/user/login",
        method: "post",
        data: user,
      })
        .then(function (res) {
          console.log(
            "Resposne from API is : ",
            res,
            res.headers.authorization
          );
          localStorage.setItem("token", res.headers.authorization);
          console.log(localStorage.getItem("token"));
          //props.logindone();
          //navigate to profile page
          if (localStorage.getItem("token")) {
            navigate("/dashboard", { replace: true });
          } else {
            navigate("/profile", { replace: true });
          }
        })
        .catch(function (err) {
          console.log("Error from API is: ", err);
        });
    }
  }
  return (
    <div className="container">
      <div className="col-md-4">
        <h1>Login Here</h1>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              placeholder="Username"
              onChange={getEmail}
            ></input>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="text"
              placeholder="Password"
              onChange={getPassword}
            ></input>
          </div>
          <div className="form-group">
            <button type="Submit" onClick={onLogin}>
              Submit
            </button>
          </div>
        </form>
        <Link to="/register">New User?</Link>
        <br></br>
        <Link to="/forgot">Forgot Password</Link>
      </div>
    </div>
  );
}
export default Login;
