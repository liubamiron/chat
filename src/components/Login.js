import { useContext } from "react";
import React from "react";
import { Context} from "../index";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// const {auth} = useContext(Context);



 const Login = () => {
   const {auth} = useContext(Context)

  const login = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
  }

  return (
    <div className="container">
   
      <div className="col">
          <button type="submit" className="btn btn-primary mb-3" onClick={login}>
            Confirm with Google account
          </button>
        </div>
    </div>
  );
};


export default Login;
