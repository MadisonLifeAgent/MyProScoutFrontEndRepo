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

    async function searchByPlayerTeam(searchWord) {
        let response = await axios.get(`https://localhost:44394/api/playerprofile/playersearch/teamsearch/${searchWord}`);
       
        if (response) {
            console.log("good call");
            setPlayerSearchResults(response.data);
        } else {
            console.log("bad api call");
        }
    }
    
    useEffect(() => {
        if(category === "player") {
            searchByPlayerName(searchTerm);
        } else if (category === "team") {
            searchByPlayerTeam(searchTerm);
        } else if (category === "position") {

        }
    },[!playerSearchResults]);

    // display the results to the page

    console.log(playerSearchResults);
    const showSearchResults = playerSearchResults.map((item) => {
        return (
            <div>
                <dt>{item.firstName} {item.lastName}</dt>
                    <dd>Position: {item.playerPositionPrimaryName}</dd>
                    <dd>Team: {item.baseballTeamName}</dd>
            </div>
        )
    })

    return (
        <div>
            <h4>Search Results for "{searchTerm}"</h4>
            <Link to="/search" class="btn btn-primary">Go Back</Link>
            <dl>{showSearchResults}</dl>
        </div>
    )
}


export default SearchResults;