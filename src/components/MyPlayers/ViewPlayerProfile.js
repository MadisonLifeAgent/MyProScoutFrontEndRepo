import React, { useState, useParams, useLocation } from "react";
import axios from 'axios';

// Component or hook imports

// This component allows scouts to edit a player's details
const ViewPlayerProfile = (props) => {
    // get player details
    const player = props.location.state.player;

    // display if player details exists
    if (player.firstName) {
        return (
            <div>
                <img src={player.playerImageUrl} alt={'no pic of ' + player.firstName + ' ' + player.lastName} />
                <p>{player.firstName} {player.lastName}
                    <br/>
                    {player.playerPositionPrimaryName}
            <br/>
            Throws: {player.playerThrowingHandednessName}
            <br/>
            Bats: {player.playerBattingHandednessName}
            <br />
            Player Type: {player.playerTypeName}
            <br/>
            Height: {player.height}"
            <br/>
            Weight: {player.weight} lbs.
            <br />
            Age: {player.age}
            <br/>
            Turned Pro: {player.yearTurnedPro}
            <br />
            Current Team: {player.baseballTeamName}
            <br/>
            Secondary Position: {player.playerPositionSecondaryName}
            <br/>



            A2nd
            {player.careerAdvancedToSecond}  <br/>

            A3rd
            {player.careerAdvancedToThird}  <br/>

            BT
            {player.careerBalls}  <br/>

            BoB
            {player.careerBaseOnBalls}  <br/>

            CS
            {player.careerCaughtStealing}  <br/>

            DD
            {player.careerDoubles}  <br/>

            FlyO
            {player.careerFlyout}  <br/>

            FO
            {player.careerForcedOut}  <br/>

            FB
            {player.careerFoulBalls}  <br/>

            GIDP
            {player.careerGroundOutDoublePlay}  <br/>

            GOUT
            {player.careerGroundOuts}  <br/>

            HBP
            {player.careerHitByPitch}  <br/>

            Hits
            {player.careerHits}  <br/>

            HRs
            {player.careerHomeruns}  <br/>

            ISP
            {player.careerRisp}  <br/>

            GOB
            {player.careerOnBaseCount}  <br/>

            OBTP
            {player.careerOutByTriplePlay}  <br/>

            PO
            {player.careerPickedOff}  <br/>

            BALLS
            {player.careerPitchingBalls}  <br/>

            BS
            {player.careerPitchingBlownSaves}  <br/>

            CG
            {player.careerPitchingCompleteGames}  <br/>


            PFLYOUT
            {player.careerPitchingFlyout}  <br/>

            PFB
            {player.careerPitchingFoulBalls}  <br/>

            PGOUT
            {player.careerPitchingGroundOuts}  <br/>

            PHB
            {player.careerPitchingHitBatter}  <br/>

            PDOUB
            {player.careerPitchingHitDoubles}  <br/>

            PSINGL
            {player.careerPitchingHitSingle}  <br/>

            PTRIP
            {player.careerPitchingHitTriples}  <br/>

            PHA
            {player.careerPitchingHitsAllowed}  <br/>

            PHRA
            {player.careerPitchingHomeRunsAllowed}  <br/>

            PIP
            {player.careerPitchingInningsPitched}  <br/>

            LOSS
            {player.careerPitchingLosses}  <br/>

            PBF
            {player.careerPitchingNumberOfBattersFaced}  <br/>

            POFA
            {player.careerPitchingPickOffAttempt}  <br/>

            POFS
            {player.careerPitchingPickOffSuccess}  <br/>

            PRA
            {player.careerPitchingRunsAllowed}  <br/>

            SAVES
            {player.careerPitchingSaves}  <br/>

            PKS
            {player.careerPitchingStrikeouts}  <br/>

            PSTRIKES
            {player.careerPitchingStrikes}  <br/>

            PWALKS
            {player.careerPitchingWalks}  <br/>

            PWILD
            {player.careerPitchingWildPitch}  <br/>

            WINS
            {player.careerPitchingWins}  <br/>

            PA
            {player.careerPlateAppearances}  <br/>

            RBIS
            {player.careerRbis}  <br/>

            BRISP
            {player.careerRisp}  <br/>

            BRISPF
            {player.careerRispFail}  <br/>

            BRISPS
            {player.careerRispSuccess}  <br/>

            RS
            {player.careerRunsScored}  <br/>

            SAC
            {player.careerSacFly}  <br/>

            S
            {player.careerSingles}  <br/>

            SB
            {player.careerStolenBases}  <br/>

            BKS
            {player.careerStrikeOuts}  <br/>

            BSTRIKES
            {player.careerStrikes}  <br/>

            BTAG
            {player.careerTaggedOut}  <br/>

            TB
            {player.careerTotalBases}  <br/>

            PTP
            {player.careerTotalPitches}  <br/>

            TTT
            {player.careerTriples}  <br/>





            </p>


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

   // Displayer Player Info
    /* return (
        <div>
            <p>{player.firstName} {player.lastName} </p>
                <br/>
            {/* {player.playerPositionPrimaryName}
            <br/>
            Throws: {player.playerThrowingHandednessName}
            <br/>
            Bats: {player.playerBattingHandednessName}
            <br />
            Player Type: {player.playerTypeName}
            <br/>
            Height: {player.height}"
            <br/>
            Weight: {player.weight} lbs.
            <br />
            Age: {player.age}
            <br/>
            Turned Pro: {player.yearTurnedPro}
            <br />
            Current Team: {player.baseballTeamName}
            <br/>
            Secondary Position: {player.playerPositionSecondaryName}
            </p>

            A2nd
            {player.advancedToSecond}  <br/>

            A3rd
            {player.advancedToThird}  <br/>

            BT
            {player.balls}  <br/>

            BoB
            {player.baseOnBalls}  <br/>

            CS
            {player.caughtStealing}  <br/>

            DD
            {player.doubles}  <br/>

            FlyO
            {player.flyout}  <br/>

            FO
            {player.forcedOut}  <br/>

            FB
            {player.foulBalls}  <br/>

            GIDP
            {player.groundOutDoublePlay}  <br/>

            GOUT
            {player.groundOuts}  <br/>

            HBP
            {player.hitByPitch}  <br/>

            Hits
            {player.hits}  <br/>

            HRs
            {player.homeruns}  <br/>

            ISP
            {player.isp}  <br/>

            GOB
            {player.onBaseCount}  <br/>

            OBTP
            {player.outByTriplePlay}  <br/>

            PO
            {player.pickedOff}  <br/>

            BALLS
            {player.pitchingBalls}  <br/>

            BS
            {player.pitchingBlownSaves}  <br/>

            CG
            {player.pitchingCompleteGames}  <br/>


            PFLYOUT
            {player.pitchingFlyout}  <br/>

            PFB
            {player.pitchingFoulBalls}  <br/>

            PGOUT
            {player.pitchingGroundOuts}  <br/>

            PHB
            {player.pitchingHitBatter}  <br/>

            PDOUB
            {player.pitchingHitDoubles}  <br/>

            PSINGL
            {player.pitchingHitSingle}  <br/>

            PTRIP
            {player.pitchingHitTriples}  <br/>

            PHA
            {player.pitchingHitsAllowed}  <br/>

            PHRA
            {player.pitchingHomeRunsAllowed}  <br/>

            PIP
            {player.pitchingInningsPitched}  <br/>

            LOSS
            {player.pitchingLosses}  <br/>

            PBF
            {player.pitchingNumberOfBattersFaced}  <br/>

            POFA
            {player.pitchingPickOffAttempt}  <br/>

            POFS
            {player.pitchingPickOffSuccess}  <br/>

            PRA
            {player.pitchingRunsAllowed}  <br/>

            SAVES
            {player.pitchingSaves}  <br/>

            PKS
            {player.pitchingStrikeouts}  <br/>

            PSTRIKES
            {player.pitchingStrikes}  <br/>

            PWALKS
            {player.pitchingWalks}  <br/>

            PWILD
            {player.pitchingWildPitch}  <br/>

            WINS
            {player.pitchingWins}  <br/>

            PA
            {player.plateAppearances}  <br/>

            RBIS
            {player.rbis}  <br/>

            BRISP
            {player.risp}  <br/>

            BRISPF
            {player.rispFail}  <br/>

            BRISPS
            {player.rispSuccess}  <br/>

            RS
            {player.runsScored}  <br/>

            SAC
            {player.sacFly}  <br/>

            S
            {player.singles}  <br/>

            SB
            {player.stolenBases}  <br/>

            BKS
            {player.strikeOuts}  <br/>

            BSTRIKES
            {player.strikes}  <br/>

            BTAG
            {player.taggedOut}  <br/>

            TB
            {player.totalBases}  <br/>

            PTP
            {player.totalPitches}  <br/>

            TTT
            {player.triples}  <br/> */



            

            
     /*    </div>
        );  */


export default ViewPlayerProfile;