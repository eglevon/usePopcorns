interface Movie {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
    Runtime: string;
    imdbRating: string;
    Plot?: string;
    Released?: string;
    Actors?: string;
    Director?: string;
    Genre?: string;
    userRating?: number;
}

function Movie({ movie, onSelectMovie }: { movie: Movie; onSelectMovie: (id: string) => void }) {
    return (
        <li onClick={() => onSelectMovie(movie.imdbID)}>
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
            <h3>{movie.Title}</h3>
            <div>
                <p>
                    <span>🗓</span>
                    <span>{movie.Year}</span>
                </p>
            </div>
        </li>
    );
}

export default Movie;
