import React, { useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

import jwtDecode from "jwt-decode";

// Component or hook imports
import './NewScoutingReport.css';
import usePostScoutingReport from "../../hooks/usePostScoutingReport";
import ReviewScoutingReport from "./ReviewScoutingReport";

// component used to keep track of stats for a scouting event
const NewScoutingReport = (props) => {

    const scoutingReport = props.location.state.scoutingReport;
    console.log(scoutingReport);

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
    async function saveScoutingReport(report, scoutingReportId) {
        const scout = getUser(); 
        console.log(report[5]);

        // send the report in this format to backend
        const reportInfo = {
            "PlayerScoutingReportId": scoutingReportId,
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
            let response = await axios.put(`https://localhost:44394/api/playerscoutingreport/edit/${scoutingReportId}`, reportInfo);
            console.log("good api call");
        }
        catch(ex){
            console.log("bad api call")
        }
    }

    // store all scouting report values in this object and pass it into the axios call
    const newScoutingReport = [];

    // submits scouting report
    const handleSubmit = (event) => {
        event.preventDefault();
        // if a field value is undefined (set it to its current value in state.scoutingReport)
        if (firstName === undefined) {
            setFirstName(scoutingReport.firstName);
        }
        if (lastName === undefined) {
            setLastName(scoutingReport.lastName);
        }
        if (playerBaseballTeamName === undefined) {
            setplayerBaseballTeamName(scoutingReport.playerBaseballTeamName); 
        }
        if (opponentTeam === undefined) {
            setopponentTeam(scoutingReport.opponentTeam);
        }
        if (myOrganization === undefined) {
            setmyOrganization(scoutingReport.myOrganization);
        } 
        if (scoutingReportNotesBody === undefined) { 
            setScoutingReportNotesBody("");
        } 
        if (pitcherTotalPitches === undefined) {
            setpitcherTotalPitches(0);
        } 
        if (pitcherWin === undefined) {
            setpitcherWin(scoutingReport.pitcherWin);
        } 
        if (pitcherLoss === undefined) {
            setpitcherLoss(scoutingReport.pitcherLoss);
        } 
        if (pitcherInningsPitched === undefined) {
            setpitcherInningsPitched(scoutingReport.pitcherInningsPitched);
        } 
        if (pitcherSave === undefined) {
            setpitcherSave(scoutingReport.pitcherSave);
        } 
        if (pitcherBlownSave === undefined) {
            setpitcherBlownSave(scoutingReport.pitcherBlownSave);
        } 
        if (careerPitchingCompleteGame === undefined) {
            setcareerPitchingCompleteGame(scoutingReport.careerPitchingCompleteGame);
        } 

        if (pitcherTotalBalls === undefined) {
            setpitcherTotalBalls(scoutingReport.pitcherTotalBalls);
        } 
        if (pitcherWalksGiven === undefined) { 
            setpitcherWalksGiven(scoutingReport.pitcherWalksGiven);
        } 
        if (pitcherTotalStrikes === undefined) {
            setpitcherTotalStrikes(scoutingReport.pitcherTotalStrikes);
        } 
        if (pitcherTotalStrikeouts === undefined) {
            setpitcherTotalStrikeouts(scoutingReport.pitcherTotalStrikeouts);
        } 
        if (pitcherFoulBallsHit === undefined) {
            setpitcherFoulBallsHit(scoutingReport.pitcherFoulBallsHit);
        } 
        if (pitcherHitBatter === undefined) {
            setpitcherHitBatter(scoutingReport.pitcherHitBatter);
        } 
        if (pitcherWildPitch === undefined) {
            setpitcherWildPitch(scoutingReport.pitcherWildPitch);
        } 
        if (pitcherPickOffAttempts === undefined) {
            setpitcherPickOffAttempts(scoutingReport.pitcherPickOffAttempts);
        } 
        if (pitcherPickOfSuccess === undefined) {
            setpitcherPickOfSuccess(scoutingReport.pitcherPickOfSuccess);
        } 
        if (pitcherNumberOfBattersFaced === undefined) {
            setpitcherNumberOfBattersFaced(scoutingReport.pitcherNumberOfBattersFaced);
        } 

        if (pitcherHitsAllowed === undefined) {
            setpitcherHitsAllowed(scoutingReport.pitcherHitsAllowed);
        } 
        if (pitcherPitchingHitSingle === undefined) {
            setpitcherPitchingHitSingle(scoutingReport.pitcherPitchingHitSingle);
        } 
        if (pitcherHitDouble === undefined) {
            setpitcherHitDouble(scoutingReport.pitcherHitDouble);
        } 
        if (pitcherHitTriple === undefined) {
            setpitcherHitTriple(scoutingReport.pitcherHitTriple);
        } 
        if (pitcherHomerunsAllowed === undefined) {
            setpitcherHomerunsAllowed(scoutingReport.pitcherHomerunsAllowed);
        } 
        if (pitcherGroundOuts === undefined) {
            setpitcherGroundOuts(scoutingReport.pitcherGroundOuts);
        } 
        if (pitcherFlyouts === undefined) {
            setpitcherFlyouts(scoutingReport.pitcherFlyouts);
        } 
        if (pitcherRunsAllowed === undefined) {
            setpitcherRunsAllowed(scoutingReport.pitcherRunsAllowed);
        } 

        if (batterPlateAppearances === undefined) {
            setbatterPlateAppearances(scoutingReport.batterPlateAppearances);
        } 
        if (batterOnBaseCount === undefined) {
            setbatterOnBaseCount(scoutingReport.batterOnBaseCount);
        } 
        if (batterHitByPitch === undefined) {
            setbatterHitByPitch(scoutingReport.batterHitByPitch);
        } 
        if (batterBalls === undefined) {
            setbatterBalls(scoutingReport.batterBalls);
        } 
        if (batterBaseOnBalls === undefined) {
            setbatterBaseOnBalls(scoutingReport.batterBaseOnBalls);
        } 
        if (batterStrikes === undefined) {
            setbatterStrikes(scoutingReport.batterStrikes);
        } 
        if (batterStrikeouts === undefined) {
            setbatterStrikeouts(scoutingReport.batterStrikeouts);
        } 
        if (batterFoulBalls === undefined) {
            setbatterFoulBalls(scoutingReport.batterFoulBalls);
        } 

        if (batterHit === undefined) {
            setbatterHit(scoutingReport.batterHit);
        } 
        if (batterSingle === undefined) {
            setbatterSingle(scoutingReport.batterSingle);
        } 
        if (batterDouble === undefined) {
            setbatterDouble(scoutingReport.batterDouble);
        } 
        if (batterTriple === undefined) {
            setbatterTriple(scoutingReport.batterTriple);
        } 
        if (batterHomerun === undefined) {
            setbatterHomerun(scoutingReport.batterHomerun);
        } 
        if (batterSacFly === undefined) {
            setbatterSacFly(scoutingReport.batterSacFly);
        } 
        if (BattterRbi === undefined) {
            setBattterRbi(scoutingReport.battterRbi);
        } 
        if (batterGroundOut === undefined) {
            setbatterGroundOut(scoutingReport.batterGroundOut); } 
        if (batterOutByDoublePlay === undefined) {
            setbatterOutByDoublePlay(scoutingReport.batterOutByDoublePlay);
        } 
        if (batterOutByTriplePlay === undefined) {
            setbatterOutByTriplePlay(scoutingReport.batterOutByTriplePlay);
        } 
        if (batterFlyout === undefined) {
            setbatterFlyout(scoutingReport.batterFlyout);
        } 
        if (batterRisp === undefined) {
            setbatterRisp(scoutingReport.batterRisp);
        } 
        if (batterRispSuccess === undefined) {
            setbatterRispSuccess(scoutingReport.batterRispSuccess);
        } 
        if (batterRispFail === undefined) {
            setbatterRispFail(scoutingReport.batterRispFail);
        } 

        if (runnerAdvancedToSecond === undefined) {
            setrunnerAdvancedToSecond(scoutingReport.runnerAdvancedToSecond);
        } 
        if (RunnderAdvancedToThird === undefined) {
            setRunnderAdvancedToThird(scoutingReport.runnderAdvancedToThird);
        } 
        if (runnerRisp === undefined) {
            setrunnerRisp(scoutingReport.runnerRisp);
        } 
        if (runnerRunScored === undefined) {
            setrunnerRunScored(scoutingReport.runnerRunScored);
        } 
        if (runnerStolenBases === undefined) {
            setrunnerStolenBases(scoutingReport.runnerStolenBases);
        } 
        if (runnerCaughtStealing === undefined) {
            setrunnerCaughtStealing(scoutingReport.runnerCaughtStealing);
        } 
        if (runnerPickedOff === undefined) {
            setrunnerPickedOff(scoutingReport.runnerPickedOff);
        } 
        if (runnerTotalBases === undefined) {
            setrunnerTotalBases(scoutingReport.runnerTotalBases);
        } 
        if (runnerForcedOut === undefined) {
            setrunnerForcedOut(scoutingReport.runnerForcedOut);
        } 
        if (runnerTaggedOut === undefined) {
            setrunnerTaggedOut(scoutingReport.runnerTaggedOut);
        } 

        // push all the form values into newScoutingReport
        newScoutingReport.push(firstName, lastName, playerBaseballTeamName, opponentTeam, myOrganization, scoutingReportNotesBody, pitcherTotalPitches, pitcherWin, pitcherLoss, pitcherInningsPitched, pitcherSave, pitcherBlownSave, careerPitchingCompleteGame, pitcherTotalBalls, pitcherWalksGiven, pitcherTotalStrikes, pitcherTotalStrikeouts, pitcherFoulBallsHit, pitcherHitBatter, pitcherWildPitch, pitcherPickOffAttempts, pitcherPickOfSuccess, pitcherNumberOfBattersFaced, pitcherHitsAllowed, pitcherPitchingHitSingle, pitcherHitDouble, pitcherHitTriple, pitcherHomerunsAllowed, pitcherGroundOuts, pitcherFlyouts, pitcherRunsAllowed, batterPlateAppearances, batterOnBaseCount, batterHitByPitch, batterBalls, batterBaseOnBalls, batterStrikes, batterStrikeouts, batterFoulBalls, batterHit, batterSingle, batterDouble, batterTriple, batterHomerun, batterSacFly, BattterRbi, batterGroundOut, batterOutByDoublePlay, batterOutByTriplePlay, batterFlyout, batterRisp, batterRispSuccess, batterRispFail, runnerAdvancedToSecond, RunnderAdvancedToThird, runnerRisp, runnerRunScored, runnerStolenBases, runnerCaughtStealing, runnerPickedOff, runnerTotalBases, runnerForcedOut, runnerTaggedOut);

        console.log(newScoutingReport);


        saveScoutingReport(newScoutingReport, scoutingReport.playerScoutingReportId);
    }


    // scouting report form
    return (
        <div id="forms">
            <p id="pagetitle">New Scouting Report</p>

            <form onSubmit={handleSubmit}>
                <input id="newnotebutton" type="submit" value="Pre-fill/Reset Report"  />

                <input id="newnotebutton" type="submit" value="Save Report" />

                <Link id="newnotebutton" to={{
                        pathname: '/myscoutingreports/reviewreport',
                        state: {
                            scoutingReportId: scoutingReport.playerScoutingReportId,
                        }
                    }}>Review Report</Link>

                <p id="info">Player Info</p>
                <label class="form-label input-group">Player First Name: {scoutingReport.firstName} </label>
                <input id="inputfields" type="text" name="firstName" value={firstName} onChange={(event) => setFirstName(event.target.value)} pattern="[A-Za-z]{1,}" title="Alpha characters only, please." class="input-group-text" />

                <label class="form-label input-group">Player Last Name: {scoutingReport.lastName}</label>
                <input id="inputfields" type="text" name="lastName" value={lastName} onChange={(event) => setLastName(event.target.value)} pattern="[A-Za-z]{1,}" title="Alpha characters only, please." class="input-group-text" />

                <label class="form-label input-group">Player's Baseball Team</label>
                <input id="inputfields" type="text" value={playerBaseballTeamName} onChange={(event) => setplayerBaseballTeamName(event.target.value)} pattern="[A-Za-z0-9\s]{1,}" title="Alpha characters and numbers only, please." class="input-group-text" />

                <label class="form-label input-group">Player's Opponent Team</label>
                <input id="inputfields" type="text" value={opponentTeam} onChange={(event) => setopponentTeam(event.target.value)} pattern="[A-Za-z0-9\s]{1,}" title="Alpha characters and numbers only, please." class="input-group-text" />

{/*                 <label class="form-label input-group">myOrganization (Scout)</label>
                <input id="inputfields" type="text" value={myOrganization} onChange={(event) => setmyOrganization(event.target.value)} pattern="[A-Za-z0-9\s]{1,}" title="Alpha characters and numbers only, please." class="input-group-text" /> */}

                <p id="info">Scouting Reports Notes</p>
                <textarea id="inputfields" type="text" name="scoutingReportNotesBody" placeholder="Enter notes here" value={scoutingReportNotesBody} onChange={(event) => setScoutingReportNotesBody(event.target.value)} class="input-group-text" rows="6" cols="60" />

                {/* Total Pitching Stats Accordion */}
                <div class="accordion" id="oneaccordion">
                    <div class="accordion-item">
                        <h4 id="statsheader">
                            <button id="statsheader" class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Total Pitching Stats
                            </button>
                        </h4>
                        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body" id="box">
                                <label class="form-label input-group">Total Pitches</label>
                                <input type="number" value={pitcherTotalPitches} onChange={(event) => setpitcherTotalPitches(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">Batters Faced</label>
                                <input type="number" value={pitcherNumberOfBattersFaced} onChange={(event) => setpitcherNumberOfBattersFaced(event.target.value)} class="input-group-text" />
                                                
                                <label class="form-label input-group">Innings Pitched</label>
                                <input type="number" value={pitcherInningsPitched} onChange={(event) => setpitcherInningsPitched(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">Comlete Game</label>
                                <input type="number" value={careerPitchingCompleteGame} onChange={(event) => setcareerPitchingCompleteGame(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">Win</label>
                                <input type="number" value={pitcherWin} onChange={(event) => setpitcherWin(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">Loss</label>
                                <input type="number" value={pitcherLoss} onChange={(event) => setpitcherLoss(event.target.value)} class="input-group-text" />
                                

                                <label class="form-label input-group">Save</label>
                                <input type="number" value={pitcherSave} onChange={(event) => setpitcherSave(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">Blown Save</label>
                                <input type="number" value={pitcherBlownSave} onChange={(event) => setpitcherBlownSave(event.target.value)} class="input-group-text" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pitching Versus Batter Stats Accordion */}
                <div class="accordion" id="oneaccordion">
                    <div class="accordion-item">
                        <h4 id="statsheader">
                            <button id="statsheader" class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            Pitcher Versus Batters Stats
                            </button>
                        </h4>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body" id="box">
                                <label class="form-label input-group">Balls</label>
                                <input type="number" value={pitcherTotalBalls} onChange={(event) => setpitcherTotalBalls(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">Walks</label>
                                <input type="number" value={pitcherWalksGiven} onChange={(event) => setpitcherWalksGiven(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">Strikes</label>
                                <input type="number" value={pitcherTotalStrikes} onChange={(event) => setpitcherTotalStrikes(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">Strikeouts</label>
                                <input type="number" value={pitcherTotalStrikeouts} onChange={(event) => setpitcherTotalStrikeouts(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">Foul Balls</label>
                                <input type="number" value={pitcherFoulBallsHit} onChange={(event) => setpitcherFoulBallsHit(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">Hit Batters</label>
                                <input type="number" value={pitcherHitBatter} onChange={(event) => setpitcherHitBatter(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">Wild Pitches</label>
                                <input type="number" value={pitcherWildPitch} onChange={(event) => setpitcherWildPitch(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">Pickoff Attempts</label>
                                <input type="number" value={pitcherPickOffAttempts} onChange={(event) => setpitcherPickOffAttempts(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">Pickoff Success</label>
                                <input type="number" value={pitcherPickOfSuccess} onChange={(event) => setpitcherPickOfSuccess(event.target.value)} class="input-group-text" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pitching Contact Results Accordion */}
                <div class="accordion" id="oneaccordion">
                    <div class="accordion-item">
                        <h4 id="statsheader">
                            <button id="statsheader" class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                Pitcher Contact Results
                            </button>
                        </h4>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body" id="box">
                                <label class="form-label input-group">Hits Allowed</label>
                                <input type="number" value={pitcherHitsAllowed} onChange={(event) => setpitcherHitsAllowed(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">Singles</label>
                                <input type="number" value={pitcherPitchingHitSingle} onChange={(event) => setpitcherPitchingHitSingle(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">Doubles</label>
                                <input type="number" value={pitcherHitDouble} onChange={(event) => setpitcherHitDouble(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">Triples</label>
                                <input type="number" value={pitcherHitTriple} onChange={(event) => setpitcherHitTriple(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">Homeruns Allowed</label>
                                <input type="number" value={pitcherHomerunsAllowed} onChange={(event) => setpitcherHomerunsAllowed(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">Runs Allowed</label>
                                <input type="number" value={pitcherRunsAllowed} onChange={(event) => setpitcherRunsAllowed(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">Groundouts</label>
                                <input type="number" value={pitcherGroundOuts} onChange={(event) => setpitcherGroundOuts(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">Flyouts</label>
                                <input type="number" value={pitcherFlyouts} onChange={(event) => setpitcherFlyouts(event.target.value)} class="input-group-text" />
                                
                            </div>
                        </div>
                    </div>
                </div>

                {/* Batter at the Plate Stats Accordion */}
                <div class="accordion" id="oneaccordion">
                    <div class="accordion-item">
                        <h4 id="statsheader">
                            <button id="statsheader" class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                Batter at the Plate Stats
                            </button>
                        </h4>
                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div class="accordion-body" id="box">
                                <label class="form-label input-group">Plate Appearances</label>
                                <input type="number" value={batterPlateAppearances} onChange={(event) => setbatterPlateAppearances(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">On Base Count</label>
                                <input type="number" value={batterOnBaseCount} onChange={(event) => setbatterOnBaseCount(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">Balls Taken</label>
                                <input type="number" value={batterBalls} onChange={(event) => setbatterBalls(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">Base on Balls</label>
                                <input type="number" value={batterBaseOnBalls} onChange={(event) => setbatterBaseOnBalls(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">Strikes</label>
                                <input type="number" value={batterStrikes} onChange={(event) => setbatterStrikes(event.target.value)} class="input-group-text" />
                                
                                <label class="form-label input-group">Strikeouts</label>
                                <input type="number" value={batterStrikeouts} onChange={(event) => setbatterStrikeouts(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">Foul Balls</label>
                                <input type="number" value={batterFoulBalls} onChange={(event) => setbatterFoulBalls(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">Hit By Pitch</label>
                                <input type="number" value={batterHitByPitch} onChange={(event) => setbatterHitByPitch(event.target.value)} class="input-group-text" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Batter Ball in Play Stats Accordion */}
                <div class="accordion" id="oneaccordion">
                    <div class="accordion-item">
                        <h4 id="statsheader">
                            <button id="statsheader" class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                Batter Ball in Play Stats
                            </button>
                        </h4>
                        <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div class="accordion-body" id="box">
                                <label class="form-label input-group">Hit</label>
                                <input type="number" value={batterHit} onChange={(event) => setbatterHit(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">Single</label>
                                <input type="number" value={batterSingle} onChange={(event) => setbatterSingle(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">Double</label>
                                <input type="number" value={batterDouble} onChange={(event) => setbatterDouble(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">Triple</label>
                                <input type="number" value={batterTriple} onChange={(event) => setbatterTriple(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">Homerun</label>
                                <input type="number" value={batterHomerun} onChange={(event) => setbatterHomerun(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">SacFly</label>
                                <input type="number" value={batterSacFly} onChange={(event) => setbatterSacFly(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">RBIs</label>
                                <input type="number" value={BattterRbi} onChange={(event) => setBattterRbi(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">Groundout</label>
                                <input type="number" value={batterGroundOut} onChange={(event) => setbatterGroundOut(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">Hit into Double Play</label>
                                <input type="number" value={batterOutByDoublePlay} onChange={(event) => setbatterOutByDoublePlay(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">Hit into Triple Play</label>
                                <input type="number" value={batterOutByTriplePlay} onChange={(event) => setbatterOutByTriplePlay(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">Flyout</label>
                                <input type="number" value={batterFlyout} onChange={(event) => setbatterFlyout(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">RISP</label>
                                <input type="number" value={batterRisp} onChange={(event) => setbatterRisp(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">RISP Success</label>
                                <input type="number" value={batterRispSuccess} onChange={(event) => setbatterRispSuccess(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">RISP Fail</label>
                                <input type="number" value={batterRispFail} onChange={(event) => setbatterRispFail(event.target.value)} class="input-group-text" />

                                
                            </div>
                        </div>
                    </div>
                </div>

                {/* Baserunner Stats Accordion */}
                <div class="accordion" id="oneaccordion">
                    <div class="accordion-item">
                        <h4 id="statsheader">
                            <button id="statsheader" class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                                Baserunning Stats
                            </button>
                        </h4>
                        <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body" id="box">
                            <label class="form-label input-group">Advanced to 2nd</label>
                                <input type="number" value={runnerAdvancedToSecond} onChange={(event) => setrunnerAdvancedToSecond(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">Advanced to 3rd</label>
                                <input type="number" value={RunnderAdvancedToThird} onChange={(event) => setRunnderAdvancedToThird(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">ISP</label>
                                <input type="number" value={runnerRisp} onChange={(event) => setrunnerRisp(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">Run Scored</label>
                                <input type="number" value={runnerRunScored} onChange={(event) => setrunnerRunScored(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">Stolen Bases</label>
                                <input type="number" value={runnerStolenBases} onChange={(event) => setrunnerStolenBases(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">Caught Stealing</label>
                                <input type="number" value={runnerCaughtStealing} onChange={(event) => setrunnerCaughtStealing(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">Total Bases</label>
                                <input type="number" value={runnerTotalBases} onChange={(event) => setrunnerTotalBases(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">Picked Off</label>
                                <input type="number" value={runnerPickedOff} onChange={(event) => setrunnerPickedOff(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">Forced Out</label>
                                <input type="number" value={runnerForcedOut} onChange={(event) => setrunnerForcedOut(event.target.value)} class="input-group-text" />

                                <label class="form-label input-group">Tagged Out</label>
                                <input type="number" value={runnerTaggedOut} onChange={(event) => setrunnerTaggedOut(event.target.value)} class="input-group-text" />                                
                            </div>
                        </div>
                    </div>
                </div>

                <input id="newnotebutton" type="submit" value="Pre-fill/Reset Report"  />

                <input id="newnotebutton" type="submit" value="Save Report" />
                
                <Link id="newnotebutton" to={{
                        pathname: `/myscoutingreports/reviewreport`,
                        state: {
                            scoutingReportId: scoutingReport.playerScoutingReportId,
                        }
                    }}>Review Report</Link>

            </form>
        
{/*             <ReviewScoutingReport newScoutingReport={newScoutingReport} />


            <Switch>
                <Route path="/myscoutingreports/newscoutingreport/review" exact component={ReviewScoutingReport} />
            </Switch> */}
        
        </div>
    );
}

export default NewScoutingReport;