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
		
		if (response) {
			console.log(response.data);
			console.log("firstnamegood api call");
		} else {
			console.log("bad api call");
		}
	}
	
    // submits account registration request
	const handleSubmit = (event) => {
		event.preventDefault();
		editScoutFirstName(firstName, id);
		window.location = "/editmyprofile";
	}

	
	return (
		<div>
			<form onSubmit={handleSubmit}>
                <label>First Name</label>
				<input type="text" placeholder={currentUser.firstName} value={firstName} onChange={(event) => setFirstName(event.target.value)} class="ms-3 mb-3" /><br/>
				
				<input type="submit" value="Save Change" class="btn btn-primary ms-3 mb-3 " />

            </form>
		</div>
	);
}

export default ScoutFirstName;