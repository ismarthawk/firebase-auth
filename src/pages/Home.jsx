import React from "react";
import Protected from "../components/Protected";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Home() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Protected>
        {user && (
          <section className="section container">
            <div className="is-flex is-flex-wrap-wrap is-align-content-space-between">
              <div>
                <figure className="image is-128x128 column">
                  <img className="is-rounded" src={user.photoURL} />
                </figure>
              </div>
              <div>
                <p className="is-size-1">{user.displayName}</p>
                <p className="is-size-5">emial : {user.email}</p>
                {user.phoneNumber && (
                  <p className="is-size-5">Phone : {user.phoneNumber}</p>
                )}
                <p className="is-size-5">
                  last login : {user.metadata.lastSignInTime}
                </p>
              </div>
            </div>
          </section>
        )}
      </Protected>
    </div>
  );
}

export default Home;
