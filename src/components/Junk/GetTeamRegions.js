import React from "react";

// component imports

// get regions for user selection
const GetTeamRegions = (props) => {
	const teamRegions = props.teamRegions;
	console.log(teamRegions);


	// map out the team regions and display them
	const showRegions = teamRegions[0].map((item) => {
		// display each item as a selectable option
		return (
			<React.Fragment>

 				<input type="radio" id={item.regionId} name="region" value={props.region} />
				<label for={item.regionId}>{item.regionName}</label>
				<br/>
				</React.Fragment>

		)
	})

	// return all radio buttons
	return (
		<React.Fragment>
		<label>Select Team Region</label>
			<ul>
			{showRegions}
			</ul>
			</React.Fragment>
	)
}

export default GetTeamRegions;