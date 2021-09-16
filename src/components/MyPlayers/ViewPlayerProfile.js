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

    if (player !== undefined) {
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
            <br/>



            A2nd
            {player[0].careeradvancedToSecond}  <br/>

            A3rd
            {player[0].careeradvancedToThird}  <br/>

            BT
            {player[0].careerballs}  <br/>

            BoB
            {player[0].careerbaseOnBalls}  <br/>

            CS
            {player[0].careercaughtStealing}  <br/>

            DD
            {player[0].careerdoubles}  <br/>

            FlyO
            {player[0].careerflyout}  <br/>

            FO
            {player[0].careerforcedOut}  <br/>

            FB
            {player[0].careerfoulBalls}  <br/>

            GIDP
            {player[0].careergroundOutDoublePlay}  <br/>

            GOUT
            {player[0].careergroundOuts}  <br/>

            HBP
            {player[0].careerhitByPitch}  <br/>

            Hits
            {player[0].careerhits}  <br/>

            HRs
            {player[0].careerhomeruns}  <br/>

            ISP
            {player[0].careerisp}  <br/>

            GOB
            {player[0].careeronBaseCount}  <br/>

            OBTP
            {player[0].careeroutByTriplePlay}  <br/>

            PO
            {player[0].careerpickedOff}  <br/>

            BALLS
            {player[0].careerpitchingBalls}  <br/>

            BS
            {player[0].careerpitchingBlownSaves}  <br/>

            CG
            {player[0].careerpitchingCompleteGames}  <br/>


            PFLYOUT
            {player[0].careerpitchingFlyout}  <br/>

            PFB
            {player[0].careerpitchingFoulBalls}  <br/>

            PGOUT
            {player[0].careerpitchingGroundOuts}  <br/>

            PHB
            {player[0].careerpitchingHitBatter}  <br/>

            PDOUB
            {player[0].careerpitchingHitDoubles}  <br/>

            PSINGL
            {player[0].careerpitchingHitSingle}  <br/>

            PTRIP
            {player[0].careerpitchingHitTriples}  <br/>

            PHA
            {player[0].careerpitchingHitsAllowed}  <br/>

            PHRA
            {player[0].careerpitchingHomeRunsAllowed}  <br/>

            PIP
            {player[0].careerpitchingInningsPitched}  <br/>

            LOSS
            {player[0].careerpitchingLosses}  <br/>

            PBF
            {player[0].careerpitchingNumberOfBattersFaced}  <br/>

            POFA
            {player[0].careerpitchingPickOffAttempt}  <br/>

            POFS
            {player[0].careerpitchingPickOffSuccess}  <br/>

            PRA
            {player[0].careerpitchingRunsAllowed}  <br/>

            SAVES
            {player[0].careerpitchingSaves}  <br/>

            PKS
            {player[0].careerpitchingStrikeouts}  <br/>

            PSTRIKES
            {player[0].careerpitchingStrikes}  <br/>

            PWALKS
            {player[0].careerpitchingWalks}  <br/>

            PWILD
            {player[0].careerpitchingWildPitch}  <br/>

            WINS
            {player[0].careerpitchingWins}  <br/>

            PA
            {player[0].careerplateAppearances}  <br/>

            RBIS
            {player[0].careerrbis}  <br/>

            BRISP
            {player[0].careerrisp}  <br/>

            BRISPF
            {player[0].careerrispFail}  <br/>

            BRISPS
            {player[0].careerrispSuccess}  <br/>

            RS
            {player[0].careerrunsScored}  <br/>

            SAC
            {player[0].careersacFly}  <br/>

            S
            {player[0].careersingles}  <br/>

            SB
            {player[0].careerstolenBases}  <br/>

            BKS
            {player[0].careerstrikeOuts}  <br/>

            BSTRIKES
            {player[0].careerstrikes}  <br/>

            BTAG
            {player[0].careertaggedOut}  <br/>

            TB
            {player[0].careertotalBases}  <br/>

            PTP
            {player[0].careertotalPitches}  <br/>

            TTT
            {player[0].careertriples}  <br/>





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
            {/* {player[0].playerPositionPrimaryName}
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
            {player[0].advancedToSecond}  <br/>

            A3rd
            {player[0].advancedToThird}  <br/>

            BT
            {player[0].balls}  <br/>

            BoB
            {player[0].baseOnBalls}  <br/>

            CS
            {player[0].caughtStealing}  <br/>

            DD
            {player[0].doubles}  <br/>

            FlyO
            {player[0].flyout}  <br/>

            FO
            {player[0].forcedOut}  <br/>

            FB
            {player[0].foulBalls}  <br/>

            GIDP
            {player[0].groundOutDoublePlay}  <br/>

            GOUT
            {player[0].groundOuts}  <br/>

            HBP
            {player[0].hitByPitch}  <br/>

            Hits
            {player[0].hits}  <br/>

            HRs
            {player[0].homeruns}  <br/>

            ISP
            {player[0].isp}  <br/>

            GOB
            {player[0].onBaseCount}  <br/>

            OBTP
            {player[0].outByTriplePlay}  <br/>

            PO
            {player[0].pickedOff}  <br/>

            BALLS
            {player[0].pitchingBalls}  <br/>

            BS
            {player[0].pitchingBlownSaves}  <br/>

            CG
            {player[0].pitchingCompleteGames}  <br/>


            PFLYOUT
            {player[0].pitchingFlyout}  <br/>

            PFB
            {player[0].pitchingFoulBalls}  <br/>

            PGOUT
            {player[0].pitchingGroundOuts}  <br/>

            PHB
            {player[0].pitchingHitBatter}  <br/>

            PDOUB
            {player[0].pitchingHitDoubles}  <br/>

            PSINGL
            {player[0].pitchingHitSingle}  <br/>

            PTRIP
            {player[0].pitchingHitTriples}  <br/>

            PHA
            {player[0].pitchingHitsAllowed}  <br/>

            PHRA
            {player[0].pitchingHomeRunsAllowed}  <br/>

            PIP
            {player[0].pitchingInningsPitched}  <br/>

            LOSS
            {player[0].pitchingLosses}  <br/>

            PBF
            {player[0].pitchingNumberOfBattersFaced}  <br/>

            POFA
            {player[0].pitchingPickOffAttempt}  <br/>

            POFS
            {player[0].pitchingPickOffSuccess}  <br/>

            PRA
            {player[0].pitchingRunsAllowed}  <br/>

            SAVES
            {player[0].pitchingSaves}  <br/>

            PKS
            {player[0].pitchingStrikeouts}  <br/>

            PSTRIKES
            {player[0].pitchingStrikes}  <br/>

            PWALKS
            {player[0].pitchingWalks}  <br/>

            PWILD
            {player[0].pitchingWildPitch}  <br/>

            WINS
            {player[0].pitchingWins}  <br/>

            PA
            {player[0].plateAppearances}  <br/>

            RBIS
            {player[0].rbis}  <br/>

            BRISP
            {player[0].risp}  <br/>

            BRISPF
            {player[0].rispFail}  <br/>

            BRISPS
            {player[0].rispSuccess}  <br/>

            RS
            {player[0].runsScored}  <br/>

            SAC
            {player[0].sacFly}  <br/>

            S
            {player[0].singles}  <br/>

            SB
            {player[0].stolenBases}  <br/>

            BKS
            {player[0].strikeOuts}  <br/>

            BSTRIKES
            {player[0].strikes}  <br/>

            BTAG
            {player[0].taggedOut}  <br/>

            TB
            {player[0].totalBases}  <br/>

            PTP
            {player[0].totalPitches}  <br/>

            TTT
            {player[0].triples}  <br/> */



            

            
     /*    </div>
        );  */


export default ViewPlayerProfile;