import React from 'react';
import { Link } from 'react-router-dom';

// component imports
import Logout from '../Logout/Logout';

// site navigation bar
function NavBar( {user}) {
    return (
        <div>
             {user != null && <h3>Welcome {user.username}</h3>}
             <ul>
                <li>
                    <Link to="/">myProScout.com</Link>
                </li>
                <li>
                    <Link to="/myprofile">myProfile</Link>
                </li>
            
                 {user == null &&
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
                            <Logout />
                    </React.Fragment>
                }
            </ul>
        </div>

    );
}

export default NavBar;