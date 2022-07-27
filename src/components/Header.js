import "./Header.css"

function Header(props) {

    let message;

    if(props.numberOfMovies > 0) {
        message = <h2>There's {props.numberOfMovies} amount of movies in our DB</h2>;
    } else {
        message = <h2>No movies.... 😔</h2>
    }

    return (
        <header className="Header">
            <h1>Popcorn Time!</h1>
            {message}
        </header>
    );
}

export default Header;