/* eslint-disable no-unused-vars */
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import HomeFeaturePage from "./pages/HomeFeaturePage";
import EventsPage from "./pages/EventsPage";
import NotesPage from "./pages/NotesPage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <Routes>
      <Route path="/" index element={<HomeLayout />} />
      <Route path="/features" element={<HomeFeaturePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<SigninPage />} />
    </Routes>
  );
}

export default App;
