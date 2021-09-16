import axios from 'axios';


// makes login request with provided credentials
const useLogin = (loginInfo) => {

    const userCredentials = {
    username: loginInfo.username,
    password: loginInfo.password
    }

    // call the database and try to login
    async function loginRequest(userCreds) {
        let response = await axios.post(`https://localhost:44394/api/authentication/login`, userCreds);
        
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            // refresh and send user to home page
            window.location = "/";
        }/*  else {
            console.log("bad api call");
        } */
    }

    // start trying to login as soon as hook is called
    loginRequest(userCredentials);
}

export default useLogin;

