import { useContext } from "react"
import { DataContext } from "../context/DataContext"

export default function TeamDetails() {

    const { players } = useContext(DataContext);

    return (
        <>
           <ul>
               {players.map((player) => {

                    return (
                        <li key={player.ID}>
                            {player.TeamNumber} — {player.FullName}  {player.Position}
                        </li>);
                    })}
            </ul>
        </>
    )
}