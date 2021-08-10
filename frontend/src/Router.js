import React, { useContext } from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";


export default function Router() {
    return (
        <BrowserRouter>
            <switch>
                <Route exact path="/"> <h1> Home </h1> </Route>
                <Route exact path="/register"> <h2>Register</h2> </Route>
                <Route exact path="/login"> <div>Login</div> </Route>
            </switch> 
        </BrowserRouter>
    )
}
