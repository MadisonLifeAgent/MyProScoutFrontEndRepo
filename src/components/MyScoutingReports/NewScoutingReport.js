import React, { useState } from "react";
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';

import jwtDecode from "jwt-decode";

// Component or hook imports
import usePostScoutingReport from "../../hooks/usePostScoutingReport";
import ReviewScoutingReport from "./ReviewScoutingReport";


// Scouting Report
const NewScoutingReport = (props) => {
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
    const [scoutId, setScoutId] = useState();
    const [scoutingReportNotesBody, setScoutingReportNotesBody] = useState();

    const [pitcherTotalPitches, setpitcherTotalPitches] = useState();
    const [pitcherWin, setpitcherWin] = useState();
    const [pitcherLoss, setpitcherLoss] = useState();
    const [pitcherInningsPitched, setpitcherInningsPitched] = useState();
    const [pitcherSave, setpitcherSave] = useState();
    const [pitcherBlownSave, setpitcherBlownSave] = useState();
    const [careerPitchingCompleteGame, setcareerPitchingCompleteGame] = useState();

    const [pitcherTotalBalls, setpitcherTotalBalls] = useState();
    const [pitcherWalksGiven, setpitcherWalksGiven] = useState();
    const [pitcherTotalStrikes, setpitcherTotalStrikes] = useState();
    const [pitcherTotalStrikeouts, setpitcherTotalStrikeouts] = useState();
    const [pitcherFoulBallsHit, setpitcherFoulBallsHit] = useState();
    const [pitcherHitBatter, setpitcherHitBatter] = useState();
    const [pitcherWildPitch, setpitcherWildPitch] = useState();
    const [pitcherPickOffAttempts, setpitcherPickOffAttempts] = useState();
    const [pitcherPickOfSuccess, setpitcherPickOfSuccess] = useState();
    const [pitcherNumberOfBattersFaced, setpitcherNumberOfBattersFaced] = useState();

    const [pitcherHitsAllowed, setpitcherHitsAllowed] = useState();
    const [pitcherPitchingHitSingle, setpitcherPitchingHitSingle] = useState();
    const [pitcherHitDouble, setpitcherHitDouble] = useState();
    const [pitcherHitTriple, setpitcherHitTriple] = useState();
    const [pitcherHomerunsAllowed, setpitcherHomerunsAllowed] = useState();
    const [pitcherGroundOuts, setpitcherGroundOuts] = useState();
    const [pitcherFlyouts, setpitcherFlyouts] = useState();
    const [pitcherRunsAllowed, setpitcherRunsAllowed] = useState();

    const [batterPlateAppearances, setbatterPlateAppearances] = useState();
    const [batterOnBaseCount, setbatterOnBaseCount] = useState();
    const [batterHitByPitch, setbatterHitByPitch] = useState();
    const [batterBalls, setbatterBalls] = useState();
    const [batterBaseOnBalls, setbatterBaseOnBalls] = useState();
    const [batterStrikes, setbatterStrikes] = useState();
    const [batterStrikeouts, setbatterStrikeouts] = useState();
    const [batterFoulBalls, setbatterFoulBalls] = useState();

    const [batterHit, setbatterHit] = useState();
    const [batterSingle, setbatterSingle] = useState();
    const [batterDouble, setbatterDouble] = useState();
    const [batterTriple, setbatterTriple] = useState();
    const [batterHomerun, setbatterHomerun] = useState();
    const [batterSacFly, setbatterSacFly] = useState();
    const [BattterRbi, setBattterRbi] = useState();
    const [batterGroundOut, setbatterGroundOut] = useState();
    const [batterOutByDoublePlay, setbatterOutByDoublePlay] = useState();
    const [batterOutByTriplePlay, setbatterOutByTriplePlay] = useState();
    const [batterFlyout, setbatterFlyout] = useState();
    const [batterRisp, setbatterRisp] = useState();
    const [batterRispSuccess, setbatterRispSuccess] = useState();
    const [batterRispFail, setbatterRispFail] = useState();

    const [runnerAdvancedToSecond, setrunnerAdvancedToSecond] = useState();
    const [RunnderAdvancedToThird, setRunnderAdvancedToThird] = useState();
    const [runnerRisp, setrunnerRisp] = useState();
    const [runnerRunScored, setrunnerRunScored] = useState();
    const [runnerStolenBases, setrunnerStolenBases] = useState();
    const [runnerCaughtStealing, setrunnerCaughtStealing] = useState();
    const [runnerPickedOff, setrunnerPickedOff] = useState();
    const [runnerTotalBases, setrunnerTotalBases] = useState();
    const [runnerForcedOut, setrunnerForcedOut] = useState();
    const [runnerTaggedOut, setrunnerTaggedOut] = useState();

    const scout = getUser(); 


    // save the scouting report
    async function saveScoutingReport(report) {
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
            "ScoutingReportNotesBody": report[5],
            "PitcherTotalPitches": parseInt(report[6]),
            "PitcherWin": parseInt(report[7]),
            "PitcherLoss": parseInt(report[8]),
            "PitcherInningsPitched": parseInt(report[9]),
            "PitcherSave": parseInt(report[10]),
            "PitcherBlownSave": parseInt(report[11]),
            "CareerPitchingCompleteGame": parseInt(report[12]),

            "PitcherTotalBalls": parseInt(report[13]),
            "PitcherWalksGiven": parseInt(report[14]),
            "PitcherTotalStrikes": parseInt(report[15]),
            "PitcherTotalStrikeouts": parseInt(report[16]),
            "PitcherFoulBallsHit": parseInt(report[17]),
            "PitcherHitBatter" : parseInt(report[18]),
            "PitcherWildPitch": parseInt(report[19]),
            "PitcherPickOffAttempts": parseInt(report[20]),
            "PitcherPickOfSuccess": parseInt(report[21]),
            "PitcherNumberOfBattersFaced": parseInt(report[22]),

            "PitcherHitsAllowed": parseInt(report[23]),
            "PitcherPitchingHitSingle": parseInt(report[24]),
            "PitcherHitDouble": parseInt(report[25]),
            "PitcherHitTriple": parseInt(report[26]),
            "PitcherHomerunsAllowed": parseInt(report[27]),
            "PitcherGroundOuts": parseInt(report[28]),
            "PitcherFlyouts": parseInt(report[29]),
            "PitcherRunsAllowed": parseInt(report[30]),

            "BatterPlateAppearances": parseInt(report[31]),
            "BatterOnBaseCount": parseInt(report[32]),
            "BatterHitByPitch": parseInt(report[33]),
            "BatterBalls": parseInt(report[34]),
            "BatterBaseOnBalls": parseInt(report[35]),
            "BatterStrikes": parseInt(report[36]),
            "BatterStrikeouts": parseInt(report[37]),
            "BatterFoulBalls": parseInt(report[38]),

            "BatterHit": parseInt(report[39]),
            "BatterSingle": parseInt(report[40]),
            "BatterDouble": parseInt(report[41]),
            "BatterTriple": parseInt(report[42]),
            "BatterHomerun": parseInt(report[43]),
            "BatterSacFly": parseInt(report[44]),
            "BattterRbi": parseInt(report[45]),
            "BatterGroundOut": parseInt(report[46]),
            "BatterOutByDoublePlay": parseInt(report[47]),
            "BatterOutByTriplePlay": parseInt(report[48]),
            "BatterFlyout": parseInt(report[49]),
            "BatterRisp": parseInt(report[50]),
            "BatterRispSuccess": parseInt(report[51]),
            "BatterRispFail": parseInt(report[52]),

            "RunnerAdvancedToSecond": parseInt(report[53]),
            "RunnderAdvancedToThird": parseInt(report[54]),
            "RunnerRisp": parseInt(report[55]),
            "RunnerRunScored": parseInt(report[56]),
            "RunnerStolenBases": parseInt(report[57]),
            "RunnerCaughtStealing": parseInt(report[58]),
            "RunnerPickedOff": parseInt(report[59]),
            "RunnerTotalBases": parseInt(report[60]),
            "RunnerForcedOut": parseInt(report[61]),
            "RunnerTaggedOut": parseInt(report[61])
        }

        // post the report
        try {
            const response = await axios.post('https://localhost:44394/api/playerscoutingreport/add', reportInfo);
            console.log("good api call");
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
        newScoutingReport.push(firstName, lastName, playerBaseballTeamName, opponentTeam, myOrganization, scoutingReportNotesBody, pitcherTotalPitches, pitcherWin, pitcherLoss, pitcherInningsPitched, pitcherSave, pitcherBlownSave, careerPitchingCompleteGame, pitcherTotalBalls, pitcherWalksGiven, pitcherTotalStrikes, pitcherTotalStrikeouts, pitcherFoulBallsHit, pitcherHitBatter, pitcherWildPitch, pitcherPickOffAttempts, pitcherPickOfSuccess, pitcherNumberOfBattersFaced, pitcherHitsAllowed, pitcherPitchingHitSingle, pitcherHitDouble, pitcherHitTriple, pitcherHomerunsAllowed, pitcherGroundOuts, pitcherFlyouts, pitcherRunsAllowed, batterPlateAppearances, batterOnBaseCount, batterHitByPitch, batterBalls, batterBaseOnBalls, batterStrikes, batterStrikeouts, batterFoulBalls, batterHit, batterSingle, batterDouble, batterTriple, batterHomerun, batterSacFly, BattterRbi, batterGroundOut, batterOutByDoublePlay, batterOutByTriplePlay, batterFlyout, batterRisp, batterRispSuccess, batterRispFail, runnerAdvancedToSecond, RunnderAdvancedToThird, runnerRisp, runnerRunScored, runnerStolenBases, runnerCaughtStealing, runnerPickedOff, runnerTotalBases, runnerForcedOut, runnerTaggedOut);

        saveScoutingReport(newScoutingReport);
    }

    

    // add player form
    return (
        <div>
            <h1>New Scouting Report</h1>
            <form onSubmit={handleSubmit}>
                <input type="submit" value="Save Scouting Report" class="btn btn-primary ms-3 mb-3" />

                <h2>Report Info</h2>
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

                <h3>Scouting Reports Notes</h3>
                <textarea name="scoutingReportNotesBody" placeholder="Enter notes here" value={scoutingReportNotesBody} onChange={(event) => setScoutingReportNotesBody(event.target.value)} class="mb-3" rows="6" cols="60" />

                <h2>Pitching</h2>
                
                <h4>Pitching Game Stats</h4>

                <label>Total Pitches</label>
                <input type="number" value={pitcherTotalPitches} onChange={(event) => setpitcherTotalPitches(event.target.value)} required class="ms-3 me-3 mb-3" />

                <label>Batters Faced</label>
                <input type="number" value={pitcherNumberOfBattersFaced} onChange={(event) => setpitcherNumberOfBattersFaced(event.target.value)} required class="ms-3 mb-3" /><br/>
                                
                <label>Innings Pitched</label>
                <input type="number" value={pitcherInningsPitched} onChange={(event) => setpitcherInningsPitched(event.target.value)} required class="ms-3 me-3 mb-3" />

                <label>Comlete Game</label>
                <input type="number" value={careerPitchingCompleteGame} onChange={(event) => setcareerPitchingCompleteGame(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Win</label>
                <input type="number" value={pitcherWin} onChange={(event) => setpitcherWin(event.target.value)} required class="ms-3 me-3 mb-3" />

                <label>Loss</label>
                <input type="number" value={pitcherLoss} onChange={(event) => setpitcherLoss(event.target.value)} required class="ms-3 mb-3" />
                <br/>

                <label>Save</label>
                <input type="number" value={pitcherSave} onChange={(event) => setpitcherSave(event.target.value)} required class="ms-3 me-3 mb-3" />

                <label>Blown Save</label>
                <input type="number" value={pitcherBlownSave} onChange={(event) => setpitcherBlownSave(event.target.value)} required class="ms-3 mb-3" /><br/>


                <h4>Pitching Results</h4>

                <label>Balls</label>
                <input type="number" value={pitcherTotalBalls} onChange={(event) => setpitcherTotalBalls(event.target.value)} required class="ms-3 me-3 mb-3" />

                <label>Walks</label>
                <input type="number" value={pitcherWalksGiven} onChange={(event) => setpitcherWalksGiven(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Strikes</label>
                <input type="number" value={pitcherTotalStrikes} onChange={(event) => setpitcherTotalStrikes(event.target.value)} required class="ms-3 me-3 mb-3" />

                <label>Strikeouts</label>
                <input type="number" value={pitcherTotalStrikeouts} onChange={(event) => setpitcherTotalStrikeouts(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Foul Balls</label>
                <input type="number" value={pitcherFoulBallsHit} onChange={(event) => setpitcherFoulBallsHit(event.target.value)} required class="ms-3 me-3 mb-3" /> <br/>

                <label>Hit Batters</label>
                <input type="number" value={pitcherHitBatter} onChange={(event) => setpitcherHitBatter(event.target.value)} required class="ms-3 me-3 mb-3" />

                <label>Wild Pitches</label>
                <input type="number" value={pitcherWildPitch} onChange={(event) => setpitcherWildPitch(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Pickoff Attempts</label>
                <input type="number" value={pitcherPickOffAttempts} onChange={(event) => setpitcherPickOffAttempts(event.target.value)} required class="ms-3 me-3 mb-3" />

                <label>Pickoff Success</label>
                <input type="number" value={pitcherPickOfSuccess} onChange={(event) => setpitcherPickOfSuccess(event.target.value)} required class="ms-3 mb-3" /><br/>


                <h4>Pitcher Contact Results</h4>

                <label>Hits Allowed</label>
                <input type="number" value={pitcherHitsAllowed} onChange={(event) => setpitcherHitsAllowed(event.target.value)} required class="ms-3 me-3 mb-3" />

                <label>Singles</label>
                <input type="number" value={pitcherPitchingHitSingle} onChange={(event) => setpitcherPitchingHitSingle(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Doubles</label>
                <input type="number" value={pitcherHitDouble} onChange={(event) => setpitcherHitDouble(event.target.value)} required class="ms-3 me-3 mb-3" />

                <label>Triples</label>
                <input type="number" value={pitcherHitTriple} onChange={(event) => setpitcherHitTriple(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Homeruns Allowed</label>
                <input type="number" value={pitcherHomerunsAllowed} onChange={(event) => setpitcherHomerunsAllowed(event.target.value)} required class="ms-3 me-3 mb-3" />

                <label>Runs Allowed</label>
                <input type="number" value={pitcherRunsAllowed} onChange={(event) => setpitcherRunsAllowed(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Groundouts</label>
                <input type="number" value={pitcherGroundOuts} onChange={(event) => setpitcherGroundOuts(event.target.value)} required class="ms-3 me-3 mb-3" />

                <label>Flyouts</label>
                <input type="number" value={pitcherFlyouts} onChange={(event) => setpitcherFlyouts(event.target.value)} required class="ms-3 mb-3" /><br/>


                <h2>Batting Stats</h2>

                <h4>At the Plate</h4>

                <label>Plate Appearances</label>
                <input type="number" value={batterPlateAppearances} onChange={(event) => setbatterPlateAppearances(event.target.value)} required class="ms-3 me-3 mb-3" />

                <label>On Base Count</label>
                <input type="number" value={batterOnBaseCount} onChange={(event) => setbatterOnBaseCount(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Balls Taken</label>
                <input type="number" value={batterBalls} onChange={(event) => setbatterBalls(event.target.value)} required class="ms-3 me-3 mb-3" />

                <label>Base on Balls</label>
                <input type="number" value={batterBaseOnBalls} onChange={(event) => setbatterBaseOnBalls(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Strikes</label>
                <input type="number" value={batterStrikes} onChange={(event) => setbatterStrikes(event.target.value)} required class="ms-3 me-3 mb-3" />
                
                <label>Strikeouts</label>
                <input type="number" value={batterStrikeouts} onChange={(event) => setbatterStrikeouts(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Foul Balls</label>
                <input type="number" value={batterFoulBalls} onChange={(event) => setbatterFoulBalls(event.target.value)} required class="ms-3 me-3 mb-3" />

                <label>Hit By Pitch</label>
                <input type="number" value={batterHitByPitch} onChange={(event) => setbatterHitByPitch(event.target.value)} required class="ms-3 me-3 mb-3" /><br/>

                <h4>Ball Put in Play</h4>

                <label>Hit</label>
                <input type="number" value={batterHit} onChange={(event) => setbatterHit(event.target.value)} required class="ms-3 me-3 mb-3" />

                <label>Single</label>
                <input type="number" value={batterSingle} onChange={(event) => setbatterSingle(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Double</label>
                <input type="number" value={batterDouble} onChange={(event) => setbatterDouble(event.target.value)} required class="ms-3 me-3 mb-3" />

                <label>Triple</label>
                <input type="number" value={batterTriple} onChange={(event) => setbatterTriple(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Homerun</label>
                <input type="number" value={batterHomerun} onChange={(event) => setbatterHomerun(event.target.value)} required class="ms-3 me-3 mb-3" />

                <label>SacFly</label>
                <input type="number" value={batterSacFly} onChange={(event) => setbatterSacFly(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>RBIs</label>
                <input type="number" value={BattterRbi} onChange={(event) => setBattterRbi(event.target.value)} required class="ms-3 me-3 mb-3" />

                <label>Groundout</label>
                <input type="number" value={batterGroundOut} onChange={(event) => setbatterGroundOut(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Hit into Double Play</label>
                <input type="number" value={batterOutByDoublePlay} onChange={(event) => setbatterOutByDoublePlay(event.target.value)} required class="ms-3 me-3 mb-3" />

                <label>Hit into Triple Play</label>
                <input type="number" value={batterOutByTriplePlay} onChange={(event) => setbatterOutByTriplePlay(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Flyout</label>
                <input type="number" value={batterFlyout} onChange={(event) => setbatterFlyout(event.target.value)} required class="ms-3 me-3 mb-3" />

                <label>RISP</label>
                <input type="number" value={batterRisp} onChange={(event) => setbatterRisp(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>RISP Success</label>
                <input type="number" value={batterRispSuccess} onChange={(event) => setbatterRispSuccess(event.target.value)} required class="ms-3 me-3 mb-3" />

                <label>RISP Fail</label>
                <input type="number" value={batterRispFail} onChange={(event) => setbatterRispFail(event.target.value)} required class="ms-3 mb-3" /><br/>

                <h4>Baserunning Stats</h4>

                <label>Advanced to 2nd</label>
                <input type="number" value={runnerAdvancedToSecond} onChange={(event) => setrunnerAdvancedToSecond(event.target.value)} required class="ms-3 me-3 mb-3" />

                <label>Advanced to 3rd</label>
                <input type="number" value={RunnderAdvancedToThird} onChange={(event) => setRunnderAdvancedToThird(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>ISP</label>
                <input type="number" value={runnerRisp} onChange={(event) => setrunnerRisp(event.target.value)} required class="ms-3 me-3 mb-3" />

                <label>Run Scored</label>
                <input type="number" value={runnerRunScored} onChange={(event) => setrunnerRunScored(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Stolen Bases</label>
                <input type="number" value={runnerStolenBases} onChange={(event) => setrunnerStolenBases(event.target.value)} required class="ms-3 me-3 mb-3" />

                <label>Caught Stealing</label>
                <input type="number" value={runnerCaughtStealing} onChange={(event) => setrunnerCaughtStealing(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Total Bases</label>
                <input type="number" value={runnerTotalBases} onChange={(event) => setrunnerTotalBases(event.target.value)} required class="ms-3 me-3 mb-3" />

                <label>Picked Off</label>
                <input type="number" value={runnerPickedOff} onChange={(event) => setrunnerPickedOff(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Forced Out</label>
                <input type="number" value={runnerForcedOut} onChange={(event) => setrunnerForcedOut(event.target.value)} required class="ms-3 me-3 mb-3" />

                <label>Tagged Out</label>
                <input type="number" value={runnerTaggedOut} onChange={(event) => setrunnerTaggedOut(event.target.value)} required class="ms-3 mb-3" /><br/>

                <input type="submit" value="Save Scouting Report" class="btn btn-primary ms-3 mb-3" />
            </form>


            
{/*             <ReviewScoutingReport newScoutingReport={newScoutingReport} />


            <Switch>
                <Route path="/myscoutingreports/newscoutingreport/review" exact component={ReviewScoutingReport} />
            </Switch> */}
        
        </div>
    );
}

export default NewScoutingReport;