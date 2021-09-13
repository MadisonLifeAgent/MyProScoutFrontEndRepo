import React, { useState } from "react";

// component imports
import useLogin	from '../../hooks/useLogin';
import RegistrationForm from './RegistrationForm'



// Scout account registration form
const Registration = () => {
	// use this to store form input 
	const [newScout, setNewScout] = useState({});
	
	// use this to set newScout with registration form input
	const registerScout = ({newScout}) => {
		setNewScout(newScout);
		
		const registrationInfo = {
			"FirstName": newScout.firstName,
			"LastName": newScout.lastName,
			"UserName": newScout.userName,
			"Password": newScout.password,
			"Email": newScout.email,
			"PhoneNumber": newScout.phoneNumber
		}
		// use hook to post registrationInfo
		useLogin.useLogin(`https://localhost:44394/api/authentication/login`, registrationInfo);
	}
	
	return (
		<div>
			<h3>Account Registration</h3>
			<RegistrationForm />
		</div>
	);
}

export default Registration;