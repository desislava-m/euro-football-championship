import MatchUploader from "../components/MatchUploader"
import { DataContext } from "../context/DataContext"
import { useContext } from "react"
import AllMatches from "../components/AllMatches";
import BracketComponent from "../components/Brackets";

export default function HomePage() {

    const { matches, teams, players, records } = useContext(DataContext);

    const allDataLoaded =
        matches.length > 0 &&
        teams.length > 0 &&
        players.length > 0 &&
        records.length > 0;

    return (
        <div className="homepage-contai">
            <h1>Euro 2024 Tournament Viewer</h1>

            <MatchUploader />

            {allDataLoaded ? (<>
                <AllMatches />
                <BracketComponent />
                </>
            ) : (
                <p>Please upload all four CSV files to see the tournament data.</p>
            )}
            
        </div>
    )
}