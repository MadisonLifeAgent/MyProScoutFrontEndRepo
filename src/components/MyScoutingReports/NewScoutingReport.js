import React, { useState } from "react";
import axios from 'axios';

// Component or hook imports
import usePostScoutingReport from "../../hooks/usePostScoutingReport";

// Scouting Report
const NewScoutingReport = (props) => {
    // form field variables
    // scouting report is an object with multiple fields
    const [scoutingReport, setScoutingReport] =useState({
		firstName: '',
		lastName: '',
		playerBaseballTeamName: '',
		opponentTeam: '',
		myOrganization: '',
		id: '', // this needs to be set user info
		pitcherTotalPitches: '',
		pitcherWin: '',
		pitcherLoss: '',
		pitcherInningsPitched: '',
		pitcherSave: '',
		pitcherBlownSave: '',
		careerPitchingCompleteGame: '',

		pitcherTotalBalls: '',
		pitcherWalksGiven: '',
		pitcherTotalStrikes: '',
		pitcherTotalStrikeouts: '',
		pitcherFoulBallsHit: '',
		pitcherHitBatter: '',
		pitcherWildPitch: '',
		pitcherPickOffAttempts: '',
		pitcherPickOfSuccess: '',
		pitcherNumberOfBattersFaced: '',

		pitcherHitsAllowed: '',
		pitcherPitchingHitSingle: '',
		pitcherHitDouble: '',
		pitcherHitTriple: '',
		pitcherHomerunsAllowed: '',
		pitcherGroundOuts: '',
		pitcherFlyouts: '',
		pitcherRunsAllowed: '',

		batterPlateAppearances: '',
		batterOnBaseCount: '',
		batterHitByPitch: '',
		batterBalls: '',
		batterBaseOnBalls: '',
		batterStrikes: '',
		batterStrikeouts: '',
		batterFoulBalls: '',

		batterHit: '',
		batterSingle: '',
		batterDouble: '',
		batterTriple: '',
		batterHomerun: '',
		batterSacFly: '',
		BattterRbi: '',
		batterGroundOut: '',
		batterOutByDoublePlay: '',
		batterOutByTriplePlay: '',
		batterFlyout: '',
		batterRisp: '',
		batterRispSuccess: '',
		batterRispFail: '',

		runnerAdvancedToSecond: '',
		RunnderAdvancedToThird: '',
		runnerRisp: '',
		runnerRunScored: '',
		runnerStolenBases: '',
		runnerCaughtStealing: '',
		runnerPickedOff: '',
		runnerTotalBases: '',
		runnerForcedOut: '',
		runnerTaggedOut: ''
    });

    // call async function


    // submits new player request
    const handleSubmit = (event) => {
        event.preventDefault();
        //usePostScoutingReport(scoutingReport);
    }

    // add player form
    return (
        <div>
            <h1>New Scouting Report</h1>
            <form onSubmit={handleSubmit}>

                <h2>Report Info</h2>
                <label>First Name</label>
                <input type="text" value={scoutingReport.firstName} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Last Name</label>
                <input type="text" value={scoutingReport.lastName} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Baseball Team</label>
                <input type="text" value={scoutingReport.playerBaseballTeamName} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Opponent Team</label>
                <input type="text" value={scoutingReport.opponentTeam} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>myOrganization</label>
                <input type="text" value={scoutingReport.myOrganization} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <h2>Pitching</h2>
                
                <h4>Pitching Game Stats</h4>

                <label>Total Pitches</label>
                <input type="text" value={scoutingReport.pitcherTotalPitches} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>
                
                <label>Win</label>
                <input type="text" value={scoutingReport.pitcherWin} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Loss</label>
                <input type="text" value={scoutingReport.pitcherLoss} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Save</label>
                <input type="text" value={scoutingReport.pitcherSave} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Blown Save</label>
                <input type="text" value={scoutingReport.pitcherBlownSave} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Innings Pitched</label>
                <input type="text" value={scoutingReport.pitcherInningsPitched} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Comlete Game</label>
                <input type="text" value={scoutingReport.careerPitchingCompleteGame} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                
                <label>Comlete Game</label>
                <input type="text" value={scoutingReport.careerPitchingCompleteGame} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <h4>Pitching Results</h4>

                <label>Balls</label>
                <input type="text" value={scoutingReport.pitcherTotalBalls} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Walks</label>
                <input type="text" value={scoutingReport.pitcherWalksGiven} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Strikes</label>
                <input type="text" value={scoutingReport.pitcherTotalStrikes} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Strikeouts</label>
                <input type="text" value={scoutingReport.pitcherTotalStrikeouts} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Foul Balls</label>
                <input type="text" value={scoutingReport.pitcherFoulBallsHit} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Hit Batters</label>
                <input type="text" value={scoutingReport.pitcherHitBatter} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Wild Pitches</label>
                <input type="text" value={scoutingReport.pitcherWildPitch} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Pickoff Attempts</label>
                <input type="text" value={scoutingReport.pitcherPickOffAttempts} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Pickoff Success</label>
                <input type="text" value={scoutingReport.pitcherPickOfSuccess} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Batters Faced</label>
                <input type="text" value={scoutingReport.pitcherNumberOfBattersFaced} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <h4>Pitcher Contact Results</h4>

                <label>Hits Allowed</label>
                <input type="text" value={scoutingReport.pitcherHitsAllowed} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Singles</label>
                <input type="text" value={scoutingReport.pitcherPitchingHitSingle} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Doubles</label>
                <input type="text" value={scoutingReport.pitcherHitDouble} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Triples</label>
                <input type="text" value={scoutingReport.pitcherHitTriple} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Homeruns Allowed</label>
                <input type="text" value={scoutingReport.pitcherHomerunsAllowed} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Groundouts</label>
                <input type="text" value={scoutingReport.pitcherGroundOuts} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Flyouts</label>
                <input type="text" value={scoutingReport.pitcherFlyouts} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Runs Allowed</label>
                <input type="text" value={scoutingReport.pitcherRunsAllowed} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <h2>Batting Stats</h2>

                <h4>At the Plate</h4>

                <label>Plate Appearances</label>
                <input type="text" value={scoutingReport.batterPlateAppearances} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>On Base Count</label>
                <input type="text" value={scoutingReport.batterOnBaseCount} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Hit By Pitch</label>
                <input type="text" value={scoutingReport.batterHitByPitch} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Balls Taken</label>
                <input type="text" value={scoutingReport.batterBalls} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Base on Balls</label>
                <input type="text" value={scoutingReport.batterBaseOnBalls} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Strikes</label>
                <input type="text" value={scoutingReport.batterStrikes} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Strikeouts</label>
                <input type="text" value={scoutingReport.batterStrikeouts} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Foul Balls</label>
                <input type="text" value={scoutingReport.batterFoulBalls} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <h4>Ball Put in Play</h4>

                <label>Hit</label>
                <input type="text" value={scoutingReport.batterHit} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Single</label>
                <input type="text" value={scoutingReport.batterSingle} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Double</label>
                <input type="text" value={scoutingReport.batterDouble} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Triple</label>
                <input type="text" value={scoutingReport.batterTriple} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Homerun</label>
                <input type="text" value={scoutingReport.batterHomerun} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>SacFly</label>
                <input type="text" value={scoutingReport.batterSacFly} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>RBIs</label>
                <input type="text" value={scoutingReport.BattterRbi} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Groundout</label>
                <input type="text" value={scoutingReport.batterGroundOut} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Flyout</label>
                <input type="text" value={scoutingReport.batterFlyout} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Hit into Double Play</label>
                <input type="text" value={scoutingReport.batterOutByDoublePlay} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Hit into Triple Play</label>
                <input type="text" value={scoutingReport.batterOutByTriplePlay} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>RISP</label>
                <input type="text" value={scoutingReport.batterRisp} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>RISP Success</label>
                <input type="text" value={scoutingReport.batterRispSuccess} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>RISP Fail</label>
                <input type="text" value={scoutingReport.batterRispFail} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <h4>Baserunning Stats</h4>

                <label>Advanced to 2nd</label>
                <input type="text" value={scoutingReport.runnerAdvancedToSecond} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Advanced to 3rd</label>
                <input type="text" value={scoutingReport.RunnderAdvancedToThird} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>ISP</label>
                <input type="text" value={scoutingReport.runnerRisp} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Run Scored</label>
                <input type="text" value={scoutingReport.runnerRunScored} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Stolen Bases</label>
                <input type="text" value={scoutingReport.runnerStolenBases} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Caught Stealing</label>
                <input type="text" value={scoutingReport.runnerCaughtStealing} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Picked Off</label>
                <input type="text" value={scoutingReport.runnerPickedOff} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Total Bases</label>
                <input type="text" value={scoutingReport.runnerTotalBases} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Forced Out</label>
                <input type="text" value={scoutingReport.runnerForcedOut} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <label>Tagged Out</label>
                <input type="text" value={scoutingReport.runnerTaggedOut} onChange={(event) => setScoutingReport(event.target.value)} class="ms-3 mb-3" /><br/>

                <input type="submit" value="Save Scouting Report" class="btn btn-primary ms-3 mb-3" />
            </form>
        </div>
    );
}

export default NewScoutingReport;