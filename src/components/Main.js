import { useState } from "react";
import moviesArray from "../data/movies.json"
import "./Main.css"
import Movie from "./Movie";

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
                // render Movie object, passing props with JSX spread attributes
                return <Movie key={movieObj.id} {...movieObj} callbackToDeleteMovie={deleteMovie} />
            })}

        </div>
    );
}

export default Main;