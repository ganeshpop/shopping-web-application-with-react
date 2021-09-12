import {Link} from 'react-router-dom';


const MovieRatingList = (props) => {
    const title = props.title;
    const ratings = props.ratings.ratings;

    return (
        <div className="rating-list">
            <h2>{ title }</h2>
            {ratings.map(rating => (
                <div className="rating-preview" key={rating.id}>
                    <Link to={`/ratings/users/${rating.userId}`}>
                    <h3 className="user-id">User ID : {rating.userId}</h3>
                    </Link>
                    <h3>Rating : {rating.rating}/5</h3>
                </div>
            ))}
        </div>
    );
}

export default MovieRatingList;