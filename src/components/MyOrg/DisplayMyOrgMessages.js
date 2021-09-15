import React from "react";
import axios from 'axios';
import jwtDecode from "jwt-decode";



// Component or hook imports
import useGetOrgMessages from "../../hooks/useGetOrgMessages";

// this component gets players and displays them
const DisplayMyOrgMessages = (props) => {
    // get scout details
    const scout = props.scout;
    const organization = props.organization;

    // get all players
    const [{orgMessages}] = useGetOrgMessages(organization.organizationId);

    // display all organization messages
    const showMessages = orgMessages.map((item) => {

        return (
            <React.Fragment>
                <dt>{item.user.firstName} {item.user.lastName}</dt>
                    <dd>Subject: {item.organizationMessageTitle}</dd>
                    <dd>{item.organizationMessageBody}</dd>
                    <br/><br/>
            </React.Fragment>
        );
    })



    // displays organization messages
        return (
            <div>
                <h3>Recent Messages</h3>
                <dl>
                    {showMessages}
                </dl>
            </div>
        )
    }

export default DisplayMyOrgMessages;