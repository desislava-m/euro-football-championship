import { DataContext } from "../components/DataContext"
import { useContext } from "react"
import { Link } from "react-router-dom";


export default function AllMatches() {

    const { matches, teams } = useContext(DataContext);

    return (
                <div>
                    <h2>All Matches</h2>

                    <ul>
                        {matches.map((match) => {
                        const teamAobj = teams.find((t) => t.ID === match.ATeamID);
                        const teamBobj = teams.find((t) => t.ID === match.BTeamID);


                        return (
                            <li key={match.ID}>
                            <Link to={`/match/${match.ID}`}>
                                📅 {match.Date} — {teamAobj?.Name || "Team A"} vs {teamBobj?.Name || "Team B"}→ {match.Score}
                            </Link>
                            </li>
                        );
                        })}
                     </ul>
                </div>
    )
}