import React from "react";

// landing page after deleting a team
const TeamDeletedLandingPage = (props) => {
    return (
        <div id="pages">
            <h4 id="pagetitle">Team has been Deleted.</h4>

            <a id="newnotebutton" href="/myteams">Go to myTeams</a>
        </div>
    )
}

export default TeamDeletedLandingPage;