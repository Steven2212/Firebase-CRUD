import React from "react";
import { useState } from "react";
import {app} from './firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const auth = getAuth();
    
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
      alert(error.message)}); 

  };
  return (
    <>
      Login Page
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="password"
          placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
