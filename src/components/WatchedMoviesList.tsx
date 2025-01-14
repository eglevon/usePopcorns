import styles from './WatchedMoviesList.module.css';
import Movie from './Movie';
import WatchedMovie from './WatchedMovie';

interface WatchedMoviesListProps {
    watched: Movie[];
    onSelectMovie: (id: string) => void;
    onDeleteWatched: (id: string) => void;
}

function WatchedMoviesList({ watched, onSelectMovie, onDeleteWatched }: WatchedMoviesListProps) {
    return (
        <ul className={styles.list}>
            {watched.map((movie) => (
                <WatchedMovie movie={movie} key={movie.imdbID} onDeleteWatched={onDeleteWatched} onSelectMovie={onSelectMovie} />
            ))}
        </ul>
    );
}

export default WatchedMoviesList;
