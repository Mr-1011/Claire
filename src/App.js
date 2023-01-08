import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Questions from './Components/Questions'
import Start from './Components/Start'
import Profile from './Components/Profile'
import Animation from './Components/Animation/Animation';
import Animation_child from './Components/Animation/Animation_child';


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
            <Animation />
          } />
          <Route path='/speedometer_child' element={
            <Animation_child />
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;