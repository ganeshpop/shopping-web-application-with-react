import useFetch from "./useFetch";
import MovieRatingList from "./MovieRatingList";
import {useParams} from "react-router-dom";

const MovieRatings = () => {
  const {id} = useParams();
  const {data: ratings, isPending, error} = useFetch("http://localhost:8084/ratings/movies/" + id);
  let title = "Ratings of Movie " + id ;
  return (
    <div className="ratings">
    {isPending && <div>Loading......</div>}
    {error && <div> {error} </div>}
    {ratings && <MovieRatingList ratings={ratings} title = {title}/>}
    </div>
  );
}
 
export default MovieRatings;