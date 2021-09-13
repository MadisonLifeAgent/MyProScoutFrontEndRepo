import React from 'react';
import { Link } from 'react-router-dom';

function NavBar( {user}) {
    return (
        <div>
             {user && <h3>Welcome {user.username}</h3>}
             <ul>
                <li>
                    <Link to="/">myProScout.com</Link>
                </li>
                <li>
                    <Link to="/myprofile">myProfile</Link>
                </li>
            
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
                            <Link to="/logout">Logout</Link>
                        </li>
                    </React.Fragment>
                }
            </ul>
        </div>

    );
}

export default NavBar;