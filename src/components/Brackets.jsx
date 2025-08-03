import { Bracket } from 'react-brackets';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';


function getTeamNameByID(teams, ID) {

    for(let i = 0; i < teams.length; i++) {
        const team = teams[i]
        if(ID == team.ID) {
            return team.Name
        }
    }
    return ''
}



function findNumberOfGroups(teams) {

    const arrayOfGroups = [];
    
    teams.forEach(team => {
        const teamGroup = team.Group;
        arrayOfGroups.push(teamGroup);
    });

    const uniqGroups = [...new Set(arrayOfGroups)];
    const numberOfGroups = uniqGroups.length;
    return numberOfGroups
}

export default function BracketComponent() {

// const rounds = [
//   {
//     title: 'Round one',
//     seeds: [
//       {
//         id: 1,
//         date: new Date().toDateString(),
//         teams: [{ name: 'Team A' }, { name: 'Team B' }],
//       },
//       {
//         id: 2,
//         date: new Date().toDateString(),
//         teams: [{ name: 'Team C' }, { name: 'Team D' }],
//       },
//       {
//         id: 3,
//         date: new Date().toDateString(),
//         teams: [{ name: 'Team C' }, { name: 'Team D' }],
//       },
//         {
//         id: 4,
//         date: new Date().toDateString(),
//         teams: [{ name: 'Team C' }, { name: 'Team D' }],
//       },
//     ],
//   },
//   {
//     title: 'Round two',
//     seeds: [
//       {
//         id: 3,
//         date: new Date().toDateString(),
//         teams: [{ name: 'Team A' }, { name: 'Team C' }],
//       },
//     ],
//   },
// ];

const { matches, teams } = useContext(DataContext);

if(!matches || matches.length == 0 || !teams || teams.length == 0) {
    return( <p>Loading...</p>)
}

//GROUP STAGE
const rounds = [];
let groupMatches;
const numberOfGroups = findNumberOfGroups(teams);

if(numberOfGroups == 6) {
    groupMatches = 36;
}else {
    groupMatches = 24;
}


const groupObj = {
        title: `Group stage`,
        seeds: []
    };

for(let i = 0; i < groupMatches; i++) {
    const match = matches[i]
    const AteamID = match.ATeamID
    const BteamID = match.BTeamID
    const AteamName = getTeamNameByID(teams, AteamID);
    const BteamName = getTeamNameByID(teams, BteamID);

    const seed = {
        id: i,
        date: match.Date,
        teams: [{name: AteamName}, {name: BteamName}]
    };
    
    groupObj.seeds.push(seed)
}
rounds.push(groupObj)

//ROUND OF 16

const roundSixteenIndex = numberOfGroups + 8;
const sixteenObj = {
        title: `Round of 16`,
        seeds: []
    };

for(let i = numberOfGroups; i < roundSixteenIndex; i++) {

    let match = matches[i]
    const AteamID = match.ATeamID
    const BteamID = match.BTeamID
    const AteamName = getTeamNameByID(teams, AteamID);
    const BteamName = getTeamNameByID(teams, BteamID);

     const seed = {
        id: i,
        date: match.Date,
        teams: [{name: AteamName}, {name: BteamName}]
    };

    sixteenObj.seeds.push(seed)
}

rounds.push(sixteenObj)

//QUARTER-FINAL

const quarterFinalIndex = roundSixteenIndex + 4
const quarterObj = {
        title: `Quarter-final`,
        seeds: []
    };

    for(let i = roundSixteenIndex; i < quarterFinalIndex; i++) {
        let match = matches[i]
    const AteamID = match.ATeamID
    const BteamID = match.BTeamID
    const AteamName = getTeamNameByID(teams, AteamID);
    const BteamName = getTeamNameByID(teams, BteamID);

     const seed = {
        id: i,
        date: match.Date,
        teams: [{name: AteamName}, {name: BteamName}]
    };

    quarterObj.seeds.push(seed)
    }
rounds.push(quarterObj)

  return (
        <Bracket rounds={rounds} />
  )
}