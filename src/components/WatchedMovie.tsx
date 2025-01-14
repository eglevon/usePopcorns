import styles from './WatchedMoviesList.module.css';
import Movie from './Movie';

interface WatchedMovieProps {
    movie: Movie;
    onSelectMovie: (id: string) => void;
    onDeleteWatched: (id: string) => void;
}

function WatchedMovie({ movie, onSelectMovie, onDeleteWatched }: WatchedMovieProps) {
    return (
        <li>
            <div className={styles.watched} onClick={() => onSelectMovie(movie.imdbID)}>
                <img src={movie.Poster} alt={`${movie.Title} poster`} />
                <h3>{movie.Title}</h3>

                <div className={styles.watchedDetails}>
                    <p>
                        <span>⭐️</span>
                        <span>{movie.imdbRating}</span>
                    </p>
                    <p>
                        <span>🌟</span>
                        <span>{movie.userRating}</span>
                    </p>
                    <p>
                        <span>⏳</span>
                        <span>{movie.Runtime}</span>
                    </p>
                </div>
            </div>

            <button className={styles.btnDelete} onClick={() => onDeleteWatched(movie.imdbID)}>
                X
            </button>
        </li>
    );
}

export default WatchedMovie;
