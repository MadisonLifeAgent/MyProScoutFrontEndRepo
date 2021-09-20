import React, { useState, useParams, useLocation } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

// Component or hook imports
import './ViewPlayerProfile.css';
import PlayerProfileScoutingReports from "./PlayerProfileScoutingReports";

// This component allows scouts to edit a player's details
const ViewPlayerProfile = (props) => {
    // get player details
    const player = props.location.state.player;

    // display if player details exists
    if (player.firstName) {
        return (
            <div id="pages">
                <p id="name">{player.firstName} {player.lastName} - {player.playerPositionPrimaryName}
</p>
                <img id="playerprofileimage" src={player.playerImageUrl} alt={'no pic of ' + player.firstName + ' ' + player.lastName} />
                <p id="notes">
                    <label id="profilelabel">Throws: {player.playerThrowingHandednessName} / Bats: {player.playerBattingHandednessName}</label><br />


                    <label id="profilelabel">Player Type: {player.playerTypeName}
                        </label><br />

                    <label id="profilelabel">Team: {player.baseballTeamName}
                        </label><br />

                    <label id="profilelabel">Secondary Position: {player.playerPositionSecondaryName}
                        </label><br />

                    <label id="profilelabel">Turned Pro: {player.yearTurnedPro}
                        </label><br />

                    <label id="profilelabel">Age: {player.age}
                        </label><br />

                    <label id="profilelabel">Height: {player.height}
                        </label><br />

                    <label id="profilelabel">Weight: {player.weight} lbs.
                        </label><br />
                </p>

                <Link id="newreportbutton" to={{
                    pathname: "/myplayers/playerprofile/playerscoutingreport",
                    state: {
                        player: player,
                    }
                }}>View Scouting Reports</Link>
                
                {/* Total Pitching Stats Accordion */}
                <div class="accordion mt-4" id="oneaccordion">
                    <div class="accordion-item">
                        <h4 id="statsheader">
                            <button id="statsheader" class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Career Total Pitching Stats
                            </button>
                        </h4>
                        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body" id="box">
                            <table>
                                    <tr>
                                        <th>TP</th>
                                        <th>Innings</th>
                                        <th>W</th>
                                        <th>L</th>
                                        <th>S</th>
                                        <th>BS</th>
                                        <th>CG</th>
                                    </tr>
                                    <tr>
                                        <td>{player.careerTotalPitches}</td>
                                        <td>{player.careerPitchingInningsPitched}</td>
                                        <td>{player.careerPitchingWins}</td>
                                        <td>{player.careerPitchingLosses}</td>
                                        <td>{player.careerPitchingSaves}</td>
                                        <td>{player.careerPitchingBlownSaves}</td>
                                        <td>{player.careerPitchingCompleteGames}</td>
                                    </tr>
                                </table>

                                <table>
                                    <tr>
                                        <th>Ba</th>
                                        <th>Wa</th>
                                        <th>Str</th>
                                        <th>K</th>
                                        <th>FB</th>
                                        <th>HitB</th>
                                        <th>WP</th>
                                    </tr>
                                    <tr>
                                        <td>{player.careerPitchingBalls}</td>
                                        <td>{player.careerPitchingWalks}</td>
                                        <td>{player.careerPitchingStrikes}</td>
                                        <td>{player.careerPitchingStrikeouts}</td>
                                        <td>{player.careerPitchingFoulBalls}</td>
                                        <td>{player.careerPitchingHitBatter}</td>
                                        <td>{player.careerPitchingWildPitch}</td>
                                    </tr>
                                </table>

                                <table>
                                    <tr>
                                        <th>POA</th>
                                        <th>POS</th>
                                        <th>BF</th>
                                    </tr>
                                    <tr>
                                        <td>{player.careerPitchingPickOffAttempt}</td>
                                        <td>{player.careerPitchingPickOffSuccess}</td>
                                        <td>{player.careerPitchingNumberOfBattersFaced}</td>
                                    </tr>
                                </table>

                                <table>
                                    <tr>
                                        <th>HA</th>
                                        <th>Sing</th>
                                        <th>DB</th>
                                        <th>TR</th>
                                        <th>HRA</th>
                                    </tr>
                                    <tr>
                                        <td>{player.careerPitchingHitsAllowed}</td>
                                        <td>{player.careerPitchingHitSingle}</td>
                                        <td>{player.careerPitchingHitDoubles}</td>
                                        <td>{player.careerPitchingHitTriples}</td>
                                        <td>{player.careerPitchingHomeRunsAllowed}</td>
                                    </tr>
                                </table>

                                <table>
                                    <tr>
                                        <th>GO</th>
                                        <th>FO</th>
                                        <th>RA</th>
                                    </tr>
                                    <tr>
                                        <td>{player.careerPitchingGroundOuts}</td>
                                        <td>{player.careerPitchingFlyout}</td>
                                        <td>{player.careerPitchingRunsAllowed}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Batting Stats Accordion */}
                <div class="accordion" id="oneaccordion">
                    <div class="accordion-item">
                        <h4 id="statsheader">
                            <button id="statsheader" class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            Batting Stats
                            </button>
                        </h4>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body" id="box">
                            <table>
                                    <tr>
                                        <th>PA</th>
                                        <th>GOB</th>
                                        <th>HBP</th>
                                        <th>BT</th>
                                        <th>BOB</th>
                                        <th>S</th>
                                        <th>K</th>
                                        <th>FB</th>
                                    </tr>
                                    <tr>
                                        <td>{player.careerPlateAppearances}</td>
                                        <td>{player.careerOnBaseCount}</td>
                                        <td>{player.careerHitByPitch}</td>
                                        <td>{player.careerBalls}</td>
                                        <td>{player.careerBaseOnBalls}</td>
                                        <td>{player.careerStrikes}</td>
                                        <td>{player.careerStrikeOuts}</td>
                                        <td>{player.careerFoulBalls}</td>
                                    </tr>
                                </table>

                                <table>
                                    <tr>
                                        <th>HIT</th>
                                        <th>SING</th>
                                        <th>DB</th>
                                        <th>TR</th>
                                        <th>HR</th>
                                        <th>SF</th>
                                        <th>RBI</th>
                                    </tr>
                                    <tr>
                                        <td>{player.careerHits}</td>
                                        <td>{player.careerSingles}</td>
                                        <td>{player.careerDoubles}</td>
                                        <td>{player.careerTriples}</td>
                                        <td>{player.careerHomeruns}</td>
                                        <td>{player.careerSacFly}</td>
                                        <td>{player.careerRbis}</td>
                                    </tr>
                                </table>
                                <table>
                                    <tr>
                                        <th>GO</th>
                                        <th>DP</th>
                                        <th>TP</th>
                                        <th>FLO</th>
                                        <th>RISP</th>
                                        <th>RISPS</th>
                                        <th>RISPF</th>
                                    </tr>
                                    <tr>
                                        <td>{player.careerGroundOuts}</td>
                                        <td>{player.careerGroundOutDoublePlay}</td>
                                        <td>{player.careerOutByTriplePlay}</td>
                                        <td>{player.careerFlyout}</td>
                                        <td>{player.careerRisp}</td>
                                        <td>{player.careerRispSuccess}</td>
                                        <td>{player.careerRispFail}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Baserunning stats Accordion */}
                <div class="accordion" id="oneaccordion">
                    <div class="accordion-item">
                        <h4 id="statsheader">
                            <button id="statsheader" class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                Baserunning Stats
                            </button>
                        </h4>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body" id="box">
                            <table>
                                    <tr>
                                        <th>A2</th>
                                        <th>A3</th>
                                        <th>ISP</th>
                                        <th>RS</th>
                                        <th>TB</th>
                                    </tr>
                                    <tr>
                                        <td>{player.careerAdvancedToSecond}</td>
                                        <td>{player.careerAdvancedToThird}</td>
                                        <td>{player.careerRisp}</td>
                                        <td>{player.careerRunsScored}</td>
                                        <td>{player.careerTotalBases}</td>
                                    </tr>
                                </table>
                                <table>
                                    <tr>
                                        <th>SB</th>
                                        <th>CS</th>
                                        <th>PO</th>
                                        <th>FRO</th>
                                        <th>TAO</th>
                                    </tr>
                                    <tr>
                                        <td>{player.careerStolenBases}</td>
                                        <td>{player.careerCaughtStealing}</td>
                                        <td>{player.careerPickedOff}</td>
                                        <td>{player.careerForcedOut}</td>
                                        <td>{player.careerTaggedOut}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div id="pages">
                <p id="pagetitle">No Player Details</p>
            </div>
        )
    }
}


export default ViewPlayerProfile;