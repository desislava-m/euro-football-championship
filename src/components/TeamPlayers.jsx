export default function TeamPlayers({ team }) {


    return (
        <div className="players-roster">
            <ul>
                <li>No — Player Position</li>
               {team.map((player) => {

                    return (
                        <li key={player.ID}>
                            {player.TeamNumber} — {player.FullName}  {player.Position}
                        </li>);
                    })}
            </ul>
        </div>
    )
}