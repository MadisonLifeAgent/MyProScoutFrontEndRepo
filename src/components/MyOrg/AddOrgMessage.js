import React, { useState } from "react";
import axios from 'axios';
import jwtDecode from "jwt-decode";

import useGetOrganization from "../../hooks/useGetOrganization";

// Scout Login Form
const AddOrgMessage = (props) => {
    //get user
    const jwt = localStorage.getItem('token');
    function getUser() {
        try{
            const user = jwtDecode(jwt);
            return user;
        } catch {
        }
    }

    // get the scout info
    const scout = getUser();

    // get organization info
    const organization = useGetOrganization(scout.id);

    // store user input
    const [organizationMessageTitle, setOrganizationMessageTitle] = useState('');
    const [organizationMessageBody, setOrganizationMessageBody] = useState('');

    const messageInfo = {
        "OrganizationMessageTitle": organizationMessageTitle,
        "OrganizationMessageBody": organizationMessageBody,
        "Id": scout.id,
        //"Id": id,
        "OrganizationId": organization.organizationId
        //"OrganizationId": 3
    }

    // call the database and try to post message
    //async function addNewOrgMessage(messageTitle, messageBody, id, orgId) {
    async function addNewOrgMessage(message) {

        let response = await axios.post('https://localhost:44394/api/organizationmessages/add', message);

        window.location = "/myorg/messageboard";
        
/*         if (response) {
            console.log("good call");
            // refresh and send user to home page
        } else {
            console.log("bad api call");
        } */
    }

    const handleSubmit = (event) => {
        event.preventDefault();     
        addNewOrgMessage(messageInfo);
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