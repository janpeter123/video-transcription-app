import { useState } from "react";
import "./App.css";
import Navbar from "./assets/components/navbar";
import MainContent from "./assets/components/mainContent";
import SearchBar from "./assets/components/searchBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <MainContent />
      <SearchBar />
    </div>
  );
}

export default App;
