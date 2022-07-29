import React from "react";
import axios from "axios";

const Employcontactdet = () => {

    function onSubmit(){
        const enteredAddress=document.getElementById("employcontactdet__address").value
    const enteredPhoneNo=document.getElementById("employcontactdet__phoneNo").value
    const enteredEmail=document.getElementById("employcontactdet__email").value

    const regestred = {
        address: enteredAddress,
        phoneno: enteredPhoneNo,
        email: enteredEmail
      };

      axios
      .post("https://geniobits.herokuapp.com/api/address", regestred)
      .then((res) => console.log(res.data));
      alert("Address saved to data base")
    }

  return (
    <div id="employcontactdet">
      <form onSubmit={onSubmit}>
      <div className="address">
        <label htmlFor="employcontactdet__address">Employee Address</label>
        <input type="text" id="employcontactdet__address" />
      </div>
      <div className="phoneNo">
        <label htmlFor="employcontactdet__phoneNo">Employee Phone no</label>
        <input type="text" id="employcontactdet__phoneNo" />
      </div>
      <div className="email">
        <label htmlFor="employcontactdet__email">Employee Email</label>
        <input type="text" id="employcontactdet__email" />
      </div>
      <div className="save">
      <a href="/addemploy"><input type="submit" id='employcontactdet__submit' value='Save' /></a>
      </div>
      </form>
    </div>
  );
};

export default Employcontactdet;
