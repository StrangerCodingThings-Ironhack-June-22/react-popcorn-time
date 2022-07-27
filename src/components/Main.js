import "./Main.css"
import Movie from "./Movie";

function Main(props) {

    return (
        <div className="Main">

            {props.movies.map((movieObj) => {
                // render Movie object, passing props with JSX spread attributes
                return <Movie key={movieObj.id} {...movieObj} callbackToDelete={props.callbackToDelete} />
            })}

        </div>
    );
}

export default Main;