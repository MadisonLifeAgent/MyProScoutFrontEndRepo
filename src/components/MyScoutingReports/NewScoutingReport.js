import React, { useState } from "react";
import axios from 'axios';

// Component or hook imports
import usePostScoutingReport from "../../hooks/usePostScoutingReport";

// Scouting Report
const NewScoutingReport = (props) => {
    // form field variables
    // scouting report is an object with multiple fields
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [playerBaseballTeamName, setplayerBaseballTeamName] = useState();
    const [opponentTeam, setopponentTeam] = useState();
    const [myOrganization, setmyOrganization] = useState();
    //const [id, setId] = useState();

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

    // save the scouting report
    async function saveScoutingReport(report, scout) {
        console.log(report);
        // send the report in this format to backend
        const reportInfo = {
            "FirstName": report.firstName,
            "LastName": report.lastName,
            "PlayerBaseballTeamName": report.playerBaseballTeamName,
            "OpponentTeam": report.opponentTeam,
            "MyOrganization": report.myOrganization,
            "Id": report.id,
            "PitcherTotalPitches": report.pitcherTotalPitches,
            "PitcherWin": report.pitcherWin,
            "PitcherLoss": report.pitcherLoss,
            "PitcherInningsPitched": report.pitcherInningsPitched,
            "PitcherSave": report.pitcherSave,
            "PitcherBlownSave": report.pitcherBlownSave,
            "CareerPitchingCompleteGame": report.careerPitchingCompleteGame,

            "PitcherTotalBalls": report.pitcherTotalBalls,
            "PitcherWalksGiven": report.pitcherWalksGiven,
            "PitcherTotalStrikes": report.pitcherTotalStrikes,
            "PitcherTotalStrikeouts": report.pitcherTotalStrikeouts,
            "PitcherFoulBallsHit": report.pitcherFoulBallsHit,
            "PitcherHitBatter" : report.pitcherHitBatter,
            "PitcherWildPitch": report.pitcherWildPitch,
            "PitcherPickOffAttempts": report.pitcherPickOffAttempts,
            "PitcherPickOfSuccess": report.pitcherPickOfSuccess,
            "PitcherNumberOfBattersFaced": report.pitcherNumberOfBattersFaced,

            "PitcherHitsAllowed": report.pitcherHitsAllowed,
            "PitcherPitchingHitSingle": report.pitcherPitchingHitSingle,
            "PitcherHitDouble": report.pitcherHitDouble,
            "PitcherHitTriple": report.pitcherHitTriple,
            "PitcherHomerunsAllowed": report.pitcherHomerunsAllowed,
            "PitcherGroundOuts": report.pitcherGroundOuts,
            "PitcherFlyouts": report.pitcherFlyouts,
            "PitcherRunsAllowed": report.pitcherRunsAllowed,

            "BatterPlateAppearances": report.batterPlateAppearances,
            "BatterOnBaseCount": report.batterOnBaseCount,
            "BatterHitByPitch": report.batterHitByPitch,
            "BatterBalls": report.batterBalls,
            "BatterBaseOnBalls": report.batterBaseOnBalls,
            "BatterStrikes": report.batterStrikes,
            "BatterStrikeouts": report.batterStrikeouts,
            "BatterFoulBalls": report.batterFoulBalls,

            "BatterHit": report.batterHit,
            "BatterSingle": report.batterSingle,
            "BatterDouble": report.batterDouble,
            "BatterTriple": report.batterTriple,
            "BatterHomerun": report.batterHomerun,
            "BatterSacFly": report.batterSacFly,
            "BattterRbi": report.BattterRbi,
            "BatterGroundOut": report.batterGroundOut,
            "BatterOutByDoublePlay": report.batterOutByDoublePlay,
            "BatterOutByTriplePlay": report.batterOutByTriplePlay,
            "BatterFlyout": report.batterFlyout,
            "BatterRisp": report.batterRisp,
            "BatterRispSuccess": report.batterRispSuccess,
            "BatterRispFail": report.batterRispFail,

            "RunnerAdvancedToSecond": report.runnerAdvancedToSecond,
            "RunnderAdvancedToThird": report.RunnderAdvancedToThird,
            "RunnerRisp": report.runnerRisp,
            "RunnerRunScored": report.runnerRunScored,
            "RunnerStolenBases": report.runnerStolenBases,
            "RunnerCaughtStealing": report.runnerCaughtStealing,
            "RunnerPickedOff": report.runnerPickedOff,
            "RunnerTotalBases": report.runnerTotalBases,
            "RunnerForcedOut": report.runnerForcedOut,
            "RunnerTaggedOut": report.runnerTaggedOut,
        }

        // post the report
        try {
            await axios.post('https://localhost:44394/api/playerscoutingreport/add', reportInfo);
            console.log("good api call");
        }
        catch(ex){
            console.log("bad api call")
        }
    }

    // submits new player request
    const handleSubmit = (event) => {
        event.preventDefault();
        saveScoutingReport(scoutingReport);
    }

    // add player form
    return (
        <div>
            <h1>New Scouting Report</h1>
            <form onSubmit={handleSubmit}>
                <input type="submit" value="Save Scouting Report" class="btn btn-primary ms-3 mb-3" />

                <h2>Report Info</h2>
                <label>Player First Name</label>
                <input type="text" value={scoutingReport.firstName} onHandleSubmit={(event) => setScoutingReport(event.target.value)} required pattern="[A-Za-z]{1,}" title="Alpha characters only, please." class="ms-3 mb-3" /><br/>

                <label>Player Last Name</label>
                <input type="text" value={scoutingReport.lastName} onChange={(event) => setScoutingReport(event.target.value)} required pattern="[A-Za-z]{1,}" title="Alpha characters only, please." class="ms-3 mb-3" /><br/>

                <label>Player's Baseball Team</label>
                <input type="text" value={scoutingReport.playerBaseballTeamName} onChange={(event) => setScoutingReport(event.target.value)} required pattern="[A-Za-z0-9\s]{1,}" title="Alpha characters and numbers only, please." class="ms-3 mb-3" /><br/>

                <label>Player's Opponent Team</label>
                <input type="text" value={scoutingReport.opponentTeam} onChange={(event) => setScoutingReport(event.target.value)} required pattern="[A-Za-z0-9\s]{1,}" title="Alpha characters and numbers only, please." class="ms-3 mb-3" /><br/>

                <label>myOrganization (Scout)</label>
                <input type="text" value={scoutingReport.myOrganization} onChange={(event) => setScoutingReport(event.target.value)} required pattern="[A-Za-z0-9\s]{1,}" title="Alpha characters and numbers only, please." class="ms-3 mb-3" /><br/>

                <h2>Pitching</h2>
                
                <h4>Pitching Game Stats</h4>

                <label>Total Pitches</label>
                <input type="number" value={scoutingReport.pitcherTotalPitches} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" />
                <br/>

                <label>Win</label>
                <input type="number" value={scoutingReport.pitcherWin} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" />
                <br/>

                <label>Loss</label>
                <input type="text" value={scoutingReport.pitcherLoss} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" />
                <br/>
                
                <label>Innings Pitched</label>
                <input type="number" value={scoutingReport.pitcherInningsPitched} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Save</label>
                <input type="number" value={scoutingReport.pitcherSave} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Blown Save</label>
                <input type="number" value={scoutingReport.pitcherBlownSave} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Comlete Game</label>
                <input type="number" value={scoutingReport.careerPitchingCompleteGame} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>


                <h4>Pitching Results</h4>

                <label>Balls</label>
                <input type="number" value={scoutingReport.pitcherTotalBalls} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Walks</label>
                <input type="number" value={scoutingReport.pitcherWalksGiven} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Strikes</label>
                <input type="number" value={scoutingReport.pitcherTotalStrikes} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Strikeouts</label>
                <input type="number" value={scoutingReport.pitcherTotalStrikeouts} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Foul Balls</label>
                <input type="number" value={scoutingReport.pitcherFoulBallsHit} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Hit Batters</label>
                <input type="number" value={scoutingReport.pitcherHitBatter} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Wild Pitches</label>
                <input type="number" value={scoutingReport.pitcherWildPitch} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Pickoff Attempts</label>
                <input type="number" value={scoutingReport.pitcherPickOffAttempts} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Pickoff Success</label>
                <input type="number" value={scoutingReport.pitcherPickOfSuccess} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Batters Faced</label>
                <input type="number" value={scoutingReport.pitcherNumberOfBattersFaced} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <h4>Pitcher Contact Results</h4>

                <label>Hits Allowed</label>
                <input type="number" value={scoutingReport.pitcherHitsAllowed} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Singles</label>
                <input type="number" value={scoutingReport.pitcherPitchingHitSingle} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Doubles</label>
                <input type="number" value={scoutingReport.pitcherHitDouble} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Triples</label>
                <input type="number" value={scoutingReport.pitcherHitTriple} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Homeruns Allowed</label>
                <input type="number" value={scoutingReport.pitcherHomerunsAllowed} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Groundouts</label>
                <input type="number" value={scoutingReport.pitcherGroundOuts} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Flyouts</label>
                <input type="number" value={scoutingReport.pitcherFlyouts} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Runs Allowed</label>
                <input type="number" value={scoutingReport.pitcherRunsAllowed} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <h2>Batting Stats</h2>

                <h4>At the Plate</h4>

                <label>Plate Appearances</label>
                <input type="number" value={scoutingReport.batterPlateAppearances} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>On Base Count</label>
                <input type="number" value={scoutingReport.batterOnBaseCount} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Hit By Pitch</label>
                <input type="number" value={scoutingReport.batterHitByPitch} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Balls Taken</label>
                <input type="number" value={scoutingReport.batterBalls} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Base on Balls</label>
                <input type="number" value={scoutingReport.batterBaseOnBalls} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Strikes</label>
                <input type="number" value={scoutingReport.batterStrikes} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Strikeouts</label>
                <input type="number" value={scoutingReport.batterStrikeouts} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Foul Balls</label>
                <input type="number" value={scoutingReport.batterFoulBalls} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <h4>Ball Put in Play</h4>

                <label>Hit</label>
                <input type="number" value={scoutingReport.batterHit} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Single</label>
                <input type="number" value={scoutingReport.batterSingle} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Double</label>
                <input type="number" value={scoutingReport.batterDouble} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Triple</label>
                <input type="number" value={scoutingReport.batterTriple} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Homerun</label>
                <input type="number" value={scoutingReport.batterHomerun} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>SacFly</label>
                <input type="number" value={scoutingReport.batterSacFly} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>RBIs</label>
                <input type="number" value={scoutingReport.BattterRbi} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Groundout</label>
                <input type="number" value={scoutingReport.batterGroundOut} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Flyout</label>
                <input type="number" value={scoutingReport.batterFlyout} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Hit into Double Play</label>
                <input type="number" value={scoutingReport.batterOutByDoublePlay} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Hit into Triple Play</label>
                <input type="number" value={scoutingReport.batterOutByTriplePlay} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>RISP</label>
                <input type="number" value={scoutingReport.batterRisp} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>RISP Success</label>
                <input type="number" value={scoutingReport.batterRispSuccess} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>RISP Fail</label>
                <input type="number" value={scoutingReport.batterRispFail} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <h4>Baserunning Stats</h4>

                <label>Advanced to 2nd</label>
                <input type="number" value={scoutingReport.runnerAdvancedToSecond} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Advanced to 3rd</label>
                <input type="number" value={scoutingReport.RunnderAdvancedToThird} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>ISP</label>
                <input type="number" value={scoutingReport.runnerRisp} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Run Scored</label>
                <input type="number" value={scoutingReport.runnerRunScored} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Stolen Bases</label>
                <input type="number" value={scoutingReport.runnerStolenBases} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Caught Stealing</label>
                <input type="number" value={scoutingReport.runnerCaughtStealing} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Picked Off</label>
                <input type="number" value={scoutingReport.runnerPickedOff} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Total Bases</label>
                <input type="number" value={scoutingReport.runnerTotalBases} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Forced Out</label>
                <input type="number" value={scoutingReport.runnerForcedOut} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <label>Tagged Out</label>
                <input type="number" value={scoutingReport.runnerTaggedOut} onChange={(event) => setScoutingReport(event.target.value)} required class="ms-3 mb-3" /><br/>

                <input type="submit" value="Save Scouting Report" class="btn btn-primary ms-3 mb-3" />
            </form>
        </div>
    );
}

export default NewScoutingReport;