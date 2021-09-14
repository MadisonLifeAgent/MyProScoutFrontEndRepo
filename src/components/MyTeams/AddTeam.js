import React, { useState, useEffect } from "react";
import axios from "axios";

// component imports
// import GetTeamRegions from "./GetTeamRegions";
import GetCompetitionLevel from "./GetCompetitionLevel";

// Scout account registration form
const AddTeam = () => {
	// form field variables
	const [teamName, setTeamName] = useState();
	const [region, setRegion] = useState();
	const [competitionLevelId, setcompetitionLevelId] = useState();

    // call the database and try to create team
	async function createNewTeam(newTeamName, newTeamRegion, newTeamCompetitionLevelId) {
        console.log(newTeamCompetitionLevelId);

		const newTeamInfo = {
            "BaseballTeamName": newTeamName,
            "RegionName": newTeamRegion,
            "CompetitionLevelId": parseInt(newTeamCompetitionLevelId)
		}
		let response = await axios.post(`https://localhost:44394/api/baseballteams/add`, newTeamInfo);
		
		if (response) {
			console.log("good api call");
		} else {
			console.log("bad api call");
		}
	}

    const [competitionLevels, setcompetitionLevels] = useState([{}]);

    // get all available regions
    async function getTeamCompetitionLevels() {
    try{
        let response = await axios.get("https://localhost:44394/api/competitionlevels");
        // if good api call ste the competiton levels
        console.log(response.data);
        setcompetitionLevels(response.data);
        }
        catch(ex) {
            console.log("bad api call");
        }
    }
        
// get competition levels as soon as Add Team componenet is requested
        useEffect(() => {
        getTeamCompetitionLevels();
    },[]);
    


	// map out the team regions and display them
	const showCompetitionLevels = competitionLevels.map((item) => {
		// display each item as a selectable option
		return (
			<React.Fragment>

 				<input type="radio" id={item.competitionLevelName} name="competitionLevel" value={item.competitionLevelId} onSelect={(event) => this.setCompetitionLevelId(event.target.value)} />
				<label for={item.competitionLevelName}>{item.competitionLevelName}</label>
				<br/>
			</React.Fragment>

		)
	})



	
    const handleSubmit = (event) => {
		event.preventDefault();
		console.log(teamName);
        console.log(region);
        console.log(competitionLevelId)
		
		// set registration information
		createNewTeam(teamName, region, competitionLevelId);
	}
	
	// registration form
	return (
		<div>
			<form onSubmit={handleSubmit}>
                <label>Team Name</label>
				<input type="text" placeholder="i.e. Milwaukee Brewers" value={teamName} onChange={(event) => setTeamName(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Team Region</label>
				<input type="text" placeholder="i.e. Midwest" value={region} onChange={(event) => setRegion(event.target.value)} class="ms-3 mb-3" /><br/>

{/*                 <label>Team Competition Level</label>
				<input type="text" placeholder="i.e. Triple A" value={competitionLevel} onChange={(event) => setcompetitionLevel(event.target.value)} class="ms-3 mb-3" /><br/> */}

                <label>Select Team Competition Level</label>
                <ul>
                    {showCompetitionLevels}
			    </ul>
				
				<input type="submit" value="Add Team" class="btn btn-primary ms-3 mt-3" />

            </form>

            				
                {/* Get the team regions dropdown menu */}
{/*                 <React.Fragment>

                <GetTeamRegions teamRegions={teamRegions} region={region}/>
                </React.Fragment>


				<input type="text" placeholder="lastName" value={lastName} onChange={(event) => setLastName(event.target.value)} class="ms-3 mb-3" /><br/>
				
				<input type="text" placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} class="ms-3 mb-3" /><br/> */}
		</div>
	)
}

export default AddTeam;