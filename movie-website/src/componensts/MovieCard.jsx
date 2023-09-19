import React from 'react';
// import { withRouter } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  
  const getMovieDetails = (imdbID) => {
    const navigate = useNavigate();
    navigate("/details?imdbID=" + imdbID);
  };

  return <div className="col-xs-2 col-sm-2 col-md-4">
    <div className="card mb-4" onClick={() => getMovieDetails(movie.imdbID)}>
      <img className="card-img-top" src={movie.Poster} alt={movie.Title} />
      <div className="card-body">
        <h5 className="card-title">{movie.Title}</h5>
        <p className="card-text">{movie.Year}</p>
        <a href="#" className="btn btn-primary">Details</a>
      </div>
    </div>
  </div>;
};

// export default withRouter(MovieCard);
export default MovieCard;
