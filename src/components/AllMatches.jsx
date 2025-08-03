import { DataContext } from "../context/DataContext"
import { useContext } from "react"
import { Link } from "react-router-dom";


export default function AllMatches() {

    const { matches, teams } = useContext(DataContext);

    return (
        <div className="all-matches-container">
            <h2>All Matches</h2>

            <ul className="match-list">
                {matches.map((match) => {
                    const teamAobj = teams.find((t) => t.ID === match.ATeamID);
                    const teamBobj = teams.find((t) => t.ID === match.BTeamID);

                    return (
                        <li key={match.ID} className="match-item">
                            <Link to={`/match/${match.ID}`} className="match-link">
                                <span className="match-date"> {match.Date}</span>
                                <span className="match-details">
                                    {teamAobj?.Name || "Team A"} vs {teamBobj?.Name || "Team B"} → {match.Score}
                                </span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}