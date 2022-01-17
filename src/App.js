import './Welcome/Header.css';
import Welcomeheader from './Welcome/Welcomeheader'
import Welcome from './Welcome/Welcome';
import CarCard from './Welcome/CarCard';

function App() {
  return (
    <div className="App">
        <Welcomeheader/>
        <Welcome/>
        <CarCard/>
    </div>
  );
}

export default App;
