import React, { useContext } from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Register from './auth/Register';
import NavBar from './layout/NavBar';


export default function Router() {
    return (
        <BrowserRouter>
        <NavBar/>
            <switch>
                <Route exact path="/"></Route>
                <Route exact path="/register"> <Register/> </Route>
                <Route exact path="/login"> <div>Login</div> </Route>
            </switch> 
        </BrowserRouter>
    )
}
