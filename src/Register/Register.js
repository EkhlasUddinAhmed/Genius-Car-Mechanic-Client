import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import login from '../assets/images/login/login.svg';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const {googleUser,
    anyUser,
    setAnyUser,
    isLoading, 
    setIsLoading,
    signOutHandler,
    customUserSignIn,
    createCustomUser,
    updateCustomUser,
    sendUserEmailVerificationEmail}=useContext(AuthContext);

    const formRegistrationhandler=(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        const registeredUser={
            name,email,password
        }
        createCustomUser(email,password)
        .then((userCredential) => {
          
          const user = userCredential.user;
          console.log("Custom User is:",user);
          updateCustomUser({displayName:name})
          .then(() => {
            sendUserEmailVerificationEmail()
            .then(() => {
              toast("Email is sent for verification");
            });
            // toast("Your Registration is Successfull");
            e.target.reset();
          }).catch((error) => {
            const errorMessage = error.message;
            toast(errorMessage);
            
          });
          



          
        })
        .catch((error) => {
          
          const errorMessage = error.message;
          toast(errorMessage);
        });
        console.log(registeredUser);
    }
    return (
        <div className="container my-5 ">
      <div className="row">
        
        <div className="col-md-6">
            <img src={login} alt="" />
        </div>
        <div className="col-md-6 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <h1 className="text-danger text-center">Register to Your Account</h1>
          <form onSubmit={formRegistrationhandler}>

          <div class="mb-3">
              <label for="exampleInputName" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputName"
                aria-describedby="nameHelp"
                name="name"
              />
            </div>
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
              Register
            </button>
          </form>
          <p className='mt-3 text-center fs-5'>Already Registered!! <Link to="/login">Go To LogIn</Link></p>
        </div>
      </div>
    </div>
    );
};

export default Register;