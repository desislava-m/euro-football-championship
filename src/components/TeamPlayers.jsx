export default function TeamPlayers({ team }) {
    return (
        <div className="players-roster">
            <ul className="players-table">
                <li className="players-header">
                    <span>No</span>
                    <span>Player</span>
                    <span>Position</span>
                </li>
                {team.map((player) => (
                    <li key={player.ID} className="players-row">
                        <span>{player.TeamNumber}</span>
                        <span>{player.FullName}</span>
                        <span>{player.Position}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
