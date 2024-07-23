/* eslint-disable no-unused-vars */
import {
  Routes,
  Route,
} from "react-router-dom";


import PublicHomePage from "./pages/PublicHomePage";
import EventsPage from "./pages/EventsPage";
import NotesPage from "./pages/NotesPage";


function App() {
  return (
    <Routes>
      <Route path="" index element={<PublicHomePage />} />
      
      
    </Routes>
  );
}

export default App;
