
import './App.css';
// import Navbar from './components/Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import SignUp from './components/SignUp';
import Login from './components/Login';
import FirestoreCrud from './components/FirestoreCrud';
import Dustbin from './components/Dustbin';


function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/signup" element={<SignUp />}>SignUp
          </Route>
          <Route exact path="/login" element={<Login/>}>Login
          </Route>
          <Route exact path="/" element={<FirestoreCrud/>}>
          </Route>
          <Route exact path="/cruddustbin" element={<Dustbin/>}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;


