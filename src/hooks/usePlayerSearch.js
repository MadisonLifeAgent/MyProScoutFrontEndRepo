import React, { useState, useEffect }from "react";
import axios from "axios";

// this component searches for players using user entered search term
const usePlayerSearch = (searchTerm) => {
    const [searchResults, setSearchResults] = useState([{}])

    async function searchByPlayerName(searchWord) {

        let response = await axios.get(`https://localhost:44394/api/playerprofile/playersearch/name/${searchWord}`);

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
        searchByPlayerName(searchTerm);
    },[]);


    return searchResults;
    
}

export default usePlayerSearch;