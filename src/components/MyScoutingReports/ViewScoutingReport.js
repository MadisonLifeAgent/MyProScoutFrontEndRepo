import React from "react";

// Component or hook imports

// This component allows scouts to edit a player's details
const ViewScoutingReport = (props) => {
    // get player details
    const scoutingReport = props.location.state.scoutingReport;

    console.log(scoutingReport);

    // display if player details exists
    if (scoutingReport != null) {
        return (
            <div>
                <h2>Scouted Player: {scoutingReport.firstName} {scoutingReport.lastName} </h2>
                <h3>{scoutingReport.playerBaseballTeamName} VS. {scoutingReport.opponentTeam}</h3>
                <p>Notes: {scoutingReport.scoutingReportNotesBody}</p>
                
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
        )
    } else {
        return (
            <div>
                <p>No Player Details</p>
            </div>
        )
    }
}


export default ViewScoutingReport;