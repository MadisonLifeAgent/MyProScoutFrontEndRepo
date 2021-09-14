import React from "react";

// component imports
//import useGetTeamRegions from "../../hooks/useGetTeamRegions";

// Scout account registration form
const GetTeamRegions = (props) => {
	const teamRegions = props.teamRegions;
	console.log(teamRegions);


	// map out the team regions and display them
	const showRegions = teamRegions[0].map((item) => {
		// display each item as a selectable option
		return (
			<React.Fragment>

 				<input type="radio" id={item.regionName} name="region" value={props.region} />
				<label for={item.regionName}>{item.regionName}</label>
				<br/>
				</React.Fragment>

		)
	})

	
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