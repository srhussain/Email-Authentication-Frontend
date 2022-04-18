import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../actions/auth";

const Signup = ({ signup, isAuthenticated }) => {
  const [accountCreated, setAccountCreated] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    re_password: "",
  });
  const { name, email, password, re_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password === re_password) {
      signup(name, email, password, re_password);
      // setAccountCreated(true);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  // if (!isAuthenticated) {
  //   return <Navigate to="/signup" />;
  // }
  // if(accountCreated){
  //   return <Navigate to='/login'/>

  // }

  return (
    <div className="container mt-5">
      {/* {
        passwordChanged && (
          <div className="alert alert-info">Your Password has been changed 
  <strong>Successfully !</strong>Login with New Password
</div>
        )
      } */}
      {!isAuthenticated && (
        <div className="alert alert-danger" role="alert">
          User account with this email already exists.
          <strong> ! </strong>
        </div>
      )}
      <h1>Sign Up </h1>
      <p>Register Your Account</p>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group mt-3">
          <input
            className="form-control"
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group mt-3">
          <input
            className="form-control"
            type="email"
            placeholder="Email*"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group mt-3">
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            minLength="6"
            required
          />
        </div>
        <div className="form-group mt-3">
          <input
            className="form-control"
            type="password"
            placeholder="Confirm Password"
            name="re_password"
            value={re_password}
            onChange={(e) => onChange(e)}
            minLength="6"
            required
          />
        </div>
        <button className="btn btn-primary mt-3" type="submit">
          Register
        </button>
      </form>
      <p className="mt-3">
        Already have an account ? <Link to="/login">Login</Link>
      </p>
      <p className="mt-3">
        Forgot your Password ? <Link to="/reset-password">Reset Password</Link>
      </p>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signup })(Signup);
