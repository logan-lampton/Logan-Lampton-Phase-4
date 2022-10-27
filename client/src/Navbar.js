import React from "react"

function Navbar(){
    return(
        <div>
            <h1>Halloween Helper</h1>
            <ul className="nav-bar">
                <li><a href="/">Home</a></li>
                <li><a href="/form">Add a costume!</a></li>
                <li><a href="/favorites">Favorites</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </div>
    )
}

export default Navbar