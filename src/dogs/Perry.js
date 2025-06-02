import react from 'react';
import { Link } from 'react-router-dom';


const Perry = () => {
  return (
    <div>
      <h1>Perry</h1>
      <h3>Age: 4</h3>
      <h3>Facts:</h3>
      <ul>
        <li>Perry loves all humans.</li>
        <li>Perry demolishes all snacks.</li>
        <li>Perry hates the rain.</li>
      </ul>
      <Link to="/dogs">Go back</Link>
    </div>
  )
}

export default Perry;