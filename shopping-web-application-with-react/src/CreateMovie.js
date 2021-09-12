import {useState} from 'react';

const CreateMovie = () => {
    const [name,setName]=useState(' ');

    const handleSubmit=(e)=>{
        e.preventDefault();
        const movie={name};
        fetch('http://localhost:8082/movies',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body :JSON.stringify(movie)
        }).then(()=>{
            console.log("New movie added");
        }
        )   
    }
    return (

        <div className="create">
            <h2>Add a new Movie</h2>
            <form onSubmit={handleSubmit}>
                <label>Movie Name : </label>
                <input 
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
                <button>Add Movie</button>
            </form>
        </div>
      );
}
 
export default CreateMovie;