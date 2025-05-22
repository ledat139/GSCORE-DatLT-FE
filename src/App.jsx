import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router";
import Search from "./pages/SearchScores";
import Dashboard from "./pages/dashboard";
import Report from "./pages/Report";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/search" element={<Search />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </>
  );
}

export default App;
