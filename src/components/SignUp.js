import React from "react";
import { useState } from "react";
import {app} from './firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
    const auth = getAuth();
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {alert(error.message)});
  };
  return (
    <>
      SignUp Page
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="password"
          placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
        <button type="submit">SignUp</button>
      </form>
    </>
  );
};

export default SignUp;
