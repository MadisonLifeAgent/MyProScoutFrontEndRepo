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
	async function createNewAccount(first, last, user, pass, userEmail, phone) {

		const registrationInfo = {
			"FirstName": first,
			"LastName": last,
			"UserName": user,
			"Password": pass,
			"Email": userEmail,
			"PhoneNumber": phone
		}
		let response = await axios.post(`https://localhost:44394/api/authentication/myproscout`, registrationInfo);
		
		if (response) {
			console.log(response.data);
			console.log("good api call");
			window.location = "/register/accountcreated";
		} else {
			console.log("bad api call");
			window.location = "/";
		}
	}
	
	// submits account registration request
	const handleSubmit = (event) => {
		event.preventDefault();
		createNewAccount(firstName, lastName, userName, password, email, phoneNumber);
	}
	
	return (
		<div id="forms">
			<h3 id="pagetitle">Scout Account Registration</h3>
			<form onSubmit={handleSubmit}>
				<label class="form-label input-group">First Name</label>
				<input type="text" name="firstName" value={firstName} onChange={(event) => setFirstName(event.target.value)} class="input-group-text" id="inputfields" required />
				
				<label class="form-label input-group">Last Name</label>

				<input type="text" name="lastName" value={lastName} onChange={(event) => setLastName(event.target.value)} class="input-group-text" id="inputfields" required />
				
				<label class="form-label input-group">Email</label>
				<input type="text" name="email" value={email} onChange={(event) => setEmail(event.target.value)} class="input-group-text" id="inputfields"required />

				<label class="form-label input-group">Phone Number</label>
				<input type="text" name="phoneNumber" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} class="input-group-text" id="inputfields" required />
				
				<label class="form-label input-group">Username</label>
				<input type="text" name="userName" value={userName} onChange={(event) => setUserName(event.target.value)} class="input-group-text" id="inputfields" required />
				
				<label class="form-label input-group">Password (must contain at least 8 characters and 1 number)</label>
				<input type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} class="input-group-text" id="inputfields" required/>

				<input id="newnotebutton" class="mt-3" type="submit" value="Create Account"  />
            </form>
		</div>
	);
}

export default Registration;