import React from "react";
import {Link} from "react-router-dom"

function Navbar() {
    return (
        <nav className="nav">
            <ul>
                <li><Link to="/" className="site-title">Home</Link></li>
                <li><Link to="/movies">Movies</Link></li>
                <li><Link to="/todo">To-Do List</Link></li>
                <li><Link to="/tictac">TicTac Toe</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar