import React, { useState } from "react";
import axios from 'axios';
import jwtDecode from "jwt-decode";

// Add new organization for scouts
const AddNewOrg = (props) => {
    // get scout details
    const jwt = localStorage.getItem('token');
    function getUser() {
        try{
            const user = jwtDecode(jwt);
            console.log(user);
            return user;
        } catch {
        }
    }

    const scout = getUser();
    
    // store user input
    const [newOrganizationName, setNewOrganizationName] = useState('');

    const newOrganization = {
        "Id": scout.id,
        "OrganizationName": newOrganizationName,
    }

    // call the database and try to post message
    //async function addNewOrgMessage(messageTitle, messageBody, id, orgId) {
    async function addNewOrganization(orgName) {

        let response = await axios.post('https://localhost:44394/api/scoutorganizationjoin/add', orgName);



        //window.location = "/myorg";
        
        if (response) {
            console.log("good call");
            // refresh and send user to home page
        } else {
            console.log("bad api call");
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();     
        addNewOrganization(newOrganization);
    }

    // login form
    return (
        
        <div>
            <h3>New Organization Name</h3>
            <form onSubmit={handleSubmit}>
                <label>Enter Organization Name</label>
                <input type="text" name="newOrganizationName" placeholder="Enter a title" value={newOrganizationName} onChange={ (event) => setNewOrganizationName(event.target.value)}  class="ms-3 mb-3"/>
                <br />

                <input type="submit" value="Add New Organization" class="btn btn-primary ms-3" />
            </form>
        </div>
    )

}

export default AddNewOrg;