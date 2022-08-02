import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Header from "./header";
import Home from "./home";

import Positions from "./positions";
import Sidebar from "./sidebar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <Routes>
          <>
            <Route path="/" element={<Home />} />
            <Route path="/position" element={<Positions />} />
          </>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
