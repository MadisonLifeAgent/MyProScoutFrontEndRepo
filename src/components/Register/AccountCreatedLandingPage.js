import React from "react";
import './AccountCreatedLandingPage.css';

// landing page after creating account
const AccountCreatedLandingPage = () => {

    return (
        <div id="forms">
            <h3 id="pagetitle">Congrats! Your account has been created!</h3>

            <a id="newnotebutton" href="/login">Click Here to Login</a>
        </div>

    )
}

export default AccountCreatedLandingPage;