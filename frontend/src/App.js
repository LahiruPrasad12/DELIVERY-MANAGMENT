import React from "react";
import { Route } from "react-router-dom";
import Router from './Router';
import axios from "axios";
import { AuthContextProvider } from "./components/context/Authcontext";

//that allows to set cookies
axios.defaults.withCredentials = true;

function App() {
  return (
    <AuthContextProvider>
        <Router/>
    </AuthContextProvider>
  );
}

export default App;
