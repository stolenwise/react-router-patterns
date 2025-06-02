import { Link } from 'react-router-dom';


function DogsList({ dogs }) {
  return (
    <div className="DogsList">
      <h1 className="display-3 text-center mt-3 mb-4">Choose a dog</h1>
      <div className="container">
        <div className="row">
          {dogs.map(dog => (
            <div className="col-6 col-lg-3 text-center" key={dog.name}>
              <Link to={`/dogs/${dog.name.toLowerCase()}`}>
             
                <h3>{dog.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DogsList;
