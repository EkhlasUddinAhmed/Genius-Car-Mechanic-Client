import React, { useContext } from "react";
import "./LogIn.css";
import login from '../../assets/images/login/login.svg';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LogIn = () => {

  const location=useLocation();
  const navigate=useNavigate();
  const REDIRECT_URL=location.state?.from?.pathname || '/'
  
  const {googleUser,
    anyUser,
    setAnyUser,
    isLoading, 
    setIsLoading,
    customUserSignIn}=useContext(AuthContext);




const formSubmithandler=(e)=>{
  e.preventDefault();
  const email=e.target.email.value;
  const password=e.target.password.value;
  const logInUser={
    email,password
  }

  console.log(logInUser);
  customUserSignIn(email,password)
  .then((userCredential) => {
    
    const user = userCredential.user;
    setAnyUser(user);
    const loggedUser={
      email:user.email,
      name:user.displayName
    }
    console.log("From Custom User:",user);
    tokenReceiver(loggedUser);
    navigate(REDIRECT_URL,{replace:true});
  })
  .catch((error) => {
    
    const errorMessage = error.message;
    toast(errorMessage);
    
  });
}

const googleUserHandled=()=>{
      googleUser()
      .then((result) => {
        
        
        const user = result.user;
        console.log("New Google User Is:",user);
        setAnyUser(user);
        tokenReceiver(user);
        navigate(REDIRECT_URL,{replace:true});
      }).catch((error) => {
        
        const errorMessage = error.message;
        console.log("Error:",errorMessage);
        toast(errorMessage);
        
      });
}


const tokenReceiver=(loggedUser)=>{
  fetch('https://genius-car-server-xi-rust.vercel.app/jwt/security',{
      method:"POST",
      headers:{
        "content-type":"application/json",
      },
      body:JSON.stringify(loggedUser)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log("From Client Side:",data);
      localStorage.setItem("Access_Token",data.token);
    })
}

  return (
    <div className="container my-5 ">
      <div className="row">
        
        <div className="col-md-6">
            <img src={login} alt="" />
        </div>
        <div className="col-md-6 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <h1 className="text-danger text-center">Log In Please</h1>
          <form onSubmit={formSubmithandler}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                name="password"
              />
            </div>

            <button type="submit" class="btn btn-danger w-100 mt-3">
              LogIn With Email And Password
            </button>
          </form>
          <p className='mt-3 text-center fs-5'>New In This Site? <Link to="/register">Go To Register</Link></p>
          <h5 className="mt-4 text-center">----------------------------OR---------------------------</h5>
          <button 
          onClick={googleUserHandled}
          className="btn btn-primary w-100 mt-3">Google LogIn </button>
        </div>
        
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default LogIn;
