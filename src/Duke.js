import react from 'react';
import { Link } from 'react-router-dom';

const  Duke = () => {
  return (
    <div>
      <h1>Duke</h1>
      <h3>Age: 3</h3>
      <h3>Facts:</h3>
      <ul>
        <li>Duke believes that ball is life.</li>
        <li>Duke likes snow.</li>
        <li>Duke enjoys pawing other dogs.</li>
      </ul>
      <Link to="/dogs">Go back</Link>
    </div>
  )
}

export default Duke;