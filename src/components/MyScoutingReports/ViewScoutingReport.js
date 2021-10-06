import React from "react";
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";

// Component or hook imports
import AddScoutingReportNote from "./AddScoutingReportNote";
import ViewScoutingReportNotes from "./ViewScoutingReportNotes";
import './ViewScoutingReport.css';

// displays a scouting report
const ViewScoutingReport = (props) => {
    // get player details
    const scoutingReport = props.location.state.scoutingReport;
    const player = props.location.state.player;

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

    // display report if player details exists
    if (scoutingReport != null) {
        return (
            <div id="pages">
                <div>
                    <h3 id="pagetitle">Scouted Player: {scoutingReport.firstName} {scoutingReport.lastName} </h3>

                    <Link id="reportlink" class="ms-0" to={{
                    pathname: "/myplayers/playerprofile/playerscoutingreport",
                    state: {
                        player: player,
                    }
                    }}>Go Back</Link>

                    <p id="game">{scoutingReport.playerBaseballTeamName} VS. {scoutingReport.opponentTeam}</p>

                    <p id="notes">Notes:
                    <br/>{scoutingReport.scoutingReportNotesBody}</p>

                </div>

                {/* Pitching Stats Accordion */}
                <div class="accordion" id="oneaccordion">
                    <div class="accordion-item">
                        <h4 id="statsheader">
                            <button id="statsheader" class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Pitching Stats
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
                                        <td>{scoutingReport.pitcherTotalPitches}</td>
                                        <td>{scoutingReport.pitcherInningsPitched}</td>
                                        <td>{scoutingReport.pitcherWin}</td>
                                        <td>{scoutingReport.pitcherLoss}</td>
                                        <td>{scoutingReport.pitcherSave}</td>
                                        <td>{scoutingReport.pitcherBlownSave}</td>
                                        <td>{scoutingReport.careerPitchingCompleteGame}</td>
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
                                        <td>{scoutingReport.pitcherTotalBalls}</td>
                                        <td>{scoutingReport.pitcherWalksGiven}</td>
                                        <td>{scoutingReport.pitcherTotalStrikes}</td>
                                        <td>{scoutingReport.pitcherTotalStrikeouts}</td>
                                        <td>{scoutingReport.pitcherFoulBallsHit}</td>
                                        <td>{scoutingReport.pitcherHitBatter}</td>
                                        <td>{scoutingReport.pitcherWildPitch}</td>
                                    </tr>
                                </table>

                                <table>
                                    <tr>
                                        <th>POA</th>
                                        <th>POS</th>
                                        <th>BF</th>
                                    </tr>
                                    <tr>
                                        <td>{scoutingReport.pitcherPickOffAttempts}</td>
                                        <td>{scoutingReport.pitcherPickOfSuccess}</td>
                                        <td>{scoutingReport.pitcherNumberOfBattersFaced}</td>
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
                                    <td>{scoutingReport.pitcherHitsAllowed}</td>
                                    <td>{scoutingReport.pitcherPitchingHitSingle}</td>
                                    <td>{scoutingReport.pitcherHitDouble}</td>
                                    <td>{scoutingReport.pitcherHitTriple}</td>
                                    <td>{scoutingReport.pitcherHomerunsAllowed}</td>
                                    </tr>
                                </table>

                                <table>
                                    <tr>
                                        <th>GO</th>
                                        <th>FO</th>
                                        <th>RA</th>
                                    </tr>
                                    <tr>
                                    <td>{scoutingReport.pitcherGroundOuts}</td>
                                    <td>{scoutingReport.pitcherFlyouts}</td>
                                    <td>{scoutingReport.pitcherRunsAllowed}</td>
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
                                    <td>{scoutingReport.batterPlateAppearances}</td>
                                    <td>{scoutingReport.batterOnBaseCount}</td>
                                    <td>{scoutingReport.batterHitByPitch}</td>
                                    <td>{scoutingReport.batterBalls}</td>
                                    <td>{scoutingReport.batterBaseOnBalls}</td>
                                    <td>{scoutingReport.batterStrikes}</td>
                                    <td>{scoutingReport.batterStrikeouts}</td>
                                    <td>{scoutingReport.batterFoulBalls}</td>
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
                                        <td>{scoutingReport.batterHit}</td>
                                        <td>{scoutingReport.batterSingle}</td>
                                        <td>{scoutingReport.batterDouble}</td>
                                        <td>{scoutingReport.batterTriple}</td>
                                        <td>{scoutingReport.batterHomerun}</td>
                                        <td>{scoutingReport.batterSacFly}</td>
                                        <td>{scoutingReport.battterRbi}</td>
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
                                        <td>{scoutingReport.batterGroundOut}</td>
                                        <td>{scoutingReport.batterOutByDoublePlay}</td>
                                        <td>{scoutingReport.batterOutByTriplePlay}</td>
                                        <td>{scoutingReport.batterFlyout}</td>
                                        <td>{scoutingReport.batterRisp}</td>
                                        <td>{scoutingReport.batterRispSuccess}</td>
                                        <td>{scoutingReport.batterRispFail}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Baserunning Stats Accordion */}
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
                                        <td>{scoutingReport.runnerAdvancedToSecond}</td>
                                        <td>{scoutingReport.runnderAdvancedToThird}</td>
                                        <td>{scoutingReport.runnerRisp}</td>
                                        <td>{scoutingReport.runnerRunScored}</td>
                                        <td>{scoutingReport.runnerTotalBases}</td>
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
                                        <td>{scoutingReport.runnerStolenBases}</td>
                                        <td>{scoutingReport.runnerCaughtStealing}</td>
                                        <td>{scoutingReport.runnerPickedOff}</td>
                                        <td>{scoutingReport.runnerForcedOut}</td>
                                        <td>{scoutingReport.runnerTaggedOut}</td>
                                    </tr>
                                </table>
                                
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <br/>
                    <h4 id="game">Report Notes</h4>
                    <AddScoutingReportNote scout={scout} scoutingReport={scoutingReport} />


                </div>
                <ViewScoutingReportNotes reportId={scoutingReport.playerScoutingReportId} />
                <br/>
                <Link id="reportlink" class='ms-0' to={{
                    pathname: "/myplayers/playerprofile/playerscoutingreport",
                    state: {
                        player: player,
                    }
                    }}>Go Back</Link>
            </div>
        
        )
    } else {
        return (
            <div id="pages">
                <p>No Report</p>
            </div>
        )
    }
}

export default ViewScoutingReport;