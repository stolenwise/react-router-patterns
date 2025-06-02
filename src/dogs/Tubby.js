import react from 'react';
import { Link } from 'react-router-dom';

const Tubby = () => {
  return (
    <div>
      <h1>Tubby</h1>
      <h3>Age: 4</h3>
      <h3>Facts:</h3>
      <ul>
        <li>Tubby is really stupid.</li>
        <li>Tubby does not like walks.</li>
        <li>Angelina used to hate Tubby, but claims not to anymore.</li>
      </ul>
      <Link to="/dogs">Go back</Link>
    </div>
  )
}

export default Tubby;