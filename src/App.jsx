import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ButtonNavigasi from "./Components/Button_navigasi";
import Profil from "./Components/Profil";
import Home from "./Components/Home";
import Coba from "./Components/coba";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/coba" element={<Coba />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
