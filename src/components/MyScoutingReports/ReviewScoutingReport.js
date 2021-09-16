import React, { useState, useParams, useLocation } from "react";


const ReviewScoutingReport = (props) => {
    const newScoutingReport = props.newScoutingReport;
    console.log(newScoutingReport);

    // insert get scoutId from local storage here

    // insert axios call here

    // rendery the preview here
    return (
        <React.Fragment>
            <h4>Player: {newScoutingReport[0]} {newScoutingReport[1]}</h4>
            <p>Player Team: {newScoutingReport[2]} VS. {newScoutingReport[3]}<br/>
            myOrg: {newScoutingReport[4]}
            </p>

            <br/><br/>

            <h4>Scouting Reports Notes</h4>
            <p>{newScoutingReport[5]}</p>

            
            <dl>
                <dt>Pitching Summary</dt>
                    <dd>TotalPitches: {newScoutingReport[6]}</dd>
                    <dd>PitcherWin {newScoutingReport[7]}</dd>
                    <dd>PitcherLoss {newScoutingReport[8]}</dd>
                    <dd>PitcherInningsPitched {newScoutingReport[9]}</dd>
                    <dd>PitcherSave {newScoutingReport[10]}</dd>
                    <dd>PitcherBlownSave {newScoutingReport[11]}</dd>
                    <dd>CareerPitchingCompleteGame {newScoutingReport[12]}</dd>

                <dt>Pitching Versus Batters Summary</dt>
                    <dd>PitcherTotalBalls {newScoutingReport[13]}</dd>
                    <dd>PitcherWalksGiven {newScoutingReport[14]}</dd>
                    <dd>PitcherTotalStrikes {newScoutingReport[15]}</dd>
                    <dd>PitcherTotalStrikeouts {newScoutingReport[16]}</dd>
                    <dd>PitcherFoulBallsHit {newScoutingReport[17]}</dd>
                    <dd>PitcherHitBatter" : {newScoutingReport[18]}</dd>
                    <dd>PitcherWildPitch {newScoutingReport[19]}</dd>
                    <dd>PitcherPickOffAttempts {newScoutingReport[20]}</dd>
                    <dd>PitcherPickOfSuccess {newScoutingReport[21]}</dd>
                    <dd>PitcherNumberOfBattersFaced {newScoutingReport[22]}</dd>
                    
                <dt>Pitching Ball in Play Summary</dt>
                    <dd>PitcherHitsAllowed {newScoutingReport[23]}</dd>
                    <dd>PitcherPitchingHitSingle {newScoutingReport[24]}</dd>
                    <dd>PitcherHitDouble {newScoutingReport[25]}</dd>
                    <dd>PitcherHitTriple {newScoutingReport[26]}</dd>
                    <dd>PitcherHomerunsAllowed {newScoutingReport[27]}</dd>
                    <dd>PitcherGroundOuts {newScoutingReport[28]}</dd>
                    <dd>PitcherFlyouts {newScoutingReport[29]}</dd>
                    <dd>PitcherRunsAllowed {newScoutingReport[30]}</dd>

                <dt>Batter At the Plate Summary</dt>
                    <dd>BatterPlateAppearances {newScoutingReport[31]}</dd>
                    <dd>BatterOnBaseCount {newScoutingReport[32]}</dd>
                    <dd>BatterHitByPitch {newScoutingReport[33]}</dd>
                    <dd>BatterBalls {newScoutingReport[34]}</dd>
                    <dd>BatterBaseOnBalls {newScoutingReport[35]}</dd>
                    <dd>BatterStrikes {newScoutingReport[36]}</dd>
                    <dd>BatterStrikeouts {newScoutingReport[37]}</dd>
                    <dd>BatterFoulBalls {newScoutingReport[38]}</dd>

                <dt>Batter Ball in Play Summary</dt>
                    <dd>BatterHit {newScoutingReport[39]}</dd>
                    <dd>BatterSingle {newScoutingReport[40]}</dd>
                    <dd>BatterDouble {newScoutingReport[41]}</dd>
                    <dd>BatterTriple {newScoutingReport[42]}</dd>
                    <dd>BatterHomerun {newScoutingReport[43]}</dd>
                    <dd>BatterSacFly {newScoutingReport[44]}</dd>
                    <dd>BattterRbi {newScoutingReport[45]}</dd>
                    <dd>BatterGroundOut {newScoutingReport[46]}</dd>
                    <dd>BatterOutByDoublePlay {newScoutingReport[47]}</dd>
                    <dd>BatterOutByTriplePlay {newScoutingReport[48]}</dd>
                    <dd>BatterFlyout {newScoutingReport[49]}</dd>
                    <dd>BatterRisp {newScoutingReport[50]}</dd>
                    <dd>BatterRispSuccess {newScoutingReport[51]}</dd>
                    <dd>BatterRispFail {newScoutingReport[52]}</dd>

                <dt>Baserunner Summary</dt>
                    <dd>RunnerAdvancedToSecond {newScoutingReport[53]}</dd>
                    <dd>RunnderAdvancedToThird {newScoutingReport[54]}</dd>
                    <dd>RunnerRisp {newScoutingReport[55]}</dd>
                    <dd>RunnerRunScored {newScoutingReport[56]}</dd>
                    <dd>RunnerStolenBases {newScoutingReport[57]}</dd>
                    <dd>RunnerCaughtStealing {newScoutingReport[58]}</dd>
                    <dd>RunnerPickedOff {newScoutingReport[59]}</dd>
                    <dd>RunnerTotalBases {newScoutingReport[60]}</dd>
                    <dd>RunnerForcedOut {newScoutingReport[61]}</dd>
                    <dd>RunnerTaggedOut {newScoutingReport[62]}</dd>
            </dl>

        </React.Fragment>

    )
}

export default ReviewScoutingReport;