import React from "react";

// landing page after editing myProfile
const EditProfileLandingPage = (props) => {
    return (
        <div id="pages">
            <h4 id="pagetitle">Your Profile has been updated.</h4>

            <a id="newnotebutton" href="/myprofile">Go to myProfile</a>
        </div>
    )
}

export default EditProfileLandingPage;