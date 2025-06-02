import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";


export default function ColorForm({ addColor }) {
    const [hex,   setHex]   = useState("#0000ff"); // the colour itself
    const [name,  setName]  = useState("");    
    const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    addColor({ hex: hex.slice(1), name: name || hex });
    navigate("/colors");
  }


  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "400px",
        margin: "3rem auto",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <label>
        Pick a colour:
        <input
          type="color"
          value={hex}
          onChange={(e) => setHex(e.target.value)}
          style={{ width: "100%", height: "3rem", border: "none" }}
        />
      </label>

      Name this color:
      <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      />

      <button>Add</button>
      <Link to="/colors" style={{ textAlign: "center" }}>
        Cancel
      </Link>
    </form>
  );
}
