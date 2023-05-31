import React from "react";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/consts";
import { useAuthState } from "react-firebase-hooks/auth";
import { useContext } from "react";
import { Context } from "..";

const Navbar = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand">Real time chat</Link>
        <form className="d-flex" role="search">
          {user ? (
            <button
              className="btn btn-secondary"
              type="submit"
              onClick={() => auth.signOut()}
            >
              Logout
            </button>
          ) : (
            <Link to={LOGIN_ROUTE}>
              <button className="btn btn-secondary" type="submit">
                Login
              </button>
            </Link>
          )}
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
