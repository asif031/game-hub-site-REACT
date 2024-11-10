import { useState } from "react";
import SearchBar from "./components/SearchBar";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="App">
      {isDark && (document.body.style.backgroundColor = "black")}
      <SearchBar onToggle={() => setIsDark(!isDark)} />
    </div>
  );
}

export default App;
