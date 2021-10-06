import React from "react";
import { Link } from 'react-router-dom';


// component imports
import './ReviewScoutingReport.css';
import useGetPlayerScoutingReportById from "../../hooks/useGetScoutingReportById";

// review scouting report page
const ReviewScoutingReport = (props) => {
    // get the scouting reportId
    const scoutingReportId = props.location.state.scoutingReportId;

    // query the data base again for the report since it was saved    
    const newScoutingReport = useGetPlayerScoutingReportById(scoutingReportId);

    // render the review here
    return (
        <div id="pages">           
            <div>
                <p id="pagetitle">Report Summary</p>
            <Link id="newnotebutton" to={{
                    pathname: '/myscoutingreports/newreportsaved',
                    state: {
                        scoutingReport: newScoutingReport,
                    }
                }}>Save Report</Link>

            </div>

            <p id="info">Player: {newScoutingReport[0].firstName} {newScoutingReport[0].lastName}</p>
            <p id="notes">{newScoutingReport[0].playerBaseballTeamName} VS. {newScoutingReport[0].opponentTeam}
            </p>

            <p id="notes">Scouting Reports Notes<br/>{newScoutingReport[0].scoutingReportNotesBody}</p>

            {/* player stats */}

                {/* Total Pitching Stats Accordion */}
                <div class="accordion" id="oneaccordion">
                    <div class="accordion-item">
                        <h4 id="statsheader">
                            <button id="statsheader" class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Total Pitching Stats
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
                                        <td>{newScoutingReport[0].pitcherTotalPitches}</td>
                                        <td>{newScoutingReport[0].pitcherInningsPitched}</td>
                                        <td>{newScoutingReport[0].pitcherWin}</td>
                                        <td>{newScoutingReport[0].pitcherLoss}</td>
                                        <td>{newScoutingReport[0].pitcherSave}</td>
                                        <td>{newScoutingReport[0].pitcherBlownSave}</td>
                                        <td>{newScoutingReport[0].careerPitchingCompleteGame}</td>
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
                                        <td>{newScoutingReport[0].pitcherTotalBalls}</td>
                                        <td>{newScoutingReport[0].pitcherWalksGiven}</td>
                                        <td>{newScoutingReport[0].pitcherTotalStrikes}</td>
                                        <td>{newScoutingReport[0].pitcherTotalStrikeouts}</td>
                                        <td>{newScoutingReport[0].pitcherFoulBallsHit}</td>
                                        <td>{newScoutingReport[0].pitcherHitBatter}</td>
                                        <td>{newScoutingReport[0].pitcherWildPitch}</td>
                                    </tr>
                                </table>

                                <table>
                                    <tr>
                                        <th>POA</th>
                                        <th>POS</th>
                                        <th>BF</th>
                                    </tr>
                                    <tr>
                                        <td>{newScoutingReport[0].pitcherPickOffAttempts}</td>
                                        <td>{newScoutingReport[0].pitcherPickOfSuccess}</td>
                                        <td>{newScoutingReport[0].pitcherNumberOfBattersFaced}</td>
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
                                        <td>{newScoutingReport[0].pitcherHitsAllowed}</td>
                                        <td>{newScoutingReport[0].pitcherPitchingHitSingle}</td>
                                        <td>{newScoutingReport[0].pitcherHitDouble}</td>
                                        <td>{newScoutingReport[0].pitcherHitTriple}</td>
                                        <td>{newScoutingReport[0].pitcherHomerunsAllowed}</td>
                                    </tr>
                                </table>

                                <table>
                                    <tr>
                                        <th>GO</th>
                                        <th>FO</th>
                                        <th>RA</th>
                                    </tr>
                                    <tr>
                                        <td>{newScoutingReport[0].pitcherGroundOuts}</td>
                                        <td>{newScoutingReport[0].pitcherFlyouts}</td>
                                        <td>{newScoutingReport[0].pitcherRunsAllowed}</td>
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
                                        <td>{newScoutingReport[0].batterPlateAppearances}</td>
                                        <td>{newScoutingReport[0].batterOnBaseCount}</td>
                                        <td>{newScoutingReport[0].batterHitByPitch}</td>
                                        <td>{newScoutingReport[0].batterBalls}</td>
                                        <td>{newScoutingReport[0].batterBaseOnBalls}</td>
                                        <td>{newScoutingReport[0].batterStrikes}</td>
                                        <td>{newScoutingReport[0].batterStrikeouts}</td>
                                        <td>{newScoutingReport[0].batterFoulBalls}</td>
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
                                        <td>{newScoutingReport[0].batterHit}</td>
                                        <td>{newScoutingReport[0].batterSingle}</td>
                                        <td>{newScoutingReport[0].batterDouble}</td>
                                        <td>{newScoutingReport[0].batterTriple}</td>
                                        <td>{newScoutingReport[0].batterHomerun}</td>
                                        <td>{newScoutingReport[0].batterSacFly}</td>
                                        <td>{newScoutingReport[0].battterRbi}</td>
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
                                        <td>{newScoutingReport[0].batterGroundOut}</td>
                                        <td>{newScoutingReport[0].batterOutByDoublePlay}</td>
                                        <td>{newScoutingReport[0].batterOutByTriplePlay}</td>
                                        <td>{newScoutingReport[0].batterFlyout}</td>
                                        <td>{newScoutingReport[0].batterRisp}</td>
                                        <td>{newScoutingReport[0].batterRispSuccess}</td>
                                        <td>{newScoutingReport[0].batterRispFail}</td>
                                    </tr>
                                </table>                            </div>
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
                                        <td>{newScoutingReport[0].runnerAdvancedToSecond}</td>
                                        <td>{newScoutingReport[0].runnderAdvancedToThird}</td>
                                        <td>{newScoutingReport[0].runnerRisp}</td>
                                        <td>{newScoutingReport[0].runnerRunScored}</td>
                                        <td>{newScoutingReport[0].runnerTotalBases}</td>
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
                                        <td>{newScoutingReport[0].runnerStolenBases}</td>
                                        <td>{newScoutingReport[0].runnerCaughtStealing}</td>
                                        <td>{newScoutingReport[0].runnerPickedOff}</td>
                                        <td>{newScoutingReport[0].runnerForcedOut}</td>
                                        <td>{newScoutingReport[0].runnerTaggedOut}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>           
        </div>
    )
}

export default ReviewScoutingReport;