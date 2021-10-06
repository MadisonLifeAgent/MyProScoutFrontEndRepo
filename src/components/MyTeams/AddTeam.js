import React, { useState } from "react";
import axios from "axios";

// add baseball team
const AddTeam = () => {
	// form field variables
	const [teamName, setTeamName] = useState();
	const [region, setRegion] = useState();
	const [competitionLevel, setCompetitionLevel] = useState();

    // call the database and try to create team
	async function createNewTeam(newTeamName, newTeamRegion, newTeamCompetitionLevelName) {

		const newTeamInfo = {
            "BaseballTeamName": newTeamName,
            "RegionName": newTeamRegion,
            "CompetitionLevelName": newTeamCompetitionLevelName
		}
		let response = await axios.post(`https://localhost:44394/api/baseballteams/add`, newTeamInfo);
		
		if (response) {
			console.log("good api call");
			window.location = '/myteams/teamadded';
		} else {
			console.log("bad api call");
		}
	}
    const handleSubmit = (event) => {
		event.preventDefault();
		createNewTeam(teamName, region, competitionLevel);
	}

	// add team form
	return (
		<div id="forms">
            <p id="pagetitle">Enter a New Team Details</p>

			<a id="newnotebutton" class="ms-0" href="/myteams">Go Back</a>

			<form class="mt-4" onSubmit={handleSubmit}>
                <label class="form-label input-group">Team Name</label>
				<input id="inputfields" type="text" placeholder="i.e. Milwaukee Brewers" value={teamName} onChange={(event) => setTeamName(event.target.value)} class="input-group-text" /><br/>

                <label class="form-label input-group">Team Region</label>
				<input id="inputfields" type="text" placeholder="i.e. Midwest" value={region} onChange={(event) => setRegion(event.target.value)} class="input-group-text" /><br/>

                <label class="form-label input-group">Team Competition Level</label>
				<input id="inputfields" type="text" placeholder="i.e. Triple A" value={competitionLevel} onChange={(event) => setCompetitionLevel(event.target.value)} class="input-group-text" /><br/>

				<input type="submit" value="Save" id="newnotebutton" />
            </form>
		</div>
	)
}

export default AddTeam;