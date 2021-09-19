import React from "react";
import { Link } from 'react-router-dom';


// component imports
import useGetPlayerScoutingReportById from "../../hooks/useGetScoutingReportById";

const ReviewScoutingReport = (props) => {
    // get the scouting reportId
    const scoutingReportId = props.location.state.scoutingReportId;

    // query the data base again for the report since it was saved    
    const newScoutingReport = useGetPlayerScoutingReportById(scoutingReportId);
    console.log(newScoutingReport);



    // rendery the preview here
    return (
        <div>           
            <div>
            <Link class="btn btn-primary ms-3 mb-3" to={{
                    pathname: '/myscoutingreports/newreportsaved',
                    state: {
                        scoutingReport: newScoutingReport,
                    }
                }}>Save Report</Link>

            <Link class="btn btn-primary ms-3 mb-3" to={{
                    pathname: '/myscoutingreports/reviewreport',
                    state: {
                        scoutingReport: newScoutingReport,
                    }
                }}>Review Report</Link>
            </div>

            <h4>Player: {newScoutingReport[0].firstName} {newScoutingReport[0].lastName}</h4>
            <p>Player Team: {newScoutingReport[0].playerBaseballTeamName} VS. {newScoutingReport[0].opponentTeam}<br/>
            myOrg: {newScoutingReport[0].myOrganization}
            </p>

            <br/><br/>

            <h4>Scouting Reports Notes</h4>
            <p>{newScoutingReport[0].scoutingReportNotesBody}</p>

            {/* player stats */}
            <dl>
                <dt>Pitching Summary</dt>
                    <dd>TotalPitches: {newScoutingReport[0].pitcherTotalPitches}</dd>
                    <dd>PitcherWin {newScoutingReport[0].pitcherWin}</dd>
                    <dd>PitcherLoss {newScoutingReport[0].pitcherLoss}</dd>
                    <dd>PitcherInningsPitched {newScoutingReport[0].pitcherInningsPitched}</dd>
                    <dd>PitcherSave {newScoutingReport[0].pitcherSave}</dd>
                    <dd>PitcherBlownSave {newScoutingReport[0].pitcherBlownSave}</dd>
                    <dd>CareerPitchingCompleteGame {newScoutingReport[0].careerPitchingCompleteGame}</dd>

                <dt>Pitching Versus Batters Summary</dt>
                    <dd>PitcherTotalBalls {newScoutingReport[0].pitcherTotalBalls}</dd>
                    <dd>PitcherWalksGiven {newScoutingReport[0].pitcherWalksGiven}</dd>
                    <dd>PitcherTotalStrikes {newScoutingReport[0].pitcherTotalStrikes}</dd>
                    <dd>PitcherTotalStrikeouts {newScoutingReport[0].pitcherTotalStrikeouts}</dd>
                    <dd>PitcherFoulBallsHit {newScoutingReport[0].pitcherFoulBallsHit}</dd>
                    <dd>PitcherHitBatter" : {newScoutingReport[0].pitcherHitBatter}</dd>
                    <dd>PitcherWildPitch {newScoutingReport[0].pitcherWildPitch}</dd>
                    <dd>PitcherPickOffAttempts {newScoutingReport[0].pitcherPickOffAttempts}</dd>
                    <dd>PitcherPickOfSuccess {newScoutingReport[0].pitcherPickOfSuccess}</dd>
                    <dd>PitcherNumberOfBattersFaced {newScoutingReport[0].pitcherNumberOfBattersFaced}</dd>
                    
                <dt>Pitching Ball in Play Summary</dt>
                    <dd>PitcherHitsAllowed {newScoutingReport[0].pitcherHitsAllowed}</dd>
                    <dd>PitcherPitchingHitSingle {newScoutingReport[0].pitcherPitchingHitSingle}</dd>
                    <dd>PitcherHitDouble {newScoutingReport[0].pitcherHitDouble}</dd>
                    <dd>PitcherHitTriple {newScoutingReport[0].pitcherHitTriple}</dd>
                    <dd>PitcherHomerunsAllowed {newScoutingReport[0].pitcherHomerunsAllowed}</dd>
                    <dd>PitcherGroundOuts {newScoutingReport[0].pitcherGroundOuts}</dd>
                    <dd>PitcherFlyouts {newScoutingReport[0].pitcherFlyouts}</dd>
                    <dd>PitcherRunsAllowed {newScoutingReport[0].pitcherRunsAllowed}</dd>

                <dt>Batter At the Plate Summary</dt>
                    <dd>BatterPlateAppearances {newScoutingReport[0].batterPlateAppearances}</dd>
                    <dd>BatterOnBaseCount {newScoutingReport[0].batterOnBaseCount}</dd>
                    <dd>BatterHitByPitch {newScoutingReport[0].batterHitByPitch}</dd>
                    <dd>BatterBalls {newScoutingReport[0].batterBalls}</dd>
                    <dd>BatterBaseOnBalls {newScoutingReport[0].batterBaseOnBalls}</dd>
                    <dd>BatterStrikes {newScoutingReport[0].batterStrikes}</dd>
                    <dd>BatterStrikeouts {newScoutingReport[0].batterStrikeouts}</dd>
                    <dd>BatterFoulBalls {newScoutingReport[0].batterFoulBalls}</dd>

                <dt>Batter Ball in Play Summary</dt>
                    <dd>BatterHit {newScoutingReport[0].batterHit}</dd>
                    <dd>BatterSingle {newScoutingReport[0].batterSingle}</dd>
                    <dd>BatterDouble {newScoutingReport[0].batterDouble}</dd>
                    <dd>BatterTriple {newScoutingReport[0].batterTriple}</dd>
                    <dd>BatterHomerun {newScoutingReport[0].batterHomerun}</dd>
                    <dd>BatterSacFly {newScoutingReport[0].batterSacFly}</dd>
                    <dd>BattterRbi {newScoutingReport[0].battterRbi}</dd>
                    <dd>BatterGroundOut {newScoutingReport[0].batterGroundOut}</dd>
                    <dd>BatterOutByDoublePlay {newScoutingReport[0].batterOutByDoublePlay}</dd>
                    <dd>BatterOutByTriplePlay {newScoutingReport[0].batterOutByTriplePlay}</dd>
                    <dd>BatterFlyout {newScoutingReport[0].batterFlyout}</dd>
                    <dd>BatterRisp {newScoutingReport[0].batterRisp}</dd>
                    <dd>BatterRispSuccess {newScoutingReport[0].batterRispSuccess}</dd>
                    <dd>BatterRispFail {newScoutingReport[0].batterRispFail}</dd>

                <dt>Baserunner Summary</dt>
                    <dd>RunnerAdvancedToSecond {newScoutingReport[0].runnerAdvancedToSecond}</dd>
                    <dd>RunnerAdvancedToThird {newScoutingReport[0].runnderAdvancedToThird}</dd>
                    <dd>RunnerRisp {newScoutingReport[0].runnerRisp}</dd>
                    <dd>RunnerRunScored {newScoutingReport[0].runnerRunScored}</dd>
                    <dd>RunnerStolenBases {newScoutingReport[0].runnerStolenBases}</dd>
                    <dd>RunnerCaughtStealing {newScoutingReport[0].runnerCaughtStealing}</dd>
                    <dd>RunnerPickedOff {newScoutingReport[0].runnerPickedOff}</dd>
                    <dd>RunnerTotalBases {newScoutingReport[0].runnerTotalBases}</dd>
                    <dd>RunnerForcedOut {newScoutingReport[0].runnerForcedOut}</dd>
                    <dd>RunnerTaggedOut {newScoutingReport[0].runnerTaggedOut}</dd>
            </dl>
        </div>
    )
}

export default ReviewScoutingReport;