import React, { useState } from "react";
import axios from 'axios';

// Scout account registration form
const ScoutFirstName = (props) => {
    // get passed in props
    const id = props.id;
    const currentUser = props.currentUser;

    const [firstName, setFirstName] = useState();

	// call the database and try to post edited scout info
	async function editScoutFirstName(first, id) {
		const updateInfo = {
			"firstName": first,
            "id": id,
		}

		let response = await axios.put(`https://localhost:44394/api/myproscout/edit/firstname`, updateInfo);
		
		/* if (response) {
			console.log(response.data);
			console.log("firstnamegood api call");
		} else {
			console.log("bad api call");
		} */
	}
	
    // submits account registration request
	const handleSubmit = (event) => {
		event.preventDefault();
		editScoutFirstName(firstName, id);
		window.location = "/editmyprofile";
	}

	
	return (
		<div class="mt-4">
			<form onSubmit={handleSubmit}>
                <label class="form-label input-group">First Name</label>
				<input id="inputfields" type="text" placeholder={currentUser.firstName} value={firstName} onChange={(event) => setFirstName(event.target.value)} class="input-group-text mb-1" /><br/>
				
				<input type="submit" value="Save Change" id="newreportbutton" class="mb-4"/>

            </form>
		</div>
	);
}

export default ScoutFirstName;