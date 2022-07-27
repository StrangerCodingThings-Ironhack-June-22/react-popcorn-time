import "./Movie.css"

function Movie(props) {

    return (
        <div className="Movie">
            <h2>Title: {props.title}</h2>
            <h3>Rating: {props.rating}</h3>

            {props.imgURL
                ? <img src={props.imgURL} alt={props.title} />
                : <p>Sorry, no image</p>
            }

            <button onClick={() => {props.callbackToDeleteMovie(props.id)}}>Delete</button>
        </div>
    );
}

export default Movie;