import React from "react";

// component imports
//import useGetTeamRegions from "../../hooks/useGetTeamRegions";

// Scout account registration form
const GetTeamRegions = (props) => {
	const teamRegions = props.teamRegions;
	console.log(teamRegions)

	// map out the team regions and display them
	const showRegions = teamRegions.map((item) => {
		const region = {
			regionId: item.regionId,
			regionName: item.regionName
		};

		// display each item as a selectable option
		return (
			<div>
				<option value={region.regionId}>{region.regionName}</option>
			</div>
		)
	});
	
	return (
		<div>
			<label>Select Team Region</label>
			<select name="region">
			{showRegions}
			</select>
		</div>
	);
}

export default GetTeamRegions;