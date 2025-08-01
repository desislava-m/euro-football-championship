import MatchUploader from "../components/MatchUploader"
import { DataContext } from "../components/DataContext"
import { useContext } from "react"

export default function HomePage() {

    const { matches, teams, players, records } = useContext(DataContext);

    const allDataLoaded =
        matches.length > 0 &&
        teams.length > 0 &&
        players.length > 0 &&
        records.length > 0;

    return (
        <div>
            <h1>Euro 2024 Tournament Viewer</h1>

            <MatchUploader />

            {!allDataLoaded ? (
                <p style={{ marginTop: "2rem" }}>
                    Please upload all four CSV files to see the tournament data.
                </p>
            ) : (
                <div>
                    <h2>All Matches</h2>
                </div>
            )}
        </div>
    )
}