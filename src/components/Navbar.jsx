import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="is-flex p-3 is-flex-wrap-wrap is-justify-content-space-between is-align-content-center">
      <div className="">
        <p className="title">Firebase-Auth</p>
      </div>
      {user && (
        <div className="">
          <button
            className="button is-dark"
            onClick={async () => {
              await logout();
              navigate("/login");
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
