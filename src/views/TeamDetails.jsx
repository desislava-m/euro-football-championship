import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import { useParams } from "react-router-dom";
import TeamPlayers from "../components/TeamPlayers";

export default function TeamDetails() {

    const { id } = useParams();
    const { players, teams } = useContext(DataContext);

    const teamPlayers = players.filter((player) => player.TeamID == id);
    const teamObj = teams.find((team) => team.ID == id);

    if (!teamObj) {
        return <p>Loading team data...</p>;
    }
    
    return (
        <div className="team-roster">
            <h2>{teamObj.Name}</h2>
           <TeamPlayers team={teamPlayers}/>
        </div>
    )
}