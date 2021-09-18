import React, { useState } from "react";
import axios from 'axios';
import jwtDecode from "jwt-decode";

import useGetAllOrganizations from "../../hooks/useGetAllOrganizations";

// Add new organization for scouts
const ChangeMyOrg = (props) => {
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
    // set the scout
    const scout = getUser();

    // get all Organizations
    const allOrganizations = useGetAllOrganizations();

 
    // store user selection
    const [updatedOrganizationId, setupdatedOrganizationId] = useState('');

    // update being sent to server // the join id can be retrieved at the server


    // post update
    async function updateOrganization(updateInfo, id) {
        console.log(updateInfo);

        const updatedOrganization = {
            "Id": id,
            "OrganizationId": parseInt(updateInfo),
        }

        let response = await axios.put(`https://localhost:44394/api/scoutorganizationjoin/edit/${id}`, updatedOrganization);

        //window.location = "/myorg";
        
        if (response) {
            console.log("good call");
            // refresh and send user to home page
        } else {
            console.log("bad api call");
        }
    }

    console.log(allOrganizations);


    // set category filter once selected
    const onChange = (event) => {
        setupdatedOrganizationId(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault(); 
        setupdatedOrganizationId(event.target.value);   
        updateOrganization(updatedOrganizationId, scout.id);
        console.log(updatedOrganizationId);
    }

    const showAllOrganizationOptions = allOrganizations.map((item) => {
        return (
                <option name="updatedOrganizationId" value={item.organizationId} selected >{item.organizationName}</option>

        )
    });


    // login form
    return (
        
        <div>
            <h3>Change My Organization</h3>
            <form onSubmit={handleSubmit}>

                <select class="form-select" name="category" aria-label="Default select example" onChange={onChange}>
                    {showAllOrganizationOptions}

                </select>

                <input type="submit" value="Save Change" class="btn btn-primary ms-3" />
                </form>
        </div>
    )

}

export default ChangeMyOrg;