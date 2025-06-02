import './App.css';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Nav from './Nav';
import DogsList from './dogs/DogsList';
import DogDetails from './dogs/DogDetails';
import { DOGS } from './DogsData';
import ColorRoutes from './colors/ColorRoutes';

import HomeLanding from './HomeLanding';


console.log({
  ColorRoutes,
  HomeLanding,
  Nav
});



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav dogs={DOGS} />
        <Routes>
          <Route path="/dogs" element={<DogsList dogs={DOGS} />} />
          <Route path="/dogs/:name" element={<DogDetails dogs={DOGS} />} />
          <Route path="/colors/*" element={<ColorRoutes />} />
         
          <Route path="/" element={<HomeLanding />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
