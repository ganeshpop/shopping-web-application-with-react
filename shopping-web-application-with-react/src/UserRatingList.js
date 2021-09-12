import {Link} from 'react-router-dom';


const UserRatingList = (props) => {
    const title = props.title;
    const userId = props.userId;
    const ratings = props.ratings.ratings;
    return (
        <div className="rating-list">
            <h2>{ title } of User {userId}</h2>
            {ratings.map(rating => (
                <div className="rating-preview" key={rating.id}>
                    <br/>
                    <div>
                    <Link to={`/movies/${rating.movieId}`}>
                        <h3 className="movie-id">Movie ID: {rating.movieId}</h3>
                    </Link>
                    <br/>
                    </div>
                    <h3>Rating : {rating.rating}/5</h3>
                </div>
            ))}
        </div>
    );
}

export default UserRatingList;