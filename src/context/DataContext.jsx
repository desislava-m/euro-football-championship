import { createContext, useEffect } from "react";
import { useState } from "react";

export const DataContext = createContext();

export default function DataProvider({ children }) {
    
    const [ matches, setMatches ] = useState([])
    const [ players, setPlayers ] = useState([])
    const [ records, setRecords] = useState([])
    const [ teams, setTeams ] = useState([])

    useEffect(() => {
            const storedMatches = localStorage.getItem("matches");
            const storedTeams = localStorage.getItem("teams");
            const storedPlayers = localStorage.getItem("players");
            const storedRecords = localStorage.getItem("records");

            if (storedMatches) setMatches(JSON.parse(storedMatches));
            if (storedTeams) setTeams(JSON.parse(storedTeams));
            if (storedPlayers) setPlayers(JSON.parse(storedPlayers));
            if (storedRecords) setRecords(JSON.parse(storedRecords));
            }, []);

    return (
        <DataContext.Provider value = {{
            matches, setMatches,
            players, setPlayers,
            teams, setTeams,
            records, setRecords
            }}>
            {children}
        </DataContext.Provider>
    )
}