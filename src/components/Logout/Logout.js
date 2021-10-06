import React from "react";

// logs out the user
const Logout = () => {
    const handleClick = () => {
        localStorage.clear();
        window.location = '/';
    }
    return (
        <nav>
            <button id="button" class="nav-link align-right" onClick={handleClick}>LogOut</button>
        </nav>
    )
}

export default Logout;