import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Speedometer from './components/speedometer/speedometer';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={
            <Speedometer />

          } />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;