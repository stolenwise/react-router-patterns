import './App.css';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Nav from './Nav';
import DogsList from './DogsList';
import DogDetails from './DogDetails';
import { DOGS } from './DogsData';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav dogs={DOGS} />
        <Routes>
          <Route path="/dogs" element={<DogsList dogs={DOGS} />} />
          <Route path="/dogs/:name" element={<DogDetails dogs={DOGS} />} />
         
          <Route path="*" element={<Navigate to="/dogs" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
