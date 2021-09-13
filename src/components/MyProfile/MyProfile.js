import React from "react";
import { Redirect } from 'react-router-dom';


// Component or hook imports

// Scout profile page
const MyProfile = (props) => {
    const user = props.user;

    if (user == null) {
        return <Redirect to="/login" />
    }
    else {
        return (
            <div>
                <h3>This is Scout myProfile</h3>
            </div>
        )
    }
    // return profile page is user logged in


}

export default MyProfile;