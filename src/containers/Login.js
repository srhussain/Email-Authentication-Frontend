import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions/auth";

const Login = ({ login, isAuthenticated,isError,success, passwordChanged }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container mt-5">
          
          
      {
        passwordChanged && (
          <div className="alert alert-info">Your Password has been changed 
  <strong>Successfully !</strong>Login with New Password
</div>
        )
      }
      {
        success && (
          <div className="alert alert-info">We have sent an Email to your account Please 
  <strong> Verify !</strong> your account
</div>
)

      }
      {
        isError && (
          <div className="alert alert-danger" role="alert">Username and Password are
  <strong> Invalid !</strong>
</div>
        )
      }
      <h1>Sign In </h1>
      <p>Sign into your Account</p>
      <form  className="login-form"  onSubmit={(e) => onSubmit(e)}>
        <div className="form-group mt-3">
          <input
            className="form-control"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e => onChange(e))}
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
            onChange={(e => onChange(e))}
            minLength='6'
            required
          />
        </div>
        <button className="btn btn-primary mt-3" type="submit">Login</button>
      </form>
      <p className="mt-3">
        Don't have an account ? <Link to="/signup">Sign Up</Link>
      </p>
      <p className="mt-3">
        Forgot your Password ? <Link to="/reset-password">Reset Password</Link>
      </p>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  passwordChanged: state.auth.passwordChanged,
  isError:state.auth.isError,
  success:state.auth.success
});

export default connect(mapStateToProps, { login })(Login);
