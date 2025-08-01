import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function MatchDetails() {

    const { teams, matches } = useContext(DataContext);
    const { id } = useParams();


    if (!matches.length || !teams.length) {
         return <p>Loading match and team data...</p>;
    }

    const match = matches.find((match) => match.ID == id)
   

    if (!match) return <p>Match not found</p>;

    const teamA = teams.find(t => t.ID === match.ATeamID);
    const teamB = teams.find(t => t.ID === match.BTeamID);

   return (
    <>
      <h2>Match Details</h2>
      <p>{teamA?.Name} vs {teamB?.Name}</p>
      <p>Score: {match.Score}</p>
    </>
  );
}