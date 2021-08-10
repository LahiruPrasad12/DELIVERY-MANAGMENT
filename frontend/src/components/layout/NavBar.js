import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../context/Authcontext';
import "./Navbar.css"
export default function NavBar() {

    //This is used to notify that whether this user already loged in or not
    const { loggedIn } = useContext(AuthContext);
    return (
            <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand">Spera Labs</a>
                <form class="d-flex">

                {
                    loggedIn != null && (<>
                        {/* <a class="nav-link active" aria-current="page" href="/logout">Logout</a> */}
                        <Link to = "/logout" className="navLink">LOGOUT</Link>
                    </>)
                }
                
                {
                    loggedIn == null && (<>
                            <Link to="/" className="navLink">LOGIN</Link>
                            <Link to="/register" className="navLink">REGISTER</Link>
                    </>)
                }

                </form>
            </div>
            </nav>

    )
}
