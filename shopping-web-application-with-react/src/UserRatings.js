import useFetch from "./useFetch";
import {useParams} from "react-router-dom";
import UserRatingList from "./UserRatingList";

const UserRatings = () => {
    const {id} = useParams();
    const {data: ratings, isPending, error} = useFetch("http://localhost:8084/ratings/users/" + id);
    return (
        <div className="ratings">
            {isPending && <div>Loading......</div>}
            {error && <div> {error} </div>}
            {ratings && <UserRatingList ratings={ratings} title="Ratings" userId = {id}/>}
        </div>
    );
}

export default UserRatings;