import React, { useState } from "react";

// Scout account registration form
const RegistrationForm = ({ registerScout }) => {
	// form field variables
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	
	
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(userName);
		
		// set registration information
		registerScout(firstName, lastName, userName, password, email, phoneNumber);
		
		
	}
	
	// registration form
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" placholder="firstName" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
				
				<input type="text" placholder="lastName" value={lastName} onChange={(event) => setLastName(event.target.value)} />
				
				<input type="text" placholder="email" value={email} onChange={(event) => setEmail(event.target.value)} />
				
				<input type="text" placholder="phoneNumber" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
				
				<input type="text" placholder="userName" value={userName} onChange={(event) => setUserName(event.target.value)} />
				
				<input type="text" placholder="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </form>
		</div>
	)
}

export default RegistrationForm;