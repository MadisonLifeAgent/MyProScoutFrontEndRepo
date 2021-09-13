import React from "react";

// Component or hook imports
import EditMyProfile from "./EditMyProfile";


// Scout profile page
const MyProfile = (props) => {
    const scout = props.user;

    const handleClick = () => {
        //<EditMyProfile user={props.user} />
    }


    // display scout's name, orgnaization, and list of players with recent scouting reports
        return (
            <div>
                <h3>This is Scout myProfile</h3>
                <p>Scout's {scout.username} and Organization</p>
                <a href="/editmyprofile" class="btn mb-3" onClick={handleClick}>Edit myProfile</a>
                <dl>
                    <dt>List of Players and Scouting Reports</dt>
                    <dd>Name</dd>
                    <dd>Scouting Report Link</dd>
                </dl>

            </div>
        )
    }
    // return profile page is user logged in




export default MyProfile;