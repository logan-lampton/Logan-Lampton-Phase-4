import React from "react"
import { Link } from "react-router-dom"

function Navbar({currentUser, updateUser}){

    const handleLogOut = () => {
        // DELETE `/logout`
        fetch('/logout',{
          method:'DELETE'
        })
        .then(res => {
          if(res.ok){
            updateUser(false)
          }
        })
      }
    return(
        <div>
            <h1>Halloween Helper</h1>
            <ul className="nav-bar">
                {!currentUser && <li><Link to="/signup">Sign up!</Link></li>}
                <li><Link to="/">Home</Link></li>
                <li><Link to="/form">Add a costume!</Link></li>
                {/* <li><a href="/favorites">Favorites</a></li> */}
                {!currentUser && <li><Link to="/login">Login</Link></li>}
                {currentUser && <li className="link" onClick={handleLogOut}>Logout</li>}
            </ul>
        </div>
    )
}

export default Navbar