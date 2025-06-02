import { Link } from "react-router-dom";
import "./HomeLanding.css";      // optional styling

export default function HomeLanding() {
  return (
    <div className="HomeLanding">
      <h1>React-Router Patterns</h1>

      <div className="hub">
        <Link className="card" to="/dogs">
          Dog Finder
        </Link>

        <Link className="card" to="/colors">
          Color Factory
        </Link>
      </div>
    </div>
  );
}
