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
            <h4>{scoutingReport.firstName} {scoutingReport.lastName} </h4>
            {scoutingReport.playerBaseballTeamName} VS. {scoutingReport.opponentTeam}
            <br />

            A2nd
            {scoutingReport.advancedToSecond}  <br/>

            A3rd
            {scoutingReport.advancedToThird}  <br/>

            BT
            {scoutingReport.balls}  <br/>

            BoB
            {scoutingReport.baseOnBalls}  <br/>

            CS
            {scoutingReport.caughtStealing}  <br/>

            DD
            {scoutingReport.doubles}  <br/>

            FlyO
            {scoutingReport.flyout}  <br/>

            FO
            {scoutingReport.forcedOut}  <br/>

            FB
            {scoutingReport.foulBalls}  <br/>

            GIDP
            {scoutingReport.groundOutDoublePlay}  <br/>

            GOUT
            {scoutingReport.groundOuts}  <br/>

            HBP
            {scoutingReport.hitByPitch}  <br/>

            Hits
            {scoutingReport.hits}  <br/>

            HRs
            {scoutingReport.homeruns}  <br/>

            ISP
            {scoutingReport.isp}  <br/>

            GOB
            {scoutingReport.onBaseCount}  <br/>

            OBTP
            {scoutingReport.outByTriplePlay}  <br/>

            PO
            {scoutingReport.pickedOff}  <br/>

            BALLS
            {scoutingReport.pitchingBalls}  <br/>

            BS
            {scoutingReport.pitchingBlownSaves}  <br/>

            CG
            {scoutingReport.pitchingCompleteGames}  <br/>


            PFLYOUT
            {scoutingReport.pitchingFlyout}  <br/>

            PFB
            {scoutingReport.pitchingFoulBalls}  <br/>

            PGOUT
            {scoutingReport.pitchingGroundOuts}  <br/>

            PHB
            {scoutingReport.pitchingHitBatter}  <br/>

            PDOUB
            {scoutingReport.pitchingHitDoubles}  <br/>

            PSINGL
            {scoutingReport.pitchingHitSingle}  <br/>

            PTRIP
            {scoutingReport.pitchingHitTriples}  <br/>

            PHA
            {scoutingReport.pitchingHitsAllowed}  <br/>

            PHRA
            {scoutingReport.pitchingHomeRunsAllowed}  <br/>

            PIP
            {scoutingReport.pitchingInningsPitched}  <br/>

            LOSS
            {scoutingReport.pitchingLosses}  <br/>

            PBF
            {scoutingReport.pitchingNumberOfBattersFaced}  <br/>

            POFA
            {scoutingReport.pitchingPickOffAttempt}  <br/>

            POFS
            {scoutingReport.pitchingPickOffSuccess}  <br/>

            PRA
            {scoutingReport.pitchingRunsAllowed}  <br/>

            SAVES
            {scoutingReport.pitchingSaves}  <br/>

            PKS
            {scoutingReport.pitchingStrikeouts}  <br/>

            PSTRIKES
            {scoutingReport.pitchingStrikes}  <br/>

            PWALKS
            {scoutingReport.pitchingWalks}  <br/>

            PWILD
            {scoutingReport.pitchingWildPitch}  <br/>

            WINS
            {scoutingReport.pitchingWins}  <br/>

            PA
            {scoutingReport.plateAppearances}  <br/>

            RBIS
            {scoutingReport.rbis}  <br/>

            BRISP
            {scoutingReport.risp}  <br/>

            BRISPF
            {scoutingReport.rispFail}  <br/>

            BRISPS
            {scoutingReport.rispSuccess}  <br/>

            RS
            {scoutingReport.runsScored}  <br/>

            SAC
            {scoutingReport.sacFly}  <br/>

            S
            {scoutingReport.singles}  <br/>

            SB
            {scoutingReport.stolenBases}  <br/>

            BKS
            {scoutingReport.strikeOuts}  <br/>

            BSTRIKES
            {scoutingReport.strikes}  <br/>

            BTAG
            {scoutingReport.taggedOut}  <br/>

            TB
            {scoutingReport.totalBases}  <br/>

            PTP
            {scoutingReport.totalPitches}  <br/>

            TTT
            {scoutingReport.triples}  <br/> 



            

            







 


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