import DataProvider from "./components/DataContext"
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import HomePage from "./views/HomePage"

function App() {


  return (
    <DataProvider>
      <BrowserRouter>
          <div className='app-container'>
          <nav className='nav'>
            <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
            <NavLink to="/counter" className={({ isActive }) => isActive ? "active-link" : ""}>
            Match Details</NavLink>
            <NavLink to="/clock" className={({ isActive }) => isActive ? "active-link" : ""}>Team Page</NavLink>
          </nav>

          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>

        </div>
      </BrowserRouter>
    </DataProvider>
  )
}

export default App
