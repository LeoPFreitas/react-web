import React from "react";

import SignIn from "../../components/signin/SignIn";
import SignUp from "../../components/signup/signUp";

import "./styles.scss";

const Sign = () => {
  return (
    <div className="sign">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Sign;
