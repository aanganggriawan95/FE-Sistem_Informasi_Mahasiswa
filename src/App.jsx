import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ButtonNavigasi from "./Components/Button_navigasi";
import Profil from "./Components/Profil";
import Home from "./Components/Home";
import Coba from "./Components/coba";
import Krs from "./Components/Krs";
import Berita from "./Components/Berita/Berita";
import Khs from "./Components/KHS";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import axios from "axios";
import Jadwal from "./Components/Jadwal";

axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/jadwal" element={<Jadwal />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/krs" element={<Krs />} />
          <Route path="/khs" element={<Khs />} />
          <Route path="/coba" element={<Coba />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
