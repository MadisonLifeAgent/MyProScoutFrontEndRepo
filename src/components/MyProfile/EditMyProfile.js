import React, { useState, useEffect } from "react";
import axios from 'axios';


// Scout account registration form
const EditMyProfile = (props) => {
    const jwt = localStorage.getItem('token');

    const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
	const [userName, setUserName] = useState();
	const [password, setPassword] = useState();
	const [email, setEmail] = useState();
	const [phoneNumber, setPhoneNumber] = useState();

    // const [currentFirst, setCurrentFirst] = useState();
	// const [currentLast, setCurrentLast] = useState();
	// const [currentUsername, setCurrentUsername] = useState();
	// //const [currentPassword, setCurrentPassword] = useState();
	// const [currentEmail, setCurrentEmail] = useState();
	// const [currentPhoneNumber, setCurrentPhoneNumber] = useState();

    //get current user details
    const [currentUser, setCurrentuser] = useState({});

    // this function gets the current scout's information
    async function getScoutInformation(token) {
    	const response  = await axios.get(`https://localhost:44394/api/myproscout/user`, { headers: {Authorization: 'Bearer ' + token}});
		
		if (response.data) {
			console.log("good api call");
            setCurrentuser(response.data);
		} else {
			console.log("bad api call");
		}
	}

    // get scout information that is to be edited
    useEffect(() => {
        getScoutInformation(jwt);  // add if/else statement
    },[currentUser]);

	// call the database and try to post edited scout info
	async function editMyProfile(first, last, user, pass, useremail, phone) {

		const updateInfo = {
			"FirstName": first,
			"LastName": last,
			"UserName": user,
			"Password": pass,
			"Email": useremail,
			"PhoneNumber": phone
		}
		let response = await axios.put(`https://localhost:44394/api/authentication/myproscout`, updateInfo);
		
		if (response) {
			console.log(response.data);
			console.log("good api call");
		} else {
			console.log("bad api call");
		}
	}
	
    // submits account registration request
	const handleSubmit = (event) => {
		event.preventDefault();
		editMyProfile(firstName, lastName, userName, password, email, phoneNumber);
		window.location = "/editmyprofile";
	}

	
	return (
		<div>
			<h3>Edit myProfile</h3>
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder={currentUser.firstName} value={firstName} onChange={(event) => setFirstName(event.target.value)} class="ms-3 mb-3" /><br/>
				
				<input type="text" placeholder={currentUser.lastName} value={lastName} onChange={(event) => setLastName(event.target.value)} class="ms-3 mb-3" /><br/>
				
				<input type="text" placeholder={currentUser.email} value={email} onChange={(event) => setEmail(event.target.value)} class="ms-3 mb-3" /><br/>
				
				<input type="text" placeholder={currentUser.phoneNumber} value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} class="ms-3 mb-3" /><br/>
				
				<input type="text" placeholder={currentUser.userName} value={userName} onChange={(event) => setUserName(event.target.value)} class="ms-3 mb-3" /><br/>
				
				<input type="password" placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)} class="ms-3 mb-3"  /><br/>

				<input type="submit" value="Login" class="btn btn-primary ms-3" />

            </form>
		</div>
	);
}

export default EditMyProfile;