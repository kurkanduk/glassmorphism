import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Generator from './Components/Generator/generator';
import Layout from './Components/Layout/layout';
import Plates from './Components/Plates/plates';
import { useState } from 'react';

function App() {
  const [blur, setBlur] = useState(10);
  const [transparency, setTransparency] = useState(50);
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path='/' element={<><Plates blur={blur} transparency={transparency}/>
        <Generator blur={blur} transparency={transparency} setBlur={setBlur} setTransparency={setTransparency}/></>}></Route>
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
