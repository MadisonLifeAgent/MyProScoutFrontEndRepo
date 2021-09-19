import React from "react";
import jwtDecode from "jwt-decode";

// Component or hook imports
import AddScoutingReportNote from "./AddScoutingReportNote";
import ViewScoutingReportNotes from "./ViewScoutingReportNotes";

// This component allows scouts to edit a player's details
const ViewScoutingReport = (props) => {
    // get player details
    const scoutingReport = props.location.state.scoutingReport;

    //get user
    const jwt = localStorage.getItem('token');
    function getUser() {
        try{
            const user = jwtDecode(jwt);
            return user;
        } catch {
        }
    }

    const scout = getUser();

    // display if player details exists
    if (scoutingReport != null) {
        return (
            <div>
                <div>
                    <h2>Scouted Player: {scoutingReport.firstName} {scoutingReport.lastName} </h2>
                    <h3>{scoutingReport.playerBaseballTeamName} VS. {scoutingReport.opponentTeam}</h3>

                    <p>Notes: {scoutingReport.scoutingReportNotesBody}</p>
                </div>


                <div>
                    <h4>Stats</h4>
                        {scoutingReport.pitcherTotalPitches}<br/>
                        {scoutingReport.pitcherWin}<br/>
                        {scoutingReport.pitcherLoss}<br/>
                        {scoutingReport.pitcherInningsPitched}<br/>
                        {scoutingReport.pitcherSave}<br/>
                        {scoutingReport.pitcherBlownSave}<br/>
                        {scoutingReport.careerPitchingCompleteGame}<br/>

                        {scoutingReport.pitcherTotalBalls}<br/>
                        {scoutingReport.pitcherWalksGiven}<br/>
                        {scoutingReport.pitcherTotalStrikes}<br/>
                        {scoutingReport.pitcherTotalStrikeouts}<br/>
                        {scoutingReport.pitcherFoulBallsHit}<br/>
                        {scoutingReport.pitcherHitBatter}<br/>
                        {scoutingReport.pitcherWildPitch}<br/>
                        {scoutingReport.pitcherPickOffAttempts}<br/>
                        {scoutingReport.pitcherPickOfSuccess}<br/>
                        {scoutingReport.pitcherNumberOfBattersFaced}<br/>

                        {scoutingReport.pitcherHitsAllowed}<br/>
                        {scoutingReport.pitcherPitchingHitSingle}<br/>
                        {scoutingReport.pitcherHitDouble}<br/>
                        {scoutingReport.pitcherHitTriple}<br/>
                        {scoutingReport.pitcherHomerunsAllowed}<br/>
                        {scoutingReport.pitcherGroundOuts}<br/>
                        {scoutingReport.pitcherFlyouts}<br/>
                        {scoutingReport.pitcherRunsAllowed}<br/>

                        {scoutingReport.batterPlateAppearances}<br/>
                        {scoutingReport.batterOnBaseCount}<br/>
                        {scoutingReport.batterHitByPitch}<br/>
                        {scoutingReport.batterBalls}<br/>
                        {scoutingReport.batterBaseOnBalls}<br/>
                        {scoutingReport.batterStrikes}<br/>
                        {scoutingReport.batterStrikeouts}<br/>
                        {scoutingReport.batterFoulBalls}<br/>

                        {scoutingReport.batterHit}<br/>
                        {scoutingReport.batterSingle}<br/>
                        {scoutingReport.batterDouble}<br/>
                        {scoutingReport.batterTriple}<br/>
                        {scoutingReport.batterHomerun}<br/>
                        {scoutingReport.batterSacFly}<br/>
                        {scoutingReport.BattterRbi}<br/>
                        {scoutingReport.batterGroundOut}<br/>
                        {scoutingReport.batterOutByDoublePlay}<br/>
                        {scoutingReport.batterOutByTriplePlay}<br/>
                        {scoutingReport.batterFlyout}<br/>
                        {scoutingReport.batterRisp}<br/>
                        {scoutingReport.batterRispSuccess}<br/>
                        {scoutingReport.batterRispFail}<br/>

                        {scoutingReport.runnerAdvancedToSecond}<br/>
                        {scoutingReport.RunnderAdvancedToThird}<br/>
                        {scoutingReport.runnerRisp}<br/>
                        {scoutingReport.runnerRunScored}<br/>
                        {scoutingReport.runnerStolenBases}<br/>
                        {scoutingReport.runnerCaughtStealing}<br/>
                        {scoutingReport.runnerPickedOff}<br/>
                        {scoutingReport.runnerTotalBases}<br/>
                        {scoutingReport.runnerForcedOut}<br/>
                        {scoutingReport.runnerTaggedOut}<br/>
                </div>
                <div>
                    <br/>
                    <h2>Report Notes</h2>
                    <AddScoutingReportNote scout={scout} scoutingReport={scoutingReport} />


                </div>
                <ViewScoutingReportNotes reportId={scoutingReport.playerScoutingReportId} />
            </div>
        
        
        )
    } else {
        return (
            <div>
                <p>No Report</p>
            </div>
        )
    }
}


export default ViewScoutingReport;