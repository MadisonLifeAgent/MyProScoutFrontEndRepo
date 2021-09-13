import React, { useState } from "react";

// import registform


// Scout account registration form
const RegistrationForm = ({ registerScout }) => {
	// form field variables
	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
	const [userName, setUserName] = useState();
	const [password, setPassword] = useState();
	const [email, setEmail] = useState();
	const [phoneNumber, setPhoneNumber] = useState();
	
	
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(userName);
		
		// set registration information
		registerScout.registerScout(firstName, lastName, userName, password, email, phoneNumber);
		
		
	}
	
	// registration form
	return (
		<div>
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
	)
}

export default RegistrationForm;