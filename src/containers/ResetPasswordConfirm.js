import React, { useState } from "react";
import {Navigate,useParams } from "react-router-dom";
import { connect } from "react-redux";
import { reset_password_confirm} from "../actions/auth";

const ResetPasswordConfirm = ({ reset_password_confirm}) => {
  const [requestSent, setRequestSent] = useState(false)
  const [formData, setFormData] = useState({
    new_password: "",
    re_new_password:""
  });
  const { new_password,re_new_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const { uid,token}=useParams()

  const onSubmit = (e) => {
    e.preventDefault();

    // const uid=match.param.uid;
    
    // const token=match.param.token; 
    reset_password_confirm(uid,token,new_password,re_new_password);
    setRequestSent(true);
  };
  
  if(requestSent){
    return <Navigate to='/login'/>
  }

  return (
    <div className="container mt-5">
      <h1>Change Password</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group mt-3">
          <input
            className="form-control"
            type="password"
            placeholder="New Password"
            name="new_password"
            value={new_password}
            onChange={(e => onChange(e))}
            required
          />
        </div>
        <div className="form-group mt-3">
          <input
            className="form-control"
            type="password"
            placeholder="Confirm New Password"
            name="re_new_password"
            value={re_new_password}
            onChange={(e => onChange(e))}
            required
          />
        </div>
        <button className="btn btn-primary mt-3" type="submit">Reset Password</button>
      </form>
    </div>
  );
};


export default connect(null,{reset_password_confirm})(ResetPasswordConfirm);
