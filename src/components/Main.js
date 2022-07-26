import { useState } from "react";
import moviesArray from "../data/movies.json"
import "./Main.css"

function Main() {

    const [movies, setMovies] = useState(moviesArray);

    const deleteMovie = (movieId) => {
        setMovies( (prevMovies) => {
            const newList = prevMovies.filter( (element) => {
                return element.id !== movieId;
            });
            return newList;
        });
    }


    let message;

    if(movies.length > 0) {
        message = <h2>There's {movies.length} amount of movies in our DB</h2>;
    } else {
        message = <h2>No movies.... 😔</h2>
    }


    return (
        <div className="Main">

            {message}

            {movies.map((movieObj) => {
                return (
                    <div key={movieObj.id} className="movie">
                        <h2>Title: {movieObj.title}</h2>
                        <h3>Rating: {movieObj.rating}</h3>

                        {/*
                        {movieObj.imgURL && <img src={movieObj.imgURL} alt={movieObj.title} />}
                        */}
                        
                        { movieObj.imgURL 
                            ? <img src={movieObj.imgURL} alt={movieObj.title} />
                            : <p>Sorry, no image</p>
                        }

                        <button onClick={() => { deleteMovie(movieObj.id) }}>Delete</button>
                    </div>
                )
            })}

        </div>
    );
}

export default Main;