import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Questions from './Components/Questions'
import Start from './Components/Start'
import Profile from './Components/Profile'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={
            <Start />
          } />
          <Route path='/question' element={
            <Questions />
          } />
          <Route path='/profile' element={
            <Profile />
          } />
          <Route path='/speedometer' element={
            <h1>speedometer</h1>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;