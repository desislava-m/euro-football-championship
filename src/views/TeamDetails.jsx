import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import { useParams } from "react-router-dom";
import TeamPlayers from "../components/TeamPlayers";

export default function TeamDetails() {

    const { id } = useParams();
    const { players } = useContext(DataContext);

    const teamPlayers = players.filter((player) => player.TeamID == id)

    return (
        <>
           <TeamPlayers team={teamPlayers}/>
        </>
    )
}