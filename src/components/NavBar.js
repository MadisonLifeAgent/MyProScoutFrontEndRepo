import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({user}) => {
    return (
        <div>
            {/* if user show home profile link */}
            {user && <h3>Welcome {user.username}</h3>}
            <ul>
                <li>
                    <Link to="/">myProScout.com</Link>
                </li>
                <li>
                    <Link to="/myprofile">myProfile</Link>
                </li>
            
                {/* if no user prompt scout to login or register an account */}
                {!user &&
                    <React.Fragment>
{/*                         <li>
                            <Link to="/register">Register</Link>
                        </li> */}
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