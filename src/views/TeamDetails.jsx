import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import { useParams } from "react-router-dom";

export default function TeamDetails() {

    const { id } = useParams();
    const { players } = useContext(DataContext);

    const teamPlayers = players.filter((player) => player.TeamID == id)

    return (
        <>
           <ul>
               {teamPlayers.map((player) => {

                    return (
                        <li key={player.ID}>
                            {player.TeamNumber} — {player.FullName}  {player.Position}
                        </li>);
                    })}
            </ul>
        </>
    )
}