import React, { useContext } from 'react'
import {Link} from "react-router-dom";
import "./SideNav.css"

export default function SideNavbar() {
   

    return (

        <nav class="navbar navbar-expand-lg navbar-light dark-light">
        <div class="container-fluid-side">
        <a href="/logout" className="nav-link">ADD-PRODUCT</a><br></br>
        <a href="/logout" className="nav-link">VIEW-PRODUCTS</a><br></br>
        <a href="/logout" className="nav-link">OLD-TODO</a><br></br><br></br>
          <a href="/logout" className="nav-link">VIEW MY PROFILE</a>
        </div>
      </nav>


      

    )
}
