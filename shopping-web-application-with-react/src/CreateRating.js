import {useState} from 'react';

const CreateRating = () => {
    const [userId, setUserId] = useState(' ');
    const [movieId, setMovieId] = useState(' ');
    const [rating, setRating] = useState(1);


    const handleSubmit = (e) => {
        e.preventDefault();
        const userRating = {userId, movieId, rating};
        fetch('http://localhost:8084/ratings', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(userRating)
        }).then(() => {
            console.log(userRating)
            console.log(JSON.stringify(userRating))
                console.log("New rating added");

            }
        )
    }
    return (

        <div className="create">
            <h2>Add a new Rating</h2>
            <form onSubmit={handleSubmit}>
                <label>User ID : </label>
                <input
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />
                <label>Movie ID : </label>
                <input
                    type="text"
                    value={movieId}
                    onChange={(e) => setMovieId(e.target.value)}
                />

                <label>Rating : </label>
                <select
                    value={rating}
                    onChange={(e)=>setRating(e.target.value)}
                >

                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
                <button>Add Rating</button>
            </form>
        </div>
    );
}

export default CreateRating;