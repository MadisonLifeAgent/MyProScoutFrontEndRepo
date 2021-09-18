import React, { useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

import jwtDecode from "jwt-decode";

// Component or hook imports
import usePostScoutingReport from "../../hooks/usePostScoutingReport";
import ReviewScoutingReport from "./ReviewScoutingReport";


// creates a scouting report then passes it to "new scouting report" for stat tracking at scouting event
const InitiateScoutingReport = (props) => {
    // get the scout info
    const jwt = localStorage.getItem('token');
    function getUser() {
        try{
            const user = jwtDecode(jwt);
            return user;
        } catch {
        }
    }

    // form field variables
    // scouting report is an object with multiple fields
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [playerBaseballTeamName, setplayerBaseballTeamName] = useState();
    const [opponentTeam, setopponentTeam] = useState();
    const [myOrganization, setmyOrganization] = useState();

    const scout = getUser(); 

    const [scoutingReport, setScoutingReport] = useState({});


    // save the scouting report
    async function createScoutingReport(report) {
        const scout = getUser(); 
        console.log(scout.id);

        // send the report in this format to backend
        const reportInfo = {
            "FirstName": report[0],
            "LastName": report[1],
            "PlayerBaseballTeamName": report[2],
            "OpponentTeam": report[3],
            "MyOrganization": report[4],
            "Id": scout.id,
            "ScoutingReportNotesBody": '',
            "PitcherTotalPitches": 0,
            "PitcherWin": 0,
            "PitcherLoss": 0,
            "PitcherInningsPitched": 0,
            "PitcherSave": 0,
            "PitcherBlownSave": 0,
            "CareerPitchingCompleteGame": 0,

            "PitcherTotalBalls": 0,
            "PitcherWalksGiven": 0,
            "PitcherTotalStrikes": 0,
            "PitcherTotalStrikeouts": 0,
            "PitcherFoulBallsHit": 0,
            "PitcherHitBatter" : 0,
            "PitcherWildPitch": 0,
            "PitcherPickOffAttempts": 0,
            "PitcherPickOfSuccess": 0,
            "PitcherNumberOfBattersFaced": 0,

            "PitcherHitsAllowed": 0,
            "PitcherPitchingHitSingle": 0,
            "PitcherHitDouble": 0,
            "PitcherHitTriple": 0,
            "PitcherHomerunsAllowed": 0,
            "PitcherGroundOuts": 0,
            "PitcherFlyouts": 0,
            "PitcherRunsAllowed": 0,

            "BatterPlateAppearances": 0,
            "BatterOnBaseCount": 0,
            "BatterHitByPitch": 0,
            "BatterBalls": 0,
            "BatterBaseOnBalls": 0,
            "BatterStrikes": 0,
            "BatterStrikeouts": 0,
            "BatterFoulBalls": 0,

            "BatterHit": 0,
            "BatterSingle": 0,
            "BatterDouble": 0,
            "BatterTriple": 0,
            "BatterHomerun": 0,
            "BatterSacFly": 0,
            "BattterRbi": 0,
            "BatterGroundOut": 0,
            "BatterOutByDoublePlay": 0,
            "BatterOutByTriplePlay": 0,
            "BatterFlyout": 0,
            "BatterRisp": 0,
            "BatterRispSuccess": 0,
            "BatterRispFail": 0,

            "RunnerAdvancedToSecond": 0,
            "RunnderAdvancedToThird": 0,
            "RunnerRisp": 0,
            "RunnerRunScored": 0,
            "RunnerStolenBases": 0,
            "RunnerCaughtStealing": 0,
            "RunnerPickedOff": 0,
            "RunnerTotalBases": 0,
            "RunnerForcedOut": 0,
            "RunnerTaggedOut": 0
        }

        // post the report
        try {
            const response = await axios.post('https://localhost:44394/api/playerscoutingreport/add', reportInfo);
            console.log("good api call");
            setScoutingReport(response.data);
        }
        catch(ex){
            console.log("bad api call")
        }
    }

    // store all scouting report values in this object and pass it into the axios call
    const newScoutingReport = [];

    // submits new player request
    const handleSubmit = (event) => {
        event.preventDefault();

        // push all the form values into newScoutingReport
        newScoutingReport.push(firstName, lastName, playerBaseballTeamName, opponentTeam, myOrganization);

        createScoutingReport(newScoutingReport);
    }


    // scouting report start form
    return (
        <div>
            <h1>Start New Scouting Report</h1>
            <form onSubmit={handleSubmit}>
                <h2>Basic Info</h2>
                <label>Player First Name</label>
                <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} required pattern="[A-Za-z]{1,}" title="Alpha characters only, please." class="ms-3 mb-3" /><br/>

                <label>Player Last Name</label>
                <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} required pattern="[A-Za-z]{1,}" title="Alpha characters only, please." class="ms-3 mb-3" /><br/>

                <label>Player's Baseball Team</label>
                <input type="text" value={playerBaseballTeamName} onChange={(event) => setplayerBaseballTeamName(event.target.value)} required pattern="[A-Za-z0-9\s]{1,}" title="Alpha characters and numbers only, please." class="ms-3 mb-3" /><br/>

                <label>Player's Opponent Team</label>
                <input type="text" value={opponentTeam} onChange={(event) => setopponentTeam(event.target.value)} required pattern="[A-Za-z0-9\s]{1,}" title="Alpha characters and numbers only, please." class="ms-3 mb-3" /><br/>

                <label>myOrganization (Scout)</label>
                <input type="text" value={myOrganization} onChange={(event) => setmyOrganization(event.target.value)} required pattern="[A-Za-z0-9\s]{1,}" title="Alpha characters and numbers only, please." class="ms-3 mb-3" /><br/>

                <input type="submit" value="Initiate Scouting Report" class="btn btn-primary ms-3 mb-3" />
                
            </form>
            <Link class="btn btn-primary ms-3 mb-3" to={{
                        pathname: `/myscoutingreports/newscoutingreport`,
                        state: {
                            scoutingReport: scoutingReport,
                        }
                    }}>Go to Report</Link>
        
        </div>
    );
}

export default InitiateScoutingReport;