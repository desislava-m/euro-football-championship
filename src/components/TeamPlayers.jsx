export default function TeamPlayers({ team }) {


    return (
        <>
            <ul>
               {team.map((player) => {

                    return (
                        <li key={player.ID}>
                            {player.TeamNumber} — {player.FullName}  {player.Position}
                        </li>);
                    })}
            </ul>
        </>
    )
}