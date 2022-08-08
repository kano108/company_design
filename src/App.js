import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CompanySetting from "./company_setting";
// import Header from "./header";
import Home from "./home";
import Positions from "./positions";
// import Sidebar from "./sidebar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <>
            {/* <Sidebar /> */}
            <Route path="/companySetting" element={<CompanySetting/>}/>
            <Route path="/" element={<Home />} />
            <Route path="/position" element={<Positions />} />
          </>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
