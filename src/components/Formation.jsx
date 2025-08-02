export default function Formation({ teamName, GK, DF, MF, FW }) {



    return(
        <div className="formation">
            <h3>{teamName}</h3>

            <div className="row">{FW.map(p => <div key={p.ID}>{p.FullName}</div>)}</div>
            <div className="row">{MF.map(p => <div key={p.ID}>{p.FullName}</div>)}</div>
            <div className="row">{DF.map(p => <div key={p.ID}>{p.FullName}</div>)}</div>
            <div className="row">{GK.map(p => <div key={p.ID}>{p.FullName}</div>)}</div>
        </div>
    )
}