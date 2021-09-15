import React, { useState, useParams, useLocation } from "react";
import axios from 'axios';

// Component or hook imports
import useGetPlayerProfileDetails from "../../hooks/useGetPlayerProfileDetails";


// This component allows scouts to edit a player's details
const ViewPlayerProfile = (props) => {
    // get player profile info
    //const { handle } = useParams();
    // const location = useLocation();
    // const { player } = location.state;
    // const [user, setUser] = React.useState(null);

    // console.log(player);

    const player = useGetPlayerProfileDetails(2);

    console.log(player);


   // add player form
    return (
        <div>
            <h3>Enter Player Details</h3>


        </div>
    );
}

export default ViewPlayerProfile;