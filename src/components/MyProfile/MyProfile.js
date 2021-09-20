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
            <div id="pages">
                <h3 id="pagetitle">{user.username}'s myProfile</h3>

                <Link id="newnotebutton" to={{
                        pathname: `/editmyprofile`,
                        state: {
                            user: user,
                        }
                    }}>Edit myProfile</Link>
             <dl id="mapped">
                    <dt>List of Players and Scouting Reports</dt>
                    <dd>Name</dd>
                    <dd>Scouting Report Link</dd>
                </dl>

            </div>
        )
    }
    // return profile page is user logged in




export default MyProfile;