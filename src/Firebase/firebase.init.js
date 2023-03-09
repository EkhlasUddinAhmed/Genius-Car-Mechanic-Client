
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId, 
// };


const firebaseConfig = {
  apiKey: "AIzaSyAXpfNfr_OQm6_0RGgsoL9opODU2Ra1f3c",
  authDomain: "genius-car-mechanic-67c32.firebaseapp.com",
  projectId: "genius-car-mechanic-67c32",
  storageBucket: "genius-car-mechanic-67c32.appspot.com",
  messagingSenderId: "860352861611",
  appId: "1:860352861611:web:323a6d232545765a326eee"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;