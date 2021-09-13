import React from "react";

// Component or hook imports

// Scout profile page
const MyProfile = (props) => {
    const scout = props.user;

    // display scout's name, orgnaization, and list of players with recent scouting reports
        return (
            <div>
                <h3>This is Scout myProfile</h3>
                <p>Scout's {scout.username} and Organization</p>
                <button class="mb-3">Edit myProfile</button>
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