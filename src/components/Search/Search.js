import React, { useState } from "react";
import { Link } from "react-router-dom";

// Component or hook imports

// Page to search for players
const Search = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    console.log(searchTerm);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }
    
     // display search bar
        return (
            <div>
                <h3>Player Search</h3>
                <form >
                    <input type="text" name="searchTerm"  onChange={handleChange}/>

                    <Link class="btn btn-primary ms-3" type="submit" to={{
                        pathname: `/search/results:${searchTerm}`,
                        state: {
                            searchTerm: searchTerm,
                        }
                    }}>Search</Link>
                </form>

            </div>
        )
    }

export default Search;