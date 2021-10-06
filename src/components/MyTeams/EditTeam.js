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
			window.location = "/myteams/teamupdated"
		} else {
			console.log("bad api call");
		}
	}

	// check and send changes
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
		<div id="forms">
            <p id="pagetitle">Edit Team</p>

			<a id="newnotebutton" href="/myteams">Go Back</a>

			<form class="mt-4" onSubmit={handleSubmit}>
                <label class="form-label input-group">Team Name: {team.baseballTeamName}</label>
				<input id="inputfields" type="text" value={teamName} onChange={(event) => setTeamName(event.target.value)} class="input-group-text" /><br/>

                <label class="form-label input-group">Team Region: {team.regionName}</label>
				<input id="inputfields" type="text" value={region} onChange={(event) => setRegion(event.target.value)} class="input-group-text" /><br/>

                <label class="form-label input-group">Team Competition Level: {team.competitionLevelName}</label>
				<input id="inputfields" type="text" value={competitionLevel} onChange={(event) => setCompetitionLevel(event.target.value)} class="input-group-text" /><br/>

{/* 				<input type="submit" value="Complete Form" id="newnotebutton" />
 */}
				<input type="submit" value="Save Changes" id="newnotebutton" />

            </form>
		</div>
	)
}

export default EditTeam;