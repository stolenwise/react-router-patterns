import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import ColorList from "./ColorList";
import ColorForm from "./ColorForm";
import ColorShow from "./ColorShow";

export default function ColorRoutes() {
  const [colors, setColors] = useState([
    { name: "Red",   hex: "ff0000" },
    { name: "Green", hex: "00ff00" },
    { name: "Blue",  hex: "0000ff" }
  ]);

  /* prepend a new colour object */
  const addColor = ({ name, hex }) =>
    setColors(prev => [{ name, hex: hex.toLowerCase() }, ...prev]);

  /* look-up helper */
  const findColor = (param) =>
    colors.find(c => c.hex === param.toLowerCase()) || null;

  return (
    <Routes>
      <Route index    element={<ColorList colors={colors} />} />
      <Route path="new"   element={<ColorForm addColor={addColor} />} />
      <Route path=":hex"  element={<ColorShow findColor={findColor} />} />
      <Route path="*"     element={<Navigate to="/colors" replace />} />
    </Routes>
  );
}

