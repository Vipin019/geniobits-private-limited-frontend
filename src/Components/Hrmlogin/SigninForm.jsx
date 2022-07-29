import React, { useEffect, useState } from "react";
import "./SigninForm.css";
import Hrmdashboard from "../Hrmdashboard/Hrmdashboard";

const SigninForm = () => {
  const [datas, setData] = useState([
    {
      name: "",
      email: "",
    },
  ]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch("https://gorest.co.in/public/v2/users")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setData(jsonRes));
  },[]);
  function onSubmit() {
    const enteredEmail = document.getElementById("email").value;
    const enteredName = document.getElementById("passward").value;
    const len = datas.length;
    for (var i = 0; i < len; i++) {
      if (
        enteredEmail === datas[i].email &&
        enteredName === datas[i].name
      ) {
        alert("Login successfully");
        setSuccess(true)
        break;
      }
      if (i == len - 1) {
        alert("login unsuccess, data does not matches with the data provided by api https://gorest.co.in/public/v2/users");
      }
    }
  }
  

  return(<div>
    {
      !success ? 
    <div id="signinForm">
      <div className="heading ccs">
        <h1>login
        </h1>
      </div>
      <form onSubmit={onSubmit}>
        <div className="email ccs">
          <input
            type="text"
            placeholder="Email Address*"
            required="true"
            id="email"
          />
        </div>
        <div className="passward ccs">
          <input
            type="text"
            placeholder="Passward*"
            required="true"
            id="passward"
          />
        </div>
        <div className="loginbtn ccs">
        <input type="submit" value="Login" />
        </div>
      </form>
    </div>
    :<Hrmdashboard/>
    }
    </div>
  )
  
};

export default SigninForm;
