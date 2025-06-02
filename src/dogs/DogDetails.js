import { useParams, Navigate, Link } from "react-router-dom";


function DogDetails({ dogs }) {
  const { name } = useParams();
  const dog = dogs.find(
    d => d.name.toLowerCase() === name.toLowerCase()
  );

  if (!dog) return <Navigate to="/dogs" replace />;  // guard clause

  return (
    <div className="DogDetails">
        <div className="col-md-8">
          <h1 className="display-4">{dog.name}</h1>
          <h3>{dog.age} years old</h3>
          <ul className="list-group list-group-flush">
            {dog.facts.map(f => (
              <li className="list-group-item" key={f}>{f}</li>
            ))}
          </ul>
          <Link to="/dogs" className="btn btn-info mt-3">Back to list</Link>
        </div>
      </div>
   
  );
}

export default DogDetails;
