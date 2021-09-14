import React, { useState, useEffect } from "react";
import axios from "axios";

// component imports
import GetTeamRegions from "./GetTeamRegions";

// Scout account registration form
const AddTeam = () => {
	// form field variables
	const [teamName, setTeamName] = useState();
	const [region, setRegion] = useState();
	const [competitionLevel, setcompetitionLevel] = useState();

    // call the database and try to create team
	async function createNewTeam(newTeamName, newTeamRegion, newTeamCompetitionLevel) {

		const newTeamInfo = {
            "BaseballTeamName": newTeamName,
            "RegionId": newTeamRegion,
            "CompetitionLevelId": newTeamCompetitionLevel
		}
		let response = await axios.post(`https://localhost:44394/api/baseballteams/add`, newTeamInfo);
		
		if (response) {
			console.log(response.data);
			console.log("good api call");
		} else {
			console.log("bad api call");
		}
	}
	
    // get passed in props
    const [teamRegions, setTeamRegions] = useState([]);

    // get all available regions
    async function getRegions() {
        try{
            let response = await axios.get(`https://localhost:44394/api/regions/`);
            // if good api call ste the teamRegions
            console.log(response.data);
            setTeamRegions([response.data]);
        }
        catch(ex) {
            console.log("bad api call");
        }
    }
        
    // get regions as soon as Add Team componenet is requested
    useEffect(() => {
        getRegions();
        console.log(teamRegions);
    },[]);

    const handleSubmit = (event) => {
		event.preventDefault();
		console.log(teamName);
		
		// set registration information
		createNewTeam(teamName, region, competitionLevel);
	}
	
	// registration form
	return (
		<div>
			<form onSubmit={handleSubmit}>
                <label>Team Name</label>
				<input type="text" placeholder="i.e. Milwaukee Brewers" value={teamName} onChange={(event) => setTeamName(event.target.value)} class="ms-3 mb-3" /><br/>
				
                {/* Get the team regions dropdown menu */}
                <React.Fragment>

                <GetTeamRegions teamRegions={teamRegions} region={region}/>
                </React.Fragment>

{/* 
				<input type="text" placeholder="lastName" value={lastName} onChange={(event) => setLastName(event.target.value)} class="ms-3 mb-3" /><br/>
				
				<input type="text" placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} class="ms-3 mb-3" /><br/> */}
				
				<input type="submit" value="Add Team" class="btn btn-primary ms-3 mt-3" />

            </form>
		</div>
	)
}

export default AddTeam;