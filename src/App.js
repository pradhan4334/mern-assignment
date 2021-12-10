import './App.css';
import Navbar from './components/Navbar';
import RecentImages from './components/RecentImages';
import AllImages from './components/AllImages';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="recentAllImages">
      <RecentImages />
      <AllImages />

      </div>
    </div>
  );
}

export default App;
