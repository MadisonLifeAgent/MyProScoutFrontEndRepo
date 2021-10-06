import React, { useState } from "react";
import axios from 'axios';
import jwtDecode from "jwt-decode";

import useGetAllOrganizations from "../../hooks/useGetAllOrganizations";


// assign new organization for scout
const AssignMyOrg = (props) => {
    // set the scout/user
    const scout = props.location.state.user;

    // get all Organizations
    const allOrganizations = useGetAllOrganizations();

    // store user selection here
    const [organizationId, setOrganizationId] = useState('');

    // join user/scout and organization in database
    async function assignMyOrganization(updateInfo, id) {
        console.log(updateInfo);

        const joinInfo = {
            "Id": id,
            "OrganizationId": parseInt(updateInfo),
        }

        let response = await axios.post(`https://localhost:44394/api/scoutorganizationjoin/add`, joinInfo);
        
        if (response) {
            console.log("good call");
            // refresh and send user to home page
        } else {
            console.log("bad api call");
        }
    }

    // set category filter once selected
    const onChange = (event) => {
        setOrganizationId(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault(); 
        setOrganizationId(event.target.value);   
        assignMyOrganization(organizationId, scout.id);
        console.log(organizationId);
        window.location = "/myorg/orgassignedlandingpage";

    }

    const showAllOrganizationOptions = allOrganizations.map((item) => {
        return (
                <option name="organizationId" value={item.organizationId} selected >{item.organizationName}</option>

        )
    });


    // assign organization selection menu and form
    return (
        
        <div id="pages">
            <h3 id="pagetitle">Assign My Organization</h3>

            <a id="newnotebutton" class="m-0" href="/myorg">Go Back</a>

            <form class="row mt-4" onSubmit={handleSubmit}>
                <div class="input-group mb-3 col-auto">
                    <div class="col-sm-auto col-lg-auto">
                    <select class="form-select" id="selectbutton" name="category" aria-label="Default select example" onChange={onChange}>
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

export default AssignMyOrg;