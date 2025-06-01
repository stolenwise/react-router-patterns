import { NavLink } from 'react-router-dom';
import "./Nav.css"

function Nav({ dogs }) {
    return (
      <nav className="Nav">
        {/* link that always takes you “home” */}
        <NavLink className="Nav-home" to="/dogs">
          Dog Finder
        </NavLink>
  
        {/* one link per dog */}
        {dogs.map(dog => (
          <NavLink
            key={dog.name}
            className="Nav-dog"
            to={`/dogs/${dog.name.toLowerCase()}`}
          >
            {dog.name}
          </NavLink>
        ))}
      </nav>
    );
  }

export default Nav;