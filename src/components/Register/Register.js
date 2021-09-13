import React, { useState } from "react";
import axios from 'axios';


// Scout account registration form
const Registration = () => {
	// form field variables
	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
	const [userName, setUserName] = useState();
	const [password, setPassword] = useState();
	const [email, setEmail] = useState();
	const [phoneNumber, setPhoneNumber] = useState();


	// call the database and try to create account
	async function createNewAccount(first, last, user, pass, useremail, phone) {

		const registrationInfo = {
			"FirstName": first,
			"LastName": last,
			"UserName": user,
			"Password": pass,
			"Email": useremail,
			"PhoneNumber": phone
		}
		let response = await axios.post(`https://localhost:44394/api/authentication/myproscout`, registrationInfo);
		
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
		createNewAccount(firstName, lastName, userName, password, email, phoneNumber);
		window.location = "/login";
	}
	
	return (
		<div>
			<h3>Scout Account Registration</h3>
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="firstName" value={firstName} onChange={(event) => setFirstName(event.target.value)} class="ms-3 mb-3" /><br/>
				
				<input type="text" placeholder="lastName" value={lastName} onChange={(event) => setLastName(event.target.value)} class="ms-3 mb-3" /><br/>
				
				<input type="text" placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} class="ms-3 mb-3" /><br/>
				
				<input type="text" placeholder="phoneNumber" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} class="ms-3 mb-3" /><br/>
				
				<input type="text" placeholder="userName" value={userName} onChange={(event) => setUserName(event.target.value)} class="ms-3 mb-3" /><br/>
				
				<input type="password" placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)} class="ms-3 mb-3"  /><br/>

				<input type="submit" value="Login" class="btn btn-primary ms-3" />

            </form>
		</div>
	);
}

export default Registration;