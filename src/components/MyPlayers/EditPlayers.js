import React, { useState } from "react";
import axios from 'axios';

// Component or hook imports


// This component allows scouts to edit a player's details
const EditPlayer = (props) => {
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
    async function addNewPlayer(firstName, lastName, height, weight, age, yearTurnedPro, imageUrl, playerPositionPrimaryName, playerPositionSecondaryName, playerBattingHandednessName, playerThrowingHandednessName, playerTypeName, baseballTeamName) {

        const newHeight = parseInt(height);
        const newWeight = parseInt(weight);
        const newAge = parseInt(age);
        const newYearTurnedPro = parseInt(yearTurnedPro);
       
        // player info (click left to open)
        const newPlayerInfo = {
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
            "BaseballTeamName": baseballTeamName,

            // default stat values
            "CareerTotalPitches": 0,
            "CareerPitchingWins": 0,
            "CareerPitchingLosses": 0,
            "CareerPitchingInningsPitched": 0,
            "CareerPitchingSaves": 0,
            "CareerPitchingBlownSaves": 0,
            "CareerPitchingCompleteGames": 0,

            "CareerPitchingBalls": 0,
            "CareerPitchingWalks": 0,
            "CareerPitchingStrikes": 0,
            "CareerPitchingStrikeouts": 0,
            "CareerPitchingFoulBalls": 0,
            "CareerPitchingHitBatter": 0,
            "CareerPitchingWildPitch": 0,
            "CareerPitchingPickOffAttempt": 0,
            "CareerPitchingPickOffSuccess": 0,
            "CareerPitchingNumberOfBattersFaced": 0,

            "CareerPitchingHitsAllowed": 0,
            "CareerPitchingHitSingle": 0,
            "CareerPitchingHitDoubles": 0,
            "CareerPitchingHitTriples": 0,
            "CareerPitchingHomeRunsAllowed": 0,
            "CareerPitchingGroundOuts": 0,
            "CareerPitchingFlyout": 0,
            "CareerPitchingRunsAllowed": 0,

            "CareerPlateAppearances": 0,
            "CareerOnBaseCount": 0,
            "CareerHitByPitch": 0,
            "CareerBalls": 0,
            "CareerBaseOnBalls": 0,
            "CareerStrikes": 0,
            "CareerStrikeOuts": 0,
            "CareerFoulBalls": 0,

            "CareerHits": 0,
            "CareerSingles": 0,
            "CareerDoubles": 0,
            "CareerTriples": 0,
            "CareerHomeruns": 0,
            "CareerSacFly": 0,
            "CareerRbis": 0,
            "CareerGroundOuts": 0,
            "CareerGroundOutDoublePlay": 0,
            "CareerOutByTriplePlay": 0,
            "CareerFlyout": 0,
            "CareerRisp": 0,
            "CareerRispSuccess": 0,
            "CareerRispFail": 0,

            "CareerAdvancedToSecond": 0,
            "CareerAdvancedToThird": 0,
            "CareerIsp": 0,
            "CareerRunsScored": 0,
            "CareerStolenBases": 0,
            "CareerCaughtStealing": 0,
            "CareerPickedOff": 0,
            "CareerTotalBases": 0,
            "CareerForcedOut": 0,
            "CareerTaggedOut": 0
        }
        //try{
            await axios.post('https://localhost:44394/api/playerprofile/add', newPlayerInfo);
            window.location = '/myplayers';
        //}
        /* catch(ex){
            console.log("bad api call");

        } */
    }

    // submits new player request
    const handleSubmit = (event) => {
        event.preventDefault();
        addNewPlayer(firstName, lastName, height, weight, age, yearTurnedPro, imageUrl, playerPositionPrimaryName, playerPositionSecondaryName, playerBattingHandednessName, playerThrowingHandednessName, playerTypeName, baseballTeamName);
    }

    // add player form
    return (
        <div>
            <h3>Enter Player Details</h3>
            <form onSubmit={handleSubmit}>

                <label>First Name</label>
                <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} class="ms-3 mb-3" /><br/>
                
                <label>Last Name</label>
                <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} class="ms-3 mb-3" /><br/>
                
                <label>Height</label>
                <input type="text" value={height} onChange={(event) => setHeight(event.target.value)} class="ms-3 mb-3" /><br/>
                
                <label>Weight</label>
                <input type="text" value={weight} onChange={(event) => setWeight(event.target.value)} class="ms-3 mb-3" /><br/>
                
                <label>Age</label>
                <input type="text" value={age} onChange={(event) => setAge(event.target.value)} class="ms-3 mb-3" /><br/>
                
                <label>Image Url</label>
                <input type="text" value={imageUrl} onChange={(event) => setImageUrl(event.target.value)} class="ms-3 mb-3"  /><br/>

                <label>Year Turned Pro</label>
                <input type="text" value={yearTurnedPro} onChange={(event) => setYearTurnedPro(event.target.value)} class="ms-3 mb-3"  /><br/>

                <label>Primary Position</label>
                <input type="text" value={playerPositionPrimaryName} onChange={(event) => setPlayerPositionPrimaryName(event.target.value)} class="ms-3 mb-3"  /><br/>

                <label>Secondary Positin</label>
                <input type="text" value={playerPositionSecondaryName} onChange={(event) => setPlayerPositionSecondaryName(event.target.value)} class="ms-3 mb-3"  /><br/>                

                <label>Batthing Handedness</label>
                <input type="text" value={playerBattingHandednessName} onChange={(event) => setPlayerBattingHandednessName(event.target.value)} class="ms-3 mb-3"  /><br/>                
                
                <label>Throwing Handedness</label>
                <input type="text" value={playerThrowingHandednessName} onChange={(event) => setPlayerThrowingHandednessName(event.target.value)} class="ms-3 mb-3"  /><br/>                
                               
                <label>Player Type</label>
                <input type="text" value={playerTypeName} onChange={(event) => setPlayerTypeName(event.target.value)} class="ms-3 mb-3"  /><br/>                
                
                <label>Current Team</label>
                <input type="text" value={baseballTeamName} onChange={(event) => setBaseballTeamName(event.target.value)} class="ms-3 mb-3"  /><br/>

                <input type="submit" value="Add Player" class="btn btn-primary ms-3 mb-3" />

            </form>
        </div>
    );
}

export default EditPlayer;