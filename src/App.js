import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Questions from './Components/Questions'
import Start from './Components/Start'
import Profile from './Components/Profile'
import Animation from './Components/Animation/Animation';
import Animation2 from './Components/Animation/Animation2';
import Animation3 from './Components/Animation/Animation3';
import Animation4 from './Components/Animation/Animation4';
import Animation_child from './Components/Animation/Animation_child';
import Animation_child2 from './Components/Animation/Animation_child2';
import Animation_child3 from './Components/Animation/Animation_child3';
import Animation_child4 from './Components/Animation/Animation_child4';
import Speedometer from './Components/speedometer/speedometer';
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
            <Animation />
          } />
          <Route path='/speedometer2' element={
            <Animation2 />
          } />
          <Route path='/speedometer3' element={
            <Animation3 />
          } />
          <Route path='/speedometer4' element={
            <Animation5 />
          } />
          <Route path='/speedometer_child' element={
            <Animation_child />
          } />
          <Route path='/speedometer_child2' element={
            <Animation_child2 />
          } />
          <Route path='/speedometer_child3' element={
            <Animation_child3 />
          } />
          <Route path='/speedometer_child4' element={
            <Animation_child4 />
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