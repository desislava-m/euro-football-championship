import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "./DataContext";

export default function MatchUploader() {

const { matches, setMatches } = useContext(DataContext)
const { players, setPlayers } = useContext(DataContext)
const { records, setRecords } = useContext(DataContext)
const { setTeams } = useContext(DataContext)
const [ error , setError ] = useState('')



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