import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Questions from './Components/Questions'
import Start from './Components/Start'
import Profile from './Components/Profile'
import Level1 from './Components/Level1'
import Level2 from './Components/Level2'
import Level3 from './Components/Level3'
import Level4 from './Components/Level4'


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
           <Route path='/level1' element={
            <Level1 />
          } />
          <Route path='/level2' element={
            <Level2 />
          } />
          <Route path='/level3' element={
            <Level3 />
          } />
          <Route path='/level4' element={
            <Level4 />
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
