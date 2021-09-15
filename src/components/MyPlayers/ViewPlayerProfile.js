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

    const player = useGetPlayerProfileDetails(2); // returns an array of objects
    console.log("player");
    console.log(player);

   // Displayer Player Info
    return (
        <div>
            <p>{player[0].firstName} {player[0].lastName}
                <br/>
            {player[0].playerPositionPrimaryName}
            <br/>
            Throws: {player[0].playerThrowingHandednessName}
            <br/>
            Bats: {player[0].playerBattingHandednessName}
            <br />
            Player Type: {player[0].playerTypeName}
            <br/>
            Height: {player[0].height}"
            <br/>
            Weight: {player[0].weight} lbs.
            <br />
            Age: {player[0].age}
            <br/>
            Turned Pro: {player[0].yearTurnedPro}
            <br />
            Current Team: {player[0].baseballTeamName}
            <br/>
            Secondary Position: {player[0].playerPositionSecondaryName}
            </p>

            A2nd
            {player[0].advancedToSecond.toString()}  <br/>

            A3rd
            {player[0].advancedToThird.toString()}  <br/>

            BT
            {player[0].balls.toString()}  <br/>

            BoB
            {player[0].baseOnBalls.toString()}  <br/>

            CS
            {player[0].caughtStealing.toString()}  <br/>

            DD
            {player[0].doubles.toString()}  <br/>

            FlyO
            {player[0].flyout.toString()}  <br/>

            FO
            {player[0].forcedOut.toString()}  <br/>

            FB
            {player[0].foulBalls.toString()}  <br/>

            GIDP
            {player[0].groundOutDoublePlay.toString()}  <br/>

            GOUT
            {player[0].groundOuts.toString()}  <br/>

            HBP
            {player[0].hitByPitch.toString()}  <br/>

            Hits
            {player[0].hits.toString()}  <br/>

            HRs
            {player[0].homeruns.toString()}  <br/>

            ISP
            {player[0].isp.toString()}  <br/>

            GOB
            {player[0].onBaseCount.toString()}  <br/>

            OBTP
            {player[0].outByTriplePlay.toString()}  <br/>

            PO
            {player[0].pickedOff.toString()}  <br/>

            BALLS
            {player[0].pitchingBalls.toString()}  <br/>

            BS
            {player[0].pitchingBlownSaves.toString()}  <br/>

            CG
            {player[0].pitchingCompleteGames.toString()}  <br/>


            PFLYOUT
            {player[0].pitchingFlyout.toString()}  <br/>

            PFB
            {player[0].pitchingFoulBalls.toString()}  <br/>

            PGOUT
            {player[0].pitchingGroundOuts.toString()}  <br/>

            PHB
            {player[0].pitchingHitBatter.toString()}  <br/>

            PDOUB
            {player[0].pitchingHitDoubles.toString()}  <br/>

            PSINGL
            {player[0].pitchingHitSingle.toString()}  <br/>

            PTRIP
            {player[0].pitchingHitTriples.toString()}  <br/>

            PHA
            {player[0].pitchingHitsAllowed.toString()}  <br/>

            PHRA
            {player[0].pitchingHomeRunsAllowed.toString()}  <br/>

            PIP
            {player[0].pitchingInningsPitched.toString()}  <br/>

            LOSS
            {player[0].pitchingLosses.toString()}  <br/>

            PBF
            {player[0].pitchingNumberOfBattersFaced.toString()}  <br/>

            POFA
            {player[0].pitchingPickOffAttempt.toString()}  <br/>

            POFS
            {player[0].pitchingPickOffSuccess.toString()}  <br/>

            PRA
            {player[0].pitchingRunsAllowed.toString()}  <br/>

            SAVES
            {player[0].pitchingSaves.toString()}  <br/>

            PKS
            {player[0].pitchingStrikeouts.toString()}  <br/>

            PSTRIKES
            {player[0].pitchingStrikes.toString()}  <br/>

            PWALKS
            {player[0].pitchingWalks.toString()}  <br/>

            PWILD
            {player[0].pitchingWildPitch.toString()}  <br/>

            WINS
            {player[0].pitchingWins.toString()}  <br/>

            PA
            {player[0].plateAppearances.toString()}  <br/>

            RBIS
            {player[0].rbis.toString()}  <br/>

            BRISP
            {player[0].risp.toString()}  <br/>

            BRISPF
            {player[0].rispFail.toString()}  <br/>

            BRISPS
            {player[0].rispSuccess.toString()}  <br/>

            RS
            {player[0].runsScored.toString()}  <br/>

            SAC
            {player[0].sacFly.toString()}  <br/>

            S
            {player[0].singles.toString()}  <br/>

            SB
            {player[0].stolenBases.toString()}  <br/>

            BKS
            {player[0].strikeOuts.toString()}  <br/>

            BSTRIKES
            {player[0].strikes.toString()}  <br/>

            BTAG
            {player[0].taggedOut.toString()}  <br/>

            TB
            {player[0].totalBases.toString()}  <br/>

            PTP
            {player[0].totalPitches.toString()}  <br/>

            TTT
            {player[0].triples.toString()}  <br/>



            

            
        </div>
    );
}

export default ViewPlayerProfile;