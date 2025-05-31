import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Dogs from './Dogs.js';
import Whiskey from './Whiskey.js';
import Duke from './Duke.js';
import Perry from './Perry.js';
import Tubby from './Tubby.js';


function App() {
  App.defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: Whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Duke",
        age: 3,
        src: Duke,
        facts: [
          "Duke believes that ball is life.",
          "Duke likes snow.",
          "Duke enjoys pawing other dogs."
        ]
      },
      {
        name: "Perry",
        age: 4,
        src: Perry,
        facts: [
          "Perry loves all humans.",
          "Perry demolishes all snacks.",
          "Perry hates the rain."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: Tubby,
        facts: [
          "Tubby is really stupid.",
          "Tubby does not like walks.",
          "Angelina used to hate Tubby, but claims not to anymore."
        ]
      }
    ]
  }
  return (
    <div className="App">
    
       <BrowserRouter>
    <Routes>
      <Route path="/dogs" element={<Dogs />} />
      <Route path="/dogs/whiskey" element={<Whiskey />} />
      <Route path="/dogs/duke" element={<Duke />} />
      <Route path="/dogs/perry" element={<Perry />} />
      <Route path="/dogs/tubby" element={<Tubby />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
