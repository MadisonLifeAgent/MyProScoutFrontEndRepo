
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
                    <div>
                    <dt id="mapped" class="">{item.user.firstName} {item.user.lastName} (Message #{item.organizationMessageId})
                    <br/>
                    Subject: {item.organizationMessageTitle}</dt>
                        <dd id="notes" class="ms-5">{item.organizationMessageBody}</dd>
                    </div>
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
            <div id="pages">
                <h3 id="pagetitle">Recent Messages</h3>
                <a id="newnotebutton" class="ms-0 me-4" href="/myorg">Go Back</a>

                <a id="newreportbutton" href="/myorg/newmessage" onClick={handleClick}>Add New Message</a>

                <dl class="mb-5">
                   {showMessages()} 
                    
                </dl>


            </div>
        )
    }
    else {
        return (
            <p id="info">Messages Loading...</p>
        )
    }
        
    }

export default DisplayMyOrgMessages;