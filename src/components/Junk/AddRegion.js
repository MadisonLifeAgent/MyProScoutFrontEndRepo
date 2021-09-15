import React, { useState, useEffect } from "react";
import axios from "axios";

// component imports

// Scout account registration form
const AddRegion = () => {
	// form field variables
	const [newRegion, setRegion] = useState();

    // call the database and try to create team
	async function addRegion(regionName) {

		const regionInfo = {
            "Region": regionName,
		}
		let response = await axios.post(`https://localhost:44394/api/regions/add`, regionInfo);
		
		if (response) {
			console.log("good api call");
		} else {
			console.log("bad api call");
		}
	}
    
    // submit new region
    const handleSubmit = (event) => {
		event.preventDefault();
        addRegion(newRegion);
		
	}
	
	// registration form
	return (
		<div>
			<form onSubmit={handleSubmit}>
                <label>Add New Region</label>
				<input type="text" placeholder="i.e. Region Name" value={newRegion} onChange={(event) => setRegion(event.target.value)} class="ms-3 mb-3" /><br/>

				
				<input type="submit" value="Add Team" class="btn btn-primary ms-3 mt-3" />

            </form>
		</div>
	)
}

export default AddRegion;