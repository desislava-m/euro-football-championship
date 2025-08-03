import DataProvider from "./context/DataContext"
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import HomePage from "./views/HomePage";
import MatchDetails from "./views/MatchDetails";
import './App.css';
import TeamDetails from "./views/TeamDetails";
import BracketComponent from "./components/Brackets";

function App() {

  return (
    <DataProvider>
      <BrowserRouter>
          <div className='app-container'>
          <nav className='nav'>
            <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
          </nav>

          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/match/:id' element={<MatchDetails />} />
            <Route path='/team/:id' element={<TeamDetails />} />
          </Routes>

        </div>
        <BracketComponent />
      </BrowserRouter>
    </DataProvider>
  )
}

export default App
