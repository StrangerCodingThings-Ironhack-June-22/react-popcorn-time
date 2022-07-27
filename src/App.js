import moviesArray from "./data/movies.json"
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { useState } from "react";

function App() {

  const [movies, setMovies] = useState(moviesArray);

  const deleteMovie = (movieId) => {
    setMovies((prevMovies) => {
      const newList = prevMovies.filter((element) => {
        return element.id !== movieId;
      });
      return newList;
    });
  }

  return (
    <>
      <Header numberOfMovies={movies.length} />
      <Main movies={movies} callbackToDelete={deleteMovie}  />
      <Footer />
    </>
  );
}

export default App;
