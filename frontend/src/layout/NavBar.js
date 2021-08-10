import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
            <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand">Spera Labs</a>
                <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            </nav>

    )
}
