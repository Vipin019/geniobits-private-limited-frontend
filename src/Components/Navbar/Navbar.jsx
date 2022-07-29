import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <div id="navbar">
      <div className="name">
        <h1>PiM</h1>
      </div>
      <div className="userPfile">
        <div className="userPfile__img">
          <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80" />{" "}
          {/* I have use this image for simplicity */}
        </div>
        <div className="userPfile__username">
          <small>User Name</small>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
