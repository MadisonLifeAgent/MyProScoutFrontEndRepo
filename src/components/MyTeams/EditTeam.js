import React, { useState } from "react";

import axios from "axios";

// component imports

// Scout account registration form
const EditTeam = (props) => {
    const team = props.team;
    console.log(team);
	// form field variables
	const [teamName, setTeamName] = useState();
	const [region, setRegion] = useState();
	const [competitionLevel, setCompetitionLevel] = useState();

    // call the database and try to create team
	async function createNewTeam(newTeamName, newTeamRegion, newTeamCompetitionLevelName) {
        console.log(newTeamCompetitionLevelName);

		const newTeamInfo = {
            "BaseballTeamName": newTeamName,
            "RegionName": newTeamRegion,
            "CompetitionLevelName": newTeamCompetitionLevelName
		}
		let response = await axios.post(`https://localhost:44394/api/baseballteams/add`, newTeamInfo);
		
		if (response) {
			console.log("good api call");
		} else {
			console.log("bad api call");
		}
	}
    const handleSubmit = (event) => {
		event.preventDefault();
		console.log(teamName);
        console.log(region);
		console.log(competitionLevel);
		createNewTeam(teamName, region, competitionLevel);
		window.location = '/myteams';
	}

 
	// registration form
	return (
		<div>
            <p>Edit Team</p>
			<form onSubmit={handleSubmit}>
                <label>Team Name</label>
				<input type="text" placeholder="i.e. Milwaukee Brewers" value={teamName} onChange={(event) => setTeamName(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Team Region</label>
				<input type="text" placeholder="i.e. Midwest" value={region} onChange={(event) => setRegion(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Team Competition Level</label>
				<input type="text" placeholder="i.e. Triple A" value={competitionLevel} onChange={(event) => setCompetitionLevel(event.target.value)} class="ms-3 mb-3" /><br/>

				<input type="submit" value="Save" class="btn btn-primary ms-3 mt-3" />
            </form>
		</div>
	)
}

export default EditTeam;