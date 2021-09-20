import React, { useState } from "react";
import axios from 'axios';

// Add new organization for scouts
const AddNewOrg = (props) => {
   
    // store user input
    const [newOrganizationName, setNewOrganizationName] = useState('');

    // call the database and try to add new org
    async function addNewOrganization(orgName) {

        const newOrganization = {
            "OrganizationName": newOrganizationName,
        }

        let response = await axios.post('https://localhost:44394/api/organizations/add', newOrganization);

        window.location = "/myorg";
        
        if (response) {
            console.log("good call");
            // refresh and send user to home page
        } else {
            console.log("bad api call");
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();     
        addNewOrganization(newOrganizationName);
    }

    // login form
    return (
        
        <div id="forms">
            <h3 id="pagetitle">Add New Organization</h3>
            <form onSubmit={handleSubmit}>
                <label class="form-label input-group" >Enter Organization Name</label>
                <input id="inputfields" type="text" name="newOrganizationName" placeholder="Enter a title" value={newOrganizationName} onChange={ (event) => setNewOrganizationName(event.target.value)}  class="input-group-text"/>
                <br />

                <input id="newnotebutton" type="submit" value="Add New Organization" />
            </form>
        </div>
    )

}

export default AddNewOrg;