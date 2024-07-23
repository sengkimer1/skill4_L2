import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import CropPage from "./pages/Croppage";
import CropTypePage from "./pages/CropTypepage";


const App = () => {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/crop" element={<CropPage />} />
        <Route path="/croptype" element={<CropTypePage />} />
      </Routes>
    </Router>
  );
};

export default App;
