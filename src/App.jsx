import DataProvider from "./context/DataContext"
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import HomePage from "./views/HomePage";
import MatchDetails from "./views/MatchDetails";

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
            <Route path="/match/:id" element={<MatchDetails />} />
          </Routes>

        </div>
      </BrowserRouter>
    </DataProvider>
  )
}

export default App
