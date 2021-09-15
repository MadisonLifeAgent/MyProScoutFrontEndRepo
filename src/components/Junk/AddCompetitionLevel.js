import React, { useState, useEffect } from "react";
import axios from "axios";


// component imports

// get regions for user selection
const AddCompetitionLevel = (props) => {
	console.log(props.teamName);
	
	const [selectedCompLevel, setSelectedCompLevel] = useState();

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

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(selectedCompLevel);
	}
    


	// map out the team regions and display them
	const showCompetitionLevels = competitionLevels.map((item) => {
		// display each item as a selectable option
		return (
			<React.Fragment>
				<input type="radio" id={item.competitionLevelName} name="competitionLevel" value={item.competitionLevelId} onSelect={(event) => props.setCompetitionLevelId(event.target.value)} />
				<label for={item.competitionLevelName}>{item.competitionLevelName}</label>
				<br/>
				</React.Fragment>
		)
	})

	// return all radio buttons
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>Select Team Competition Level</label>
					<ul>
						{showCompetitionLevels}
					</ul>
			</form>
		</div>		
	)
}

export default AddCompetitionLevel;