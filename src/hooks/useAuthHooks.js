import { useEffect, useState } from "react";
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged,signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile,sendEmailVerification } from "firebase/auth";

import auth from '../Firebase/firebase.init';


const useAuthHooks = () => {
    
    const [anyUser,setAnyUser]=useState(null);
    const [isLoading, setIsLoading]=useState(true);
    const provider = new GoogleAuthProvider();

    const googleUser=()=>{
        setIsLoading(true);
        return signInWithPopup(auth, provider)
    }
    const signOutHandler=()=>{
        localStorage.removeItem("Access_Token");
        return signOut(auth);
          
    }

    const customUserSignIn=(email,password)=>{
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);

    }
    
    const createCustomUser=(email,password)=>{
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const updateCustomUser=(userObject)=>{
        return updateProfile(auth.currentUser,userObject)
    }

  const sendUserEmailVerificationEmail=()=>{
    return sendEmailVerification(auth.currentUser);
  }

    useEffect(()=>{
        const unsubscribed=onAuthStateChanged(auth, (user) => {
            if (user) {
                setAnyUser(user)
                console.log("From AuthStateChange:",user);
                setIsLoading(false);
            } else {
                setAnyUser({});
                console.log("From AuthStateChange:",user);
            }
          });

          return ()=>{
            unsubscribed();
          }
    },[])
    
    return {
        googleUser,
        anyUser,
        setAnyUser,
        isLoading, 
        setIsLoading,
        signOutHandler,
        customUserSignIn,
        createCustomUser,
        updateCustomUser,
        sendUserEmailVerificationEmail
    };
};

export default useAuthHooks;