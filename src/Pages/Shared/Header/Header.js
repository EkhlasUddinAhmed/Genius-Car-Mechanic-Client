import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

import auth from "../../../Firebase/firebase.init";

const Header = () => {
  const { googleUser, anyUser, setAnyUser, isLoading, setIsLoading,signOutHandler } =
    useContext(AuthContext);

  const logOuthandler = () => {
    signOutHandler()
    .then(() => {
      setAnyUser({});
    }).catch((error) => {
      console.log("From Sign Out:",console.error.message);
    });
    
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/testing" className="nav-link">
                Testing
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dependent" className="nav-link">
                Dependent
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/orders" className="nav-link">
                Orders
              </Link>
            </li>

            {anyUser?.email ? (
              <li className="nav-item">
                <Link onClick={logOuthandler} to="/" className="nav-link ">
                  LogOut
                </Link>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link ">
                    LogIn
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link ">
                    Register
                  </Link>
                </li>
              </>
            )}
            <li className="nav-item">
              <Link className="nav-link ">
                <button className="btn btn-danger">Appointment</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
