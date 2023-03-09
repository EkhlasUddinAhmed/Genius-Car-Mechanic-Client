import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import Spinner from "../Spinner/Spinner";

const Protected = ({ children }) => {
  const location = useLocation();
  const { anyUser,isLoading } = useContext(AuthContext);
if(isLoading){
    return <Spinner></Spinner>
}

  if (!anyUser.email) {
    return (
      <Navigate
        to="/login"
        replace={true}
        state={{ from: location }}
      ></Navigate>
    );
  }
  return children;
};

export default Protected;
