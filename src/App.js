import './App.css';
import News from './components/News'
import Sports from './components/Sports'
import Business from './components/Business'
import Music from './components/Music'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route  path="/" element={<News/>} />
        <Route  path="/Sports" element={<Sports/>} />
        <Route  path="/Business" element={<Business/>} />
        <Route  path="/Music" element={<Music/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

