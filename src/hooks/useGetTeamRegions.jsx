import React, { useState, useEffect } from "react";
import axios from 'axios';

// this hook gets all team regions
const useGetTeamRegions = () => {
    // get passed in props
    const [teamRegions, setTeamRegions] = useState({});

	// get all available regions
	async function getRegions() {
		let response = await axios.get(`https://localhost:44394/api/regions/`);
		
		if (response.data) {
			console.log("regions good api call");
			// if good api call ste the teamRegions
			setTeamRegions(response.data);
            return teamRegions ;
		} else {
			console.log("bad api call");
		}
	}
	
    // get regions as soon as Add Team componenet is requested
    useEffect(() => {
        getRegions();
    },[teamRegions]);

}

export default useGetTeamRegions;