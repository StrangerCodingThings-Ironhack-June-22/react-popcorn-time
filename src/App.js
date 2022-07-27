import moviesArray from "./data/movies.json"
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { useState } from "react";

function App() {

  const [movies, setMovies] = useState(moviesArray);

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [imgURL, setImgURL] = useState("");


  const deleteMovie = (movieId) => {
    setMovies((prevMovies) => {
      const newList = prevMovies.filter((element) => {
        return element.id !== movieId;
      });
      return newList;
    });
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      title,
      rating,
      imgURL,
    };

    // update list of movies
    setMovies( (prevMovies) => {
      return [newMovie, ...prevMovies];
    });

    // clear form
    setTitle("");
    setRating("");
    setImgURL("");

  }

  return (
    <>
      <Header numberOfMovies={movies.length} />

      <div id="create">
        <form onSubmit={handleSubmit}>
          <input required type="text" name="title" placeholder="enter the title of the movie" value={title} onChange={(e) => { setTitle(e.target.value) }} />
          <input required type="number" min={1} max={10} name="rating" placeholder="rating" value={rating} onChange={(e) => { setRating(e.target.value) }} />
          <input type="text" name="imgURL" placeholder="image url" value={imgURL} onChange={(e) => { setImgURL(e.target.value) }} />
          <button>Create</button>
        </form>
      </div>

      <Main movies={movies} callbackToDelete={deleteMovie}  />
      <Footer />
    </>
  );
}

export default App;
