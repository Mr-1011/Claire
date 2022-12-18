import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={
            <h1>start</h1>
          } />
          <Route path='/question' element={
            <h1>question</h1>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
