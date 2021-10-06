import React from "react";

// landing page after adding a new organization
const NewOrgAddedLandingPage = (props) => {
    return (
        <div id="pages">
            <h4 id="pagetitle">New Organization has been added.</h4>

            <a id="newnotebutton" href="/myorg">Go to myOrg's Hub</a>
        </div>
    )
}

export default NewOrgAddedLandingPage;