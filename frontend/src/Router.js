import React, { useContext } from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NavBar from './components/layout/NavBar';
import AuthContext from './components/context/Authcontext';
import Logout from './components/auth/Logout';
import AddNewProducts from './components/products/AddNewProducts';
import ViewAllProduct from './components/products/ViewAllProduct';
import ViewOneProduct from './components/products/ViewOneProduct';



export default function Router() {

    const { loggedIn } = useContext(AuthContext);

    return (
        <BrowserRouter>
             <NavBar/>
        {
            loggedIn != null && (<>
                
                <Route exact path="/"><AddNewProducts/></Route>
                <Route exact path="/view"><ViewAllProduct/></Route>
                <Route path="/viewOne/:id" exact component={ViewOneProduct} />
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
