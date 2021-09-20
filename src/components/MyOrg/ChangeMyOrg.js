import React, { useState } from "react";
import axios from 'axios';

import useGetAllOrganizations from "../../hooks/useGetAllOrganizations";

// Add new organization for scouts
const ChangeMyOrg = (props) => {
    // get scout details
    // set the scout
    const scout = props.location.state.user;
    console.log(scout);


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
        
        <div id="pages">
            <h3 id="pagetitle">Change My Organization</h3>

            <form onSubmit={handleSubmit}>
                <div class="input-group mb-3 col-auto">
                    <div class="col-sm-auto col-lg-auto">
                        <select class="form-select" id="select-button" name="category" aria-label="Default select example" onChange={onChange}>
                            {showAllOrganizationOptions}
                        </select>
                    </div>
                    <div class="col-sm-auto col-lg-auto ms-2">
                        <input id="newnotebutton" type="submit" value="Save Change" class="form-control" />
                    </div>
                </div>
            </form>
        </div>
    )

}

export default ChangeMyOrg;