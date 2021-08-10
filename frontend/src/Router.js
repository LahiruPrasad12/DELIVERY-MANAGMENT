import React, { useContext } from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import NavBar from './layout/NavBar';


export default function Router() {
    return (
        <BrowserRouter>
        <NavBar/>
            <switch>
                <Route exact path="/"></Route>
                <Route exact path="/register"> <h2>Register</h2> </Route>
                <Route exact path="/login"> <div>Login</div> </Route>
            </switch> 
        </BrowserRouter>
    )
}
