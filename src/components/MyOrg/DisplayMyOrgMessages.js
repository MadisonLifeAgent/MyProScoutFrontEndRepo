
import React from "react";

// Component or hook imports
import useGetOrgMessages from "../../hooks/useGetOrgMessages";
import AddOrgMessage from "./AddOrgMessage";


// this component gets players and displays them
const DisplayMyOrgMessages = (props) => {
    // get scout details
    const myOrg = props.location.state.myOrganization;

    // get all players
    const orgMessages = useGetOrgMessages(myOrg.organizationId);

    // display all organization messages
    const showMessages = () =>{
        return orgMessages.map((item) => {

            return (
                <React.Fragment>
                    <dt>{item.user.firstName} {item.user.lastName} (Message #{item.organizationMessageId})</dt>
                        <dd>Subject: {item.organizationMessageTitle}</dd>
                        <dd>{item.organizationMessageBody}</dd>
                        <br/><br/>
                </React.Fragment>
            );
        })
    }
   
    // routes scout to add message form 
    const handleClick = () => {
        <AddOrgMessage />
    }
    
    // displays organization messages
    if(orgMessages){
        return (
            <div>
                <a href="/myorg/newmessage" class="btn btn-primary ms-3 mb-3" onClick={handleClick}>Add New Message</a>
                <h3>Recent Messages</h3>
                <dl>
                   {showMessages()} 
                    
                </dl>
            </div>
        )
    }
    else {
        return (
            <p>Messages Loading...</p>
        )
    }
        
    }

export default DisplayMyOrgMessages;