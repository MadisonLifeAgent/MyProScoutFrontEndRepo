import React, { useState } from "react";
import axios from 'axios';

// Component or hook imports


// This component allows scouts to edit a player's details
const EditPlayer = (props) => {
    // get player details
    const player = props.location.state.player;

    const playerId = player.playerProfileId;

    //console.log(player);

    // form field variables
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const [age, setAge] = useState();
    const [yearTurnedPro, setYearTurnedPro] = useState();
    const [imageUrl, setImageUrl] = useState();
    const [playerPositionPrimaryName, setPlayerPositionPrimaryName] = useState();
    const [playerPositionSecondaryName, setPlayerPositionSecondaryName] = useState();
    const [playerBattingHandednessName, setPlayerBattingHandednessName] = useState();
    const [playerThrowingHandednessName, setPlayerThrowingHandednessName] = useState();
    const [playerTypeName, setPlayerTypeName] = useState();
    const [baseballTeamName, setBaseballTeamName] = useState();


    // call the database and try to create account
    async function editPlayer(playerId, firstName, lastName, height, weight, age, yearTurnedPro, imageUrl, playerPositionPrimaryName, playerPositionSecondaryName, playerBattingHandednessName, playerThrowingHandednessName, playerTypeName, baseballTeamName) {


        const newId = parseInt(playerId)
        const newHeight = parseInt(height);
        const newWeight = parseInt(weight);
        const newAge = parseInt(age);
        const newYearTurnedPro = parseInt(yearTurnedPro);

        console.log(lastName);

       
        // player info (click left to open)
        const updatedPlayerInfo = {
            "PlayerProfileId": newId,
            "FirstName": firstName,
            "LastName": lastName,
            "Height": newHeight,
            "Weight": newWeight,
            "Age": newAge,
            "YearTurnedPro": newYearTurnedPro,
            "PlayerImageUrl": imageUrl,
            "PlayerPositionPrimaryName": playerPositionPrimaryName,
            "PlayerPositionSecondaryName": playerPositionSecondaryName, 
            "PlayerBattingHandednessName": playerBattingHandednessName, 
            "PlayerThrowingHandednessName": playerThrowingHandednessName,
            "PlayerTypeName": playerTypeName,
            "BaseballTeamName": baseballTeamName
        }
        try{
            await axios.put(`https://localhost:44394/api/playerprofile/edit/${newId}`, updatedPlayerInfo);
            window.location = '/myplayers';
        
        }catch(ex){
            console.log("bad api call");

        }
    }



    // submits new player request
    const handleSubmit = (event) => {
        event.preventDefault();

        // check to make sure variables aren't null
        if (!firstName) {
            setFirstName(player.firstName);
        }
        if (!lastName) {
            setLastName(player.lastName);
        }
        if (!height) {
            setHeight(player.height);
        }
        if (!weight) {
            setWeight(player.weight);
        }
        if (!age) {
            setAge(player.age);
        }
        if (!yearTurnedPro) {
            setYearTurnedPro(player.yearTurnedPro);
        }
        if (!imageUrl) {
            setImageUrl(player.playerImageUrl);
        }
        if (!playerPositionPrimaryName) {
            setPlayerPositionPrimaryName(player.playerPositionPrimaryName);
        }
        if (!playerPositionSecondaryName) {
            setPlayerPositionSecondaryName(player.playerPositionSecondaryName);
        }
        if (!playerBattingHandednessName) {
            setPlayerBattingHandednessName(player.playerBattingHandednessName);
        }
        if (!playerThrowingHandednessName) {
            setPlayerThrowingHandednessName(player.playerThrowingHandednessName);
        }
        if (!playerTypeName) {
            setPlayerTypeName(player.playerTypeName);
        }
        if (!baseballTeamName) {
            setBaseballTeamName(player.baseballTeamName);
        }

        
        editPlayer(playerId, firstName, lastName, height, weight, age, yearTurnedPro, imageUrl, playerPositionPrimaryName, playerPositionSecondaryName, playerBattingHandednessName, playerThrowingHandednessName, playerTypeName, baseballTeamName);

    }

    // add player form
    return (
        <div id="forms">
            <h3 id="pagetitle">Edit Player Details</h3>
            <form onSubmit={handleSubmit}>
                <input type="submit" value="Auto-fill Form" id="newnotebutton" />

                <input type="submit" value="Save Changes" id="newnotebutton" />

                <a href="/myplayers" id="newnotebutton">Go Back</a>

                <label class="form-label input-group">First Name: {player.firstName}</label>
                <input id="inputfields" type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} class="input-group-text" />
                
                <label class="form-label input-group">Last Name: {player.lastName}</label>
                <input id="inputfields" type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} class="input-group-text" />
                
                <label class="form-label input-group">Height: {player.height}</label>
                <input id="inputfields" type="text" value={height} onChange={(event) => setHeight(event.target.value)} class="input-group-text" />
                
                <label class="form-label input-group">Weight: {player.weight}</label>
                <input id="inputfields" type="text" value={weight} onChange={(event) => setWeight(event.target.value)} class="input-group-text" />
                
                <label class="form-label input-group">Age: {player.age}</label>
                <input id="inputfields" type="text" value={age} onChange={(event) => setAge(event.target.value)} class="input-group-text" />
                
                <label class="form-label input-group">Image Url: {player.PlayerImageUrl}</label>
                <input id="inputfields" type="text" value={imageUrl} onChange={(event) => setImageUrl(event.target.value)} class="input-group-text" />

                <label class="form-label input-group">Year Turned Pro: {player.yearTurnedPro}</label>
                <input id="inputfields" type="text" value={yearTurnedPro} onChange={(event) => setYearTurnedPro(event.target.value)} class="input-group-text" />

                <label class="form-label input-group">Primary Position: {player.playerPositionPrimaryName}</label>
                <input id="inputfields" type="text" value={playerPositionPrimaryName} onChange={(event) => setPlayerPositionPrimaryName(event.target.value)} class="input-group-text" />

                <label class="form-label input-group">Secondary Positin: {player.playerPositionSecondaryName}</label>
                <input id="inputfields" type="text" value={playerPositionSecondaryName} onChange={(event) => setPlayerPositionSecondaryName(event.target.value)} class="input-group-text" />

                <label class="form-label input-group">Batthing Handedness: {player.playerBattingHandednessName}</label>
                <input id="inputfields" type="text" value={playerBattingHandednessName} onChange={(event) => setPlayerBattingHandednessName(event.target.value)} class="input-group-text" />
                
                <label class="form-label input-group">Throwing Handedness: {player.playerThrowingHandednessName}</label>
                <input id="inputfields" type="text" value={playerThrowingHandednessName} onChange={(event) => setPlayerThrowingHandednessName(event.target.value)} class="input-group-text" />
                               
                <label class="form-label input-group">Player Type: {player.playerTypeName}</label>
                <input id="inputfields" type="text" value={playerTypeName} onChange={(event) => setPlayerTypeName(event.target.value)} class="input-group-text" />                
                
                <label class="form-label input-group">Current Team: {player.baseballTeamName}</label>
                <input id="inputfields" type="text" value={baseballTeamName} onChange={(event) => setBaseballTeamName(event.target.value)} class="input-group-text"/>

                <input type="submit" value="Auto-fill Form" id="newnotebutton" class="mt-3"/>

                <input type="submit" value="Save Changes" id="newnotebutton" />

                <a href="/myplayers" id="newnotebutton">Go Back</a>

            </form>
        </div>
    );
}

export default EditPlayer;