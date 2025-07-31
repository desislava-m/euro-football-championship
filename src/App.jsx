import DataProvider from "./components/DataContext"
import MatchUploader from "./components/MatchUploader"

function App() {


  return (
    <DataProvider>
      <MatchUploader />
    </DataProvider>
  )
}

export default App
