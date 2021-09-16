import React, { useState, useEffect } from "react";
import axios from 'axios';

// this hook gets all team regions
const useGetTeamRegions = () => {
   // get passed in props
   const [teamRegions, setTeamRegions] = useState([]);

   // get all available regions
   async function getRegions() {
       //try{
           let response = await axios.get(`https://localhost:44394/api/regions/`);
           // if good api call ste the teamRegions
           setTeamRegions([response.data]);
/*        }
       catch(ex) {
           console.log("bad api call");
       } */
   }
       
   // get regions as soon as Add Team componenet is requested
   useEffect(() => {
       getRegions();
   },[teamRegions]);

   	// map out the team regions and display them
	const showRegions = teamRegions.map((item) => {
		const region = {
			id: item.regionId,
			name: item.regionName
		};

		// display each item as a selectable option
		return (
			<div>
				<input type="radio" id="region" name="region" value={region.id} />
				<label for="region">{region.name}</label>
			</div>
		)
	})
	
	return (
		<div>
			<label>Select Team Region</label>
			{showRegions}
		</div>
	)

}

export default useGetTeamRegions;