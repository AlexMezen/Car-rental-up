import "./Header.css";
import Header from "./Header";
import Welcome from "./Welcome/Welcome";
import Loading from "./Loading";

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Loading />
    </div>
  );
}

export default App;
