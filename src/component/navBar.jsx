import { NavLink } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";


function NavBar (){
    return(
        <nav className="navbar navbar-light bg-light">
            <Link to="/" className="navbar-brand mb-0 h1">Vidly</Link>
            <NavLink to="/movies" className="navbar-brand active">Movies</NavLink>
            <NavLink to="/costumers" className="navbar-brand ">Costumers</NavLink>
            <NavLink to="/rentals" className="navbar-brand ">Rentals</NavLink>
        </nav>
    )
}

export default NavBar;