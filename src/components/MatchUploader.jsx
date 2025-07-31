import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "./DataContext";

export default function MatchUploader() {

const { setMatches } = useContext(DataContext)
const { setPlayers } = useContext(DataContext)
const { setRecords } = useContext(DataContext)
const { setTeams } = useContext(DataContext)
const [ error , setError ] = useState('')

{/* Example string : "ID, TeamNumber, Position, FullName, TeamID
1, 1, GK, Manuel Neuer, 1
2, 2, DF, Antonio Rüdiger, 1
3, 3, DF, David Raum, 1
4, 4, DF, Jonathan Tah, 1
5, 5, MF, Pascal Groß, 1
6, 6, DF, Joshua Kimmich, 1" */}


function parseCsv(text) {

    try {
        const lines = text.trim().split("\n");
        const headers = lines[0].split(",");
        const rows = lines.slice(1);
        const result = rows.map((row) => {
            const elementsInRow = row.split(",");
            const obj = {};
            headers.forEach((header, index) => {
                obj[header.trim()] = elementsInRow[index].trim();
            });

            return obj;
        });

        return result;

    } catch (err) {
        setError("Error parsing file")
    }
}

function handleFileUpload(e) {
  const file = e.target.files[0];
  const fileType = e.target.getAttribute("data-type");

  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    const parsed = parseCsv(event.target.result);
    
    switch (fileType) {
      case "players":
        setPlayers(parsed);
        break;
      case "teams":
        setTeams(parsed);
        break;
      case "matches":
        setMatches(parsed);
        break;
      case "records":
        setRecords(parsed);
        break;
      default:
        setError("Unknown file type");
    }
  };
  reader.readAsText(file);
}



  return (
    <>
      <div>
        <h2>Upload Euro 2024 Match File</h2>
        <input type="file" accept=".csv" data-type="matches" onChange={handleFileUpload} />
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>

      <div>
        <h2>Upload Euro 2024 Players File</h2>
        <input type="file" accept=".csv" data-type="players" onChange={handleFileUpload} />
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>

       <div>
        <h2>Upload Euro 2024 Records File</h2>
        <input type="file" accept=".csv" data-type="records" onChange={handleFileUpload} />
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>

       <div>
        <h2>Upload Euro 2024 Teams File</h2>
        <input type="file" accept=".csv" data-type="teams" onChange={handleFileUpload} />
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </>
  );


}