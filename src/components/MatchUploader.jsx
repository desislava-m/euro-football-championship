import { useState } from "react";

export default function MatchUploader() {

const [ matches, setMatches ] = useState([])
const [ error , setError ] = useState('')

{/* "ID, TeamNumber, Position, FullName, TeamID
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

        setMatches(result);

    } catch (err) {
        setError("Error parsing file")
    }
}

function handleFileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      parseCsv(event.target.result);
    };
    reader.readAsText(file);
  }


  return (
    <div>
      <h2>Upload Euro 2024 Match File</h2>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {matches.map((match, index) => (
          <li key={index}>
            {match.date}: {match.home_team} {match.home_score} - {match.away_score} {match.away_team}
          </li>
        ))}
      </ul>
    </div>
  );


}