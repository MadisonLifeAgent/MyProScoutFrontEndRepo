import React, { useState } from "react";
import { Link } from "react-router-dom";

// Component or hook imports
import './Search.css';

// Page to search for players
const Search = (props) => {
    // search term
    const [searchTerm, setSearchTerm] = useState('');
    //default search category to player
    const [category, setCategory] = useState('player');

    // set category values
    const position = "position";
    const team = "team";
    const player = "player";
    const battingHand = "battinghand";
    const throwingHand = "throwinghand";
    const playerType = "playertype";
    const region = "region";
    const competitionLevel = "competitionlevel"

    // set search term on submit
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    // set category filter once selected
    const onSelect = (event) => {
            setCategory(event.target.value);
    }
    
     // display search bar and drop down option
        return (
            <div id="forms">
                <h3 id="pagetitle">Player Search</h3>
                <div class="row">
                    
                    <form class="row">
                        <div class="input-group mb-3 col-auto">    
                            <div class="col-sm-auto col-lg-auto">
                                <select class="form-select" id="selectbutton" name="category" aria-label="Default select example" onChange={onSelect}>
                                    <option value={player} selected >Player</option>
                                    <option value={position} >Position Search</option>
                                    <option value={team} >Team</option>
                                    <option value={region} >Region</option>
                                    <option value={competitionLevel} >Competition Level</option>
                                    <option value={battingHand} >Batting Handedness</option>
                                    <option value={throwingHand} >Throwing Handedness</option>
                                    <option value={playerType} >Player Type</option>
                                </select>
                            </div>
                            <div class="col-sm-auto col-lg-6 ms-1">
                                <input type="text" id="inputfields" name="searchTerm" class="form-control" onChange={handleChange}/>
                            </div>

                            <div class="col-sm-auto col-lg-auto ms-1">
                                <Link id="newnotebutton" class="form-control text-center" type="submit" to={{
                                    pathname: `/search/results:${searchTerm}:${category}`,
                                    state: {
                                        searchTerm: searchTerm,
                                        category: category,
                                    }
                                }}>Search</Link>
                            </div>
                        </div>
                    </form>

                </div>

            </div>
        )
    }

export default Search;