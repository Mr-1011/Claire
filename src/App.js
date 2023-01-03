

import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Speedometer from './components/speedometer/speedometer';
import Animation from './components/Animation/Animation';
import Dashboard from './components/Dashboard/dashboard';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={
            <Animation/>

          } />
          <Route path='/animation' element={
            <Animation />

          } />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;

