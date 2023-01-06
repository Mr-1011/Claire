

import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Questions from './Components/Questions'
import Start from './Components/Start'
import Profile from './Components/Profile'


import Animation from "./Components/Animation/Animation";




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={
<<<<<<< HEAD
            <Animation/>

          } />
          <Route path='/animation' element={
            <Animation />

=======
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
>>>>>>> b3293e7cbc4a46c2291fc12d69cfedb519be77a4
          } />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;

