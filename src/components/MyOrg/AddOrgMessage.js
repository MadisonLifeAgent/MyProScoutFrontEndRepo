import React, { useState } from "react";
import axios from 'axios';
import jwtDecode from "jwt-decode";



// Scout Login Form
const AddOrgMessage = (props) => {
    const organizationId = props.orgId;
    //get user
    const jwt = localStorage.getItem('token');
    function getUser() {
        try{
            const user = jwtDecode(jwt);
            return user;
        } catch {
        }
    }

    const scout = getUser();
    // store user input
    const [organizationMessageTitle, setOrganizationMessageTitle] = useState('');
    const [organizationMessageBody, setOrganizationMessageBody] = useState('');



    // call the database and try to post message
    //async function addNewOrgMessage(messageTitle, messageBody, id, orgId) {
    async function addNewOrgMessage(messageTitle, messageBody) {

        const messageInfo = {
            "OrganizationMessageTitle": messageTitle,
            "OrganizationMessageBody": messageBody,
            "Id": "50dc0385-c59f-4ab4-8fcf-a95dc7c605c7",
            //"Id": id,
            "OrganizationId": 3
            //"OrganizationId": 3
            }

        let response = await axios.post('https://localhost:44394/api/organizationmessages/add', messageInfo);
        
        if (response) {
            console.log("good call");
            // refresh and send user to home page
            window.location = "/myorg";
        } else {
            console.log("bad api call");
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();     
        addNewOrgMessage(organizationMessageTitle, organizationMessageBody);
    }

    // login form
    return (
        
        <div>
            <h3>Type your message here.</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="organizationMessageTitle" placeholder="Enter a title" value={organizationMessageTitle} onChange={ (event) => setOrganizationMessageTitle(event.target.value)}  class="ms-3 mb-3"/>
                <br />

                <textarea name="organizationMessageBody" placeholder="message body" value={organizationMessageBody} onChange={ (event) => setOrganizationMessageBody(event.target.value)} class="ms-3 mb-3" rows="4" cols="50"/>
                <br />

                <input type="submit" value="Post Message" class="btn btn-primary ms-3" />
            </form>
        </div>
    )

}

export default AddOrgMessage;