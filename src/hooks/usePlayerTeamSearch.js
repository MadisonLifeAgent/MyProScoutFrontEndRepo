import React, { useState, useEffect }from "react";
import axios from "axios";

// this component searches for players using user entered search term
const usePlayerTeamSearch = (searchTerm, category) => {
    const [searchResults, setSearchResults] = useState([{}])

    async function searchByPlayerTeam(searchWord) {
        let response = await axios.get(`https://localhost:44394/api/playerprofile/playersearch/teamsearch/${searchWord}`);

        // refresh the current page
        //window.location = "/myscoutingreports/viewreport";
        
        if (response) {
            console.log("good call");
            console.log(response.data);
            setSearchResults(response.data);
        } else {
            console.log("bad api call");
        }
    }


    useEffect(() => {
        if(category !== "team") {
            return;
        } else {
            searchByPlayerTeam(searchTerm);
        }
    },[]);


    return searchResults;
    
}

export default usePlayerTeamSearch;