import react from 'react';
import { Link } from 'react-router-dom';


const Whiskey = () => {
  return (
    <div>
      <h1>Whiskey</h1>
      <h3>Age: 5</h3>
      <h3>Facts:</h3>
      <ul>
        <li>Whiskey loves eating popcorn.</li>
        <li>Whiskey is a terrible guard dog.</li>
        <li>Whiskey wants to cuddle with you!</li>
      </ul>
      <Link to="/dogs">Go back</Link>
    </div>
  )
}

export default Whiskey;