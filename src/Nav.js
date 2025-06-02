// src/Nav.js
import { NavLink } from "react-router-dom";
import "./Nav.css"; // make sure this file exists (see step 2)

function Nav({ dogs }) {
  return (
    <nav className="Nav">
      {/* Home for Dog Finder */}
      <NavLink to="/dogs" className="Nav-home">
        Dog Finder
      </NavLink>

      {/* Static link to Color Factory */}
      <NavLink to="/colors" className="Nav-item">
        Color Factory
      </NavLink>

      {/* One link per dog
      {dogs.map(dog => (
        <NavLink
        
          key={dog.name}
          to={`/dogs/${dog.name.toLowerCase()}`}
          className="Nav-item"
        >
          {dog.name}
        </NavLink>
      ))} */}
    </nav>
  );
}

export default Nav;