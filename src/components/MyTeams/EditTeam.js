import React, { useState } from "react";

import axios from "axios";

// component imports

// updates a team's info
const EditTeam = (props) => {
	// get team info from state
    const team = props.location.state.team;

	// form field variables
	const [teamName, setTeamName] = useState();
	const [region, setRegion] = useState();
	const [competitionLevel, setCompetitionLevel] = useState();

    // call the database and try to update team
	async function updateTeam(newTeamName, newTeamRegion, newTeamCompetitionLevelName) {

		console.log(team.baseballTeamId);

		const updatedInfo = {
			"BaseballTeamId": team.baseballTeamId,
            "BaseballTeamName": newTeamName,
            "RegionName": newTeamRegion,
            "CompetitionLevelName": newTeamCompetitionLevelName
		}

		let response = await axios.put(`https://localhost:44394/api/baseballteams/edit/${team.baseballTeamId}`, updatedInfo);
		
		if (response) {
			console.log("good api call");
		} else {
			console.log("bad api call");
		}
	}

	// check and send the form
    const handleSubmit = (event) => {
		event.preventDefault();

		if (!teamName) {
            setTeamName(team.baseballTeamName);
        }
        if (!region) {
            setRegion(team.regionName);
        }
        if (!competitionLevel) {
            setCompetitionLevel(team.competitionLevelName);
		}
		updateTeam(teamName, region, competitionLevel);
	}

 
	// registration form
	return (
		<div>
            <p>Edit Team</p>
			<form onSubmit={handleSubmit}>
                <label>Team Name: {team.baseballTeamName}</label>
				<input type="text" value={teamName} onChange={(event) => setTeamName(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Team Region: {team.regionName}</label>
				<input type="text" value={region} onChange={(event) => setRegion(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Team Competition Level: {team.competitionLevelName}</label>
				<input type="text" value={competitionLevel} onChange={(event) => setCompetitionLevel(event.target.value)} class="ms-3 mb-3" /><br/>

				<input type="submit" value="Complete Form" class="btn btn-primary ms-3 mt-3" />

				<input type="submit" value="Save Changes" class="btn btn-primary ms-3 mt-3" />

            </form>
		</div>
	)
}

export default EditTeam;