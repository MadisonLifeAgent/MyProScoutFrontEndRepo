import React from 'react';
import { Link } from 'react-router-dom';

// component imports
import Logout from '../Logout/Logout';


// myPlayers
// myScoutingReports
// myOrg
// myTeams
// addPlayer
// myProfile
// Search Players
// Logout


// site navigation bar
function NavBar( {user}) {
    return (
        <div>
            <nav>
             <ul>
                {!user &&
                        <React.Fragment>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        </React.Fragment>
                }


                {user &&
                    <React.Fragment>
                    <li>
                        <Link to="/myplayers">myPlayers</Link>
                    </li>
                    <li>
                        <Link to="/myscoutingreports">myScouting Reports</Link>
                    </li>
                    <li>
                        <Link to="/addplayer">addPlayer</Link>
                    </li>
                    <li>
                        <Link to="/myteams">myTeams</Link>
                    </li>
                    <li>
                        <Link to="/search">searchPlayers</Link>
                    </li>
                                    
                    <li>
                        <Link to="/myorg">myOrg</Link>
                    </li>
                    <li>
                        <Link to="/myprofile">myProfile</Link>
                    </li>
                            <Logout />
                    </React.Fragment>
                }
            </ul>
            </nav>
{/*             {user != null && <h3>Welcome {user.username}</h3>}
 */}        </div>

    );
}

export default NavBar;