import React, { useContext } from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from './auth/Login';
import Register from './auth/Register';
import NavBar from './layout/NavBar';
import AuthContext from './context/Authcontext';
import Logout from './auth/Logout';


export default function Router() {

    const { loggedIn } = useContext(AuthContext);

    return (
        <BrowserRouter>
             <NavBar/>
        {
            loggedIn != null && (<>
                <Route exact path="/"><div>Home Page</div></Route>
                <Route exact path="/logout"><Logout/></Route>
            </>)
        }

        {
            loggedIn == null && (<>
                <Route exact path="/"> <Login/> </Route>
                <Route exact path="/register"> <Register/> </Route>
                
            </>)
        }
       
        </BrowserRouter>
    )
}
