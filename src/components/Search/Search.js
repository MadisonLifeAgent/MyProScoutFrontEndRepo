import React, { useState } from "react";
import { Link } from "react-router-dom";

// Component or hook imports

// Page to search for players
const Search = (props) => {
    // search term
    const [searchTerm, setSearchTerm] = useState('');

    // set category values
    const position = "position";
    const team = "team"
    const empty = "";

    //search category
    const [category, setCategory] = useState();

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const onSelect = (event) => {
        setCategory(event.target.value);
        console.log(event.target.value);
    }
    
     // display search bar 
        return (
            <div>
                <h3>Player Search</h3>
                <form >
                    <select class="form-select" name="category" aria-label="Default select example" onChange={onSelect}>
                        <option value={empty} >Select Category</option>
                        <option value={position} >Position Search</option>
                        <option value={team} >Team Search</option>
                    </select>
                    <input type="text" name="searchTerm"  onChange={handleChange}/>

                    <Link class="btn btn-primary ms-3" type="submit" to={{
                        pathname: `/search/results:${searchTerm}`,
                        state: {
                            searchTerm: searchTerm,
                            category: category,
                        }
                    }}>Search</Link>
                </form>

            </div>
        )
    }

export default Search;