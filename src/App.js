import "./App.css";
// import Header from "./header";
import Home from "./home";
import Sidebar from "./sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      {/* <Header /> */}
      <Home />
    </div>
  );
}

export default App;
