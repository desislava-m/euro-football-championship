import { createContext } from "react";
import { useState } from "react";

export const DataContext = createContext();

export default function DataProvider({ children }) {
    
    const [ matches, setMatches ] = useState([])
    const [ players, setPlayers ] = useState([])
    const [ records, setRecords] = useState([])
    const [ teams, setTeams ] = useState([])

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