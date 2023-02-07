import { Routes, Route } from "react-router-dom";
import AllPokemon from "./components/AllPokemon";
import OnePokemon from "./components/OnePokemon";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/pokemon" element={<AllPokemon />} />
        <Route path="/pokemon/:id" element={<OnePokemon />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </div>
  );
}

export default App;
