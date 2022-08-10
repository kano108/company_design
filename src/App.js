import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CompanySetting from "./company_setting";
// import Header from "./header";
import Home from "./home";
import Positions from "./positions";
import Sidebar from "./sidebar";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  console.log("modelopen",modalOpen);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <>
            {/* <Sidebar /> */}
            {/* <Route path="/sidebar" element={< Sidebar setModalOpen={setModalOpen}/>} /> */}
            <Route path="/companySetting" element={modalOpen && <CompanySetting  setModalOpen={setModalOpen}/>}/>
            <Route path="/" element={<Home  setModalOpen={setModalOpen}/>} />
            <Route path="/position" element={<Positions />} />
          </>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
