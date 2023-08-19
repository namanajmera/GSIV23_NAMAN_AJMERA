import "./App.less";
import MovieContainer from "./Components/MovieContainer/MovieContainer";
import MovieDetailsContainer from "./Components/MovieContainer/MovieDetailsContainer/MovieDetailsContainer";
import NavBar from "./Components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="appContainer">
        <Routes>
          <Route excat path="/" element={<MovieContainer />} />
          <Route excat path="/movie/:id" element={<MovieDetailsContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
