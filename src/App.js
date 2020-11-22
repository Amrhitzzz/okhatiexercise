import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home"
import Register from "./Pages/Login/Register";

export const Loginstate = React.createContext();
export default function App() {
  const [loginStatus, setloginStatus] = useState( stateHandler() );

function stateHandler() {
  const logincheck = JSON.parse(localStorage.getItem("loginstatus"));
  if(logincheck === null || logincheck === false ){
    return false;
  }else {
    return true;
  }
}

useEffect( ()=> {
  localStorage.setItem("loginstatus", JSON.stringify(loginStatus));
},[loginStatus])


  return (
    <Loginstate.Provider value = {[loginStatus, setloginStatus]}>
      <Router>
        <Switch>
          <Route exact path="/"
            render={() => loginStatus ? <Home /> : <Login />
            } />

          <Route exact path="/register"
            render={() => loginStatus ? <Home /> : <Register />} />

          <Route exact path="/home"
            render={() => loginStatus ? <Home /> : <Login />} />
        </Switch>
      </Router>
    </Loginstate.Provider>
  );
}

