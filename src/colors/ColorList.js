import { Link } from "react-router-dom";

export default function ColorList({ colors }) {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Color Factory</h1>

      <p>
        <Link to="new">Add a new color</Link>
      </p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {colors.map(c => (
          <li key={c.hex}>
            <Link to={c.hex}>
              {/* show name if provided, otherwise show the hex */}
              {c.name ? c.name : `#${c.hex.toUpperCase()}`}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
