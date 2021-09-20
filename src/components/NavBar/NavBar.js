import React from 'react';
import { Link } from 'react-router-dom';

// component imports
//import Logout from '../Logout/Logout';
import './NavBar.css';


// site navigation bar
function NavBar({user}) {
    const handleClick = () => {
        localStorage.clear();
        window.location = '/';
    }
    return (
        <div id="navbardiv">
            <a href="/" id="homelink" class="nav-link"> myProScout.com</a>
            <nav class="nav">

                {!user &&
                        <React.Fragment>
                                <Link id="register" class="nav-link" to="/register" >Register</Link>
                            
                                <Link id="login" class="nav-link" to="/login">Login</Link>
                            
                        </React.Fragment>
                }


                {user &&
                    <React.Fragment>
                        <Link id="myPlayers" class="nav-link" to="/myplayers">myPlayers</Link>
                    
                        <Link id="reports" class="nav-link" to="/myscoutingreports">myReports</Link>
                    
                    
                        <Link id="addplayer" class="nav-link" to="/addplayer">addPlayer</Link>
                    
                    
                        <Link id="teams" class="nav-link" to="/myteams">myTeams</Link>
                    
                    
                        <Link id="search" class="nav-link" to="/search">mySearch</Link>
                    
                                    
                    
                        <Link id="myorg" class="nav-link" to="/myorg">myOrg</Link>
                    
                    
                        <Link id="myprofile" class="nav-link" to="/myprofile">myProfile</Link>

                        <Link id="logout" class="nav-link" onClick={handleClick} to={{
                        pathname: '/', }}>Logout</Link>

{/*                         <Link id="button" class="nav-link" onClick={handleClick} to={{
                        pathname: '/', }}>Logout</Link> */}
                    
                    </React.Fragment>
                }
            
            </nav>
{/*             {user != null && <h3>Welcome {user.username}</h3>}
 */}        </div>

    );
}

export default NavBar;