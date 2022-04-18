import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Activate from "./containers/Activate";
import Home from "./containers/Home";
import Login from "./containers/Login";
import ResetPassword from "./containers/ResetPassword";
import ResetPasswordConfirm from "./containers/ResetPasswordConfirm";
import Signup from "./containers/Signup";
import Layout from "./hocs/Layout";

import { Provider } from "react-redux";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/signup" element={<Signup />} exact />
          <Route path="/reset-password" element={<ResetPassword />} exact />
          <Route
            path="/password/reset/confirm/:uid/:token"
            element={<ResetPasswordConfirm />}
            exact
          />
          <Route path="/activate/:uid/:token" element={<Activate />} exact />
        </Routes>
      </Layout>
    </Router>
  </Provider>
);

export default App;
