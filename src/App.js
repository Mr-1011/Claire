

import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Animation from "./Components/Animation/Animation";




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

