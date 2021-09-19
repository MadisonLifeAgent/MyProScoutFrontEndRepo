import React from 'react';
import { Link } from 'react-router-dom';

// component imports
import Logout from '../Logout/Logout';
import '../NavBar/NavBar.css';


// myPlayers
// myScoutingReports
// myOrg
// myTeams
// addPlayer
// myProfile
// Search Players
// Logout


// site navigation bar
function NavBar({user}) {
    return (
        <div id="navbardiv">
            <a href="/" id="homelink"> myProScout.com</a>

            <nav>
            
                {!user &&
                        <React.Fragment>
                            
                                <Link id="button" to="/register" >Register</Link>
                            
                            
                                <Link id="button" to="/login">Login</Link>
                            
                        </React.Fragment>
                }


                {user &&
                    <React.Fragment>
                    
                        <Link id="link" to="/myplayers">myPlayers</Link>
                    
                    
                        <Link id="link" to="/myscoutingreports">myScouting Reports</Link>
                    
                    
                        <Link id="link" to="/addplayer">addPlayer</Link>
                    
                    
                        <Link id="link" to="/myteams">myTeams</Link>
                    
                    
                        <Link id="link" to="/search">searchPlayers</Link>
                    
                                    
                    
                        <Link id="link" to="/myorg">myOrg</Link>
                    
                    
                        <Link id="link" to="/myprofile">myProfile</Link>
                    
                            <Logout />
                    </React.Fragment>
                }
            
            </nav>
{/*             {user != null && <h3>Welcome {user.username}</h3>}
 */}        </div>

    );
}

export default NavBar;