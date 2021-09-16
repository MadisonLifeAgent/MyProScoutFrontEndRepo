import React, { useState } from "react";
import axios from 'axios';

// Scout account registration form
const ScoutEmail = (props) => {
    // get passed in props
    const id = props.id;
    const currentUser = props.currentUser;

    const [email, setEmail] = useState();

	// call the database and try to post edited scout info
	async function editScoutEmail(email, id) {
		const updateInfo = {
			"email": email,
            "id": id,
		}

		let response = await axios.put(`https://localhost:44394/api/myproscout/edit/email`, updateInfo);
		
/* 		if (response) {
			console.log(response.data);
		} else {
			console.log("bad api call");
		} */
	}
	
    // submits account registration request
	const handleSubmit = (event) => {
		event.preventDefault();
		editScoutEmail(email, id);
		window.location = "/editmyprofile";
	}

	
	return (
		<div>
			<form onSubmit={handleSubmit}>
                <label>Email</label>
				<input type="text" placeholder={currentUser.email} value={email} onChange={(event) => setEmail(event.target.value)} class="ms-3 mb-3" /><br/>
				
				<input type="submit" value="Save Change" class="btn btn-primary ms-3 mb-3 " />

            </form>
		</div>
	);
}

export default ScoutEmail;