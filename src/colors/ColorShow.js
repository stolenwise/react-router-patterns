// ColorShow.js
import { useParams, Navigate, Link } from "react-router-dom";

export default function ColorShow({ findColor }) {
  const { hex } = useParams();
  const colorObj = findColor(hex); // returns { name, hex } or null

  if (!colorObj) return <Navigate to="/colors" replace />;

  return (
    <div
      style={{
        height: "100vh",
        background: `#${colorObj.hex}`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff"
      }}
    >
      <h1>{colorObj.name || `#${colorObj.hex.toUpperCase()}`}</h1>
      <Link to="/colors" style={{ color: "#fff", marginTop: "1rem" }}>
        Back
      </Link>
    </div>
  );
}
