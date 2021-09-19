import React, { useState, useEffect }from "react";
import { Link } from "react-router-dom";
import axios from "axios";


// component imports
import usePlayerSearch from "../../hooks/usePlayerSearch"; 
import Search from "./Search";

const SearchResults = (props) => {
    // get the search term
    const searchTerm = props.location.state.searchTerm;
    const category = props.location.state.category;

    console.log(category);

    const [playerSearchResults, setPlayerSearchResults] = useState([{}]);

    // query the database right away and return the results
    async function searchByPlayerName(searchWord) {

        let response = await axios.get(`https://localhost:44394/api/playerprofile/playersearch/name/${searchWord}`);

        if (response) {
            console.log("good call");
            setPlayerSearchResults(response.data)
        } else {
            console.log("bad api call");
        }
    }

    // search for players base on their teams
    async function searchByPlayerTeam(searchWord) {
        let response = await axios.get(`https://localhost:44394/api/playerprofile/playersearch/teamsearch/${searchWord}`);
       
        if (response) {
            console.log("good call");
            setPlayerSearchResults(response.data);
        } else {
            console.log("bad api call");
        }
    }

    // search for players based on positions
    async function searchByPosition(searchWord) {
        let response = await axios.get(`https://localhost:44394/api/playerprofile/playersearch/positionsearch/${searchWord}`);
        
        if (response) {
            console.log("good call");
            setPlayerSearchResults(response.data);
        } else {
            console.log("bad api call");
        }
    }

    // search for players based on batting handedness
    async function searchByBattingHandedness(searchWord) {
        let response = await axios.get(`https://localhost:44394/api/playerprofile/playersearch/battinghandedness/${searchWord}`);
        
        if (response) {
            console.log("good call");
            setPlayerSearchResults(response.data);
        } else {
            console.log("bad api call");
        }
    }

    // search for players based on throwing handedness
    async function searchByThrowingHandedness(searchWord) {
        let response = await axios.get(`https://localhost:44394/api/playerprofile/playersearch/throwinghandedness/${searchWord}`);
        
        if (response) {
            console.log("good call");
            setPlayerSearchResults(response.data);
        } else {
            console.log("bad api call");
        }
    }

    // search for players based player type
    async function searchByPlayerType(searchWord) {
        let response = await axios.get(`https://localhost:44394/api/playerprofile/playersearch/playertype/${searchWord}`);
        
        if (response) {
            console.log("good call");
            setPlayerSearchResults(response.data);
        } else {
            console.log("bad api call");
        }
    }

    // search for players based their teams region
    async function searchByRegion(searchWord) {
        let response = await axios.get(`https://localhost:44394/api/playerprofile/playersearch/region/${searchWord}`);
        
        if (response) {
            console.log("good call");
            setPlayerSearchResults(response.data);
        } else {
            console.log("bad api call");
        }
    }

    // search for players based their teams competition level
    async function searchByCompetitionLevel(searchWord) {
        let response = await axios.get(`https://localhost:44394/api/playerprofile/playersearch/competitionlevel/${searchWord}`);
        
        if (response) {
            console.log("good call");
            setPlayerSearchResults(response.data);
        } else {
            console.log("bad api call");
        }
    }
    
    // determine which query to used based on user input from search bar
    useEffect(() => {
        if(category === "player") {
            searchByPlayerName(searchTerm);
        } else if (category === "team") {
            searchByPlayerTeam(searchTerm);
        } else if (category === "position") {
            searchByPosition(searchTerm);
        } else if (category === "battinghand") {
            searchByBattingHandedness(searchTerm);
        } else if (category === "throwinghand") {
            searchByThrowingHandedness(searchTerm);
        } else if (category === "playertype") {
            searchByPlayerType(searchTerm);
        } else if (category === "region") {
            searchByRegion(searchTerm);
        } else if (category === "competitionlevel") {
            searchByCompetitionLevel(searchTerm);
        }
    },[!playerSearchResults]);

    // display the results to the page

    const showSearchResults = playerSearchResults.map((item) => {
        return (
            <div>
                <dt>{item.firstName} {item.lastName}</dt>
                    <dd>Position: {item.playerPositionPrimaryName}</dd>
                    <dd>Team: {item.baseballTeamName}</dd>
            </div>
        )
    })

    // display results if available
    if (playerSearchResults.length > 0) {
        return (
            <div>
                <h4>{category} search results for "{searchTerm}"</h4>
                <Link to="/search" class="btn btn-primary">Go Back</Link>
                <dl>{showSearchResults}</dl>
            </div>
        )
    }

    // display message if no results
    else {
        return (
            <div>
                <h4>No results for "{searchTerm}"</h4>
                <Link to="/search" class="btn btn-primary">Go Back</Link>

            </div>
        )

    }

}


export default SearchResults;