import axios from 'axios';


// makes login request with provided credentials
const useRegister = (registerInfo) => {

    // call the database and try to login
    async function createNewAccount(registerinformation) {
        let response = await axios.post(`https://localhost:44394/api/authentication`, registerinformation);
        
        if (response) {
            console.log(response.data);
            console.log("good api call");
        } else {
            console.log("bad api call");
        }
    }

    // start trying to login as soon as hook is called
    createNewAccount(registerInfo);
}

export default useRegister;

