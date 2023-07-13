import React from "react";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function Login() {
  const [btnLoading, setBtnLoading] = useState(false);
  const { user } = useContext(AuthContext);
  if (user) {
    return <Navigate to="/" />;
  }
  const { signin } = useContext(AuthContext);
  return (
    <div>
      <section className="section container has-text-centered">
        <p className="is-size-1 has-text-weight-light mb-6">
          Login to continue
        </p>
        <button
          className={`button is-large ${btnLoading ? "is-loading" : ""}`}
          onClick={(e) => {
            setBtnLoading(true);
            signin();
          }}
        >
          <span className="icon">
            <i className="fab fa-google"></i>
          </span>
          <span>Sign In with Google</span>
        </button>
      </section>
    </div>
  );
}

export default Login;
