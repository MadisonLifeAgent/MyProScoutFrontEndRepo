import React from "react";

// landing page after assigning organization
const OrgAssignedLandingPage = (props) => {
    return (
        <div id="pages">
            <h4 id="pagetitle">You have assigned your Organization</h4>

            <a id="newnotebutton" href="/myorg">Go to myOrg's Hub</a>
        </div>
    )
}

export default OrgAssignedLandingPage;