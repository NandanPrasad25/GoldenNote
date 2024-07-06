/* eslint-disable no-unused-vars */
import {
  Routes,
  Route,
} from "react-router-dom";


import PublicHomePage from "./pages/PublicHomePage";
import EventsPage from "./pages/EventsPage";
import NotesPage from "./pages/NotesPage";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <Routes>
      <Route path="/" index element={<PublicHomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
