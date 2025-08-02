import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Formation from "../components/Formation";

export default function MatchDetails() {

    const { teams, matches, players, records } = useContext(DataContext);
    const { id } = useParams();


    if (!matches.length || !teams.length) {
         return <p>Loading match and team data...</p>;
    }

    const match = matches.find((match) => match.ID == id)
   

    if (!match) return <p>Match not found</p>;

    const teamA = teams.find(t => t.ID === match.ATeamID);
    const teamB = teams.find(t => t.ID === match.BTeamID);


    //Finding all players in the match
    const bothTeams =  records.filter((r) => r.MatchID === match.ID);
   
  //   const teamAPlayers = bothTeams.map((item) => {
  //   const player = players.find(p => p.ID === item.PlayerID);
  //   if (!player || player.TeamID !== match.ATeamID) return null;
  //   return player;
  // })
  // .filter(Boolean); // remove nulls

    
//Each team with obj players
const teamAPlayers = [];
const teamBPlayers = [];

bothTeams.forEach(record => {
  if (record.fromMinutes !== "0") return;

  const player = players.find(p => p.ID === record.PlayerID);

  if (player && player.TeamID === match.ATeamID) {
    teamAPlayers.push(player);
  } else if (player && player.TeamID === match.BTeamID) {
    teamBPlayers.push(player);
  }
});


console.log(teamAPlayers, teamBPlayers);


const GKteamA = teamAPlayers.filter((player) => player.Position === "GK");
const DFteamA = teamAPlayers.filter((player) => player.Position === "DF");
const MFteamA = teamAPlayers.filter((player) => player.Position === "MF");
const FWteamA = teamAPlayers.filter((player) => player.Position === "FW");

const GKteamB = teamBPlayers.filter((player) => player.Position === "GK");
const DFteamB = teamBPlayers.filter((player) => player.Position === "DF");
const MFteamB = teamBPlayers.filter((player) => player.Position === "MF");
const FWteamB = teamBPlayers.filter((player) => player.Position === "FW");


   return (
    <>
      <h2>Match Details</h2>
      <p>{teamA?.Name} vs {teamB?.Name}</p>
      <p>Score: {match.Score}</p>
      <div className="formations-container">
      <Formation teamName ={teamA.Name} GK = {GKteamA} DF = {DFteamA} MF = {MFteamA} FW = {FWteamA} />
      <Formation teamName ={teamB.Name} GK = {GKteamB} DF = {DFteamB} MF = {MFteamB} FW = {FWteamB} />
      </div>
    </>
  );
}