import React, { useState, useParams, useLocation } from "react";
import axios from 'axios';

// Component or hook imports
import useGetPlayerProfileDetails from "../../hooks/useGetPlayerProfileDetails";


// This component allows scouts to edit a player's details
const ViewPlayerProfile = (props) => {
    // get player profile info
    //const { handle } = useParams();
    // const location = useLocation();
    // const { player } = location.state;
    // const [user, setUser] = React.useState(null);

    // console.log(player);

    console.log(`myplayers/playerprofile}`, props.location.state.player);

    const player = props.location.state.player; // returns an array of objects

    if (player !== undefined) {
        return (
            <div>
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
            {player.careeradvancedToSecond}  <br/>

            A3rd
            {player.careeradvancedToThird}  <br/>

            BT
            {player.careerballs}  <br/>

            BoB
            {player.careerbaseOnBalls}  <br/>

            CS
            {player.careercaughtStealing}  <br/>

            DD
            {player.careerdoubles}  <br/>

            FlyO
            {player.careerflyout}  <br/>

            FO
            {player.careerforcedOut}  <br/>

            FB
            {player.careerfoulBalls}  <br/>

            GIDP
            {player.careergroundOutDoublePlay}  <br/>

            GOUT
            {player.careergroundOuts}  <br/>

            HBP
            {player.careerhitByPitch}  <br/>

            Hits
            {player.careerhits}  <br/>

            HRs
            {player.careerhomeruns}  <br/>

            ISP
            {player.careerisp}  <br/>

            GOB
            {player.careeronBaseCount}  <br/>

            OBTP
            {player.careeroutByTriplePlay}  <br/>

            PO
            {player.careerpickedOff}  <br/>

            BALLS
            {player.careerpitchingBalls}  <br/>

            BS
            {player.careerpitchingBlownSaves}  <br/>

            CG
            {player.careerpitchingCompleteGames}  <br/>


            PFLYOUT
            {player.careerpitchingFlyout}  <br/>

            PFB
            {player.careerpitchingFoulBalls}  <br/>

            PGOUT
            {player.careerpitchingGroundOuts}  <br/>

            PHB
            {player.careerpitchingHitBatter}  <br/>

            PDOUB
            {player.careerpitchingHitDoubles}  <br/>

            PSINGL
            {player.careerpitchingHitSingle}  <br/>

            PTRIP
            {player.careerpitchingHitTriples}  <br/>

            PHA
            {player.careerpitchingHitsAllowed}  <br/>

            PHRA
            {player.careerpitchingHomeRunsAllowed}  <br/>

            PIP
            {player.careerpitchingInningsPitched}  <br/>

            LOSS
            {player.careerpitchingLosses}  <br/>

            PBF
            {player.careerpitchingNumberOfBattersFaced}  <br/>

            POFA
            {player.careerpitchingPickOffAttempt}  <br/>

            POFS
            {player.careerpitchingPickOffSuccess}  <br/>

            PRA
            {player.careerpitchingRunsAllowed}  <br/>

            SAVES
            {player.careerpitchingSaves}  <br/>

            PKS
            {player.careerpitchingStrikeouts}  <br/>

            PSTRIKES
            {player.careerpitchingStrikes}  <br/>

            PWALKS
            {player.careerpitchingWalks}  <br/>

            PWILD
            {player.careerpitchingWildPitch}  <br/>

            WINS
            {player.careerpitchingWins}  <br/>

            PA
            {player.careerplateAppearances}  <br/>

            RBIS
            {player.careerrbis}  <br/>

            BRISP
            {player.careerrisp}  <br/>

            BRISPF
            {player.careerrispFail}  <br/>

            BRISPS
            {player.careerrispSuccess}  <br/>

            RS
            {player.careerrunsScored}  <br/>

            SAC
            {player.careersacFly}  <br/>

            S
            {player.careersingles}  <br/>

            SB
            {player.careerstolenBases}  <br/>

            BKS
            {player.careerstrikeOuts}  <br/>

            BSTRIKES
            {player.careerstrikes}  <br/>

            BTAG
            {player.careertaggedOut}  <br/>

            TB
            {player.careertotalBases}  <br/>

            PTP
            {player.careertotalPitches}  <br/>

            TTT
            {player.careertriples}  <br/>





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