import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Home = ({ isAuthenticated,accountActive}) => {
  return (
    <div className="container">
      {
        accountActive && (
          <div className="alert alert-info">Your account has been Activated 
  <strong> Successfully !</strong>
</div>
        )
      }
      <div className="jumbotron mt-5">
        <h1 className="display-4">Welcome to Auth System</h1>
        <p className="lead">
          This is an incredible authentication system with production level
          features !
        </p>

        <hr className="my-4" />
        <p>Click the Log In button</p>
        {isAuthenticated ? (
          <Link className="btn btn-primary btn-lg " to="/login" role="button">
            Signed In
          </Link>
        ) : (
          <Link className="btn btn-primary btn-lg " to="/login" role="button">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  accountActive:state.auth.accountActive
});

export default connect(mapStateToProps)(Home);
