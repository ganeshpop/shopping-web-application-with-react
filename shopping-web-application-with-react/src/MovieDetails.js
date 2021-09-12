import {Link, useParams} from "react-router-dom";
import useFetch from "./useFetch";

const MovieDetails = () => {
    const {id} = useParams();
    const {data: movie, isPending, error} = useFetch("http://localhost:8082/movies/" + id);
    const {data: averageMovieRating} = useFetch("http://localhost:8084/ratings/movies/average/" + id);


    return (
        <div className="movie-details">
            {isPending && <div>Loading.....</div>}
            {error && <div>{error}</div>}
            {movie && (
                <article>
                    <h2 className="movie-name">Movie ID :{movie.id}</h2>
                    <h2>Movie Name : {movie.name}</h2>
                    <div>
                    <h3>Average Movie Rating : {averageMovieRating}</h3>
                    </div>
                    <div>
                        <Link to={`/ratings/movies/${movie.id}`}>
                            <h3 >Get Ratings of {movie.name}</h3>
                        </Link>
                    </div>
                </article>
            )}
        </div>
    );
}

export default MovieDetails;