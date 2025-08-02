import { Link } from "react-router-dom"
export default function Formation({ teamID, teamName, GK, DF, MF, FW }) {



    return(
        <div className="formation">
            <h3><Link to={`/team/${teamID}`}>{teamName}</Link></h3>

            <div className="row">{FW.map(p => <div key={p.ID}>{p.FullName}</div>)}</div>
            <div className="row">{MF.map(p => <div key={p.ID}>{p.FullName}</div>)}</div>
            <div className="row">{DF.map(p => <div key={p.ID}>{p.FullName}</div>)}</div>
            <div className="row">{GK.map(p => <div key={p.ID}>{p.FullName}</div>)}</div>
        </div>
    )
}