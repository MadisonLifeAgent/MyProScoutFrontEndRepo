import React from "react";
import { Link } from "react-router-dom";

// component imports
import usePlayersNameSearch from "../../hooks/usePlayerNameSearch"; 

const SearchResults = (props) => {
    // get the search term
    const searchTerm = props.location.state.searchTerm;
    const category = props.location.state.category;

    console.log(searchTerm);
    console.log(category);

    // query the database right away and return the results

    // display the results to the page
    const playerNameSearchResults = usePlayersNameSearch(searchTerm);

    console.log(playerNameSearchResults);

    return (
        <div>
            <h4>Search Results for {searchTerm}</h4>
            <p>{playerNameSearchResults[0].firstName}</p>
        </div>
    )
}


export default SearchResults;