import React from "react";
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";


// Component or hook imports
import EditMyProfile from "./EditMyProfile";


// Scout profile page
const MyProfile = (props) => {
    const jwt = localStorage.getItem('token');
    function getUser() {
        try{
            const user = jwtDecode(jwt);
            console.log(user);
            return user;
        } catch {
        }
    }
    // get the scout's account info
    const user = getUser();


/*     const handleClick = () => {
        <EditMyProfile user={props.user} />
    } */


    // display scout's name, orgnaization, and list of players with recent scouting reports
        return (
            <div>
                <h3>{user.username}'s myProfile</h3>

                <Link class="btn btn-primary mb-3"  to={{
                        pathname: `/editmyprofile`,
                        state: {
                            user: user,
                        }
                    }}>Edit myProfile</Link>

{/*                 <a href="/editmyprofile" class="btn btn-primary mb-3" onClick={handleClick}>Edit myProfile</a>
 */}                <dl>
                    <dt>List of Players and Scouting Reports</dt>
                    <dd>Name</dd>
                    <dd>Scouting Report Link</dd>
                </dl>

            </div>
        )
    }
    // return profile page is user logged in




export default MyProfile;