import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/1logo.png";

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{
        padding: "0.8rem 3rem",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Link className="navbar-brand mt-2 mt-lg-0" to={"/"}>
            <img src={logo} height="50" alt="MDB Logo" loading="lazy" />
            <span
              style={{
                marginLeft: "15px",
                fontSize: "1.5rem",
                fontWeight: "500",
              }}
            >
              <i>Clean Waves</i>
            </span>
          </Link>
        </div>

        <div className="d-flex">
          <button
            style={{
              borderRadius: "10px",
              backgroundColor: "white",
              border: "1px solid rgba(0,0,0,0.1)",
              padding: "0.5rem 1.3rem",
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png?w=826&t=st=1683198458~exp=1683199058~hmac=c430349ec56b0918e8c14689b3cea601b7df3233a082703ca736e8758edfd22d"
              className="rounded-circle"
              height="25"
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
            <spna style={{ marginLeft: "10px" }}>admin</spna>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
