import "./App.less";
import MovieContainer from "./Components/MovieContainer/MovieContainer";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="appContainer">
        <MovieContainer />
      </div>
    </div>
  );
}

export default App;
