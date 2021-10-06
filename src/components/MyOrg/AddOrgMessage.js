import React, { useState } from "react";
import axios from 'axios';
import jwtDecode from "jwt-decode";

import useGetOrganization from "../../hooks/useGetOrganization";

// adds new org message 
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

    // get the user info
    const scout = getUser();

    // get organization info
    const organization = useGetOrganization(scout.id);

    // store user input
    const [organizationMessageTitle, setOrganizationMessageTitle] = useState('');
    const [organizationMessageBody, setOrganizationMessageBody] = useState('');

    // body sent to database
    const messageInfo = {
        "OrganizationMessageTitle": organizationMessageTitle,
        "OrganizationMessageBody": organizationMessageBody,
        "Id": scout.id,
        "OrganizationId": organization.organizationId
    }

    // call the database and try to post message
    async function addNewOrgMessage(message) {

        let response = await axios.post('https://localhost:44394/api/organizationmessages/add', message);
        
        if (response) {
            console.log("good call");
            window.location = "/myorg/neworgmessageadded";
        } else {
            console.log("bad api call");
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();     
        addNewOrgMessage(messageInfo);
    }

    // new message form
    return (
        
        <div id="forms">
            <h3 id="pagetitle">Type your message here.</h3>
            <form onSubmit={handleSubmit}>
                <label class="form-label input-group">Message Title</label>
                <input id="inputfields" type="text" name="organizationMessageTitle" placeholder="Enter a title" value={organizationMessageTitle} onChange={ (event) => setOrganizationMessageTitle(event.target.value)}  class="input-group-text"/>

                <label class="form-label input-group">Message Body</label>
                <textarea id="inputfields" name="organizationMessageBody" placeholder="message body" value={organizationMessageBody} onChange={ (event) => setOrganizationMessageBody(event.target.value)} class="input-group-text mb-4" rows="4" cols="50"/>

                <input type="submit" value="Post Message" id="newnotebutton" />
            </form>
        </div>
    )

}

export default AddOrgMessage;