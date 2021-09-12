import {Link} from 'react-router-dom';

  const MovieList = (props) => {
    const title = props.title;
    const movies = props.movies.movies;
    return (
        <div className="movie-list">
          <h2>{ title }</h2>
          {movies.map(movie => (
              <div className="movie-preview" key={movie.id} >
                <Link to={`/movies/${movie.id}`}>
                  <h2>{ movie.name }</h2>
                </Link>
              </div>
          ))}
        </div>
    );
}
 
export default MovieList;