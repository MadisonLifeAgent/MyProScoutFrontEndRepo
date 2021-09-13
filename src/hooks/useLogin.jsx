import axios from 'axios';


// makes login request with provided credentials
const useLogin = (dataUrl, loginInfo) => {
const userCredentials

    // call the database and try to login
    async function loginRequest(loginInfo) {
        let response = await axios.post(`https://localhost:44394/api/authentication/login`, loginInfo);
        
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            console.log("good login");
            console.log(response.data.token);

            // refresh and send user to home page
            window.location = "/";
        } else {
            console.log("bad api call");
        }
    }

    // start trying to login as soon as hook is called
    loginRequest(dataUrl);
}

export default useLogin;

    //useLogin(`https://localhost:44394/api/authentication/login`, registrationInfo);
