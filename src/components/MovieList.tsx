import styles from './MovieList.module.css';
import Movie from './Movie';

interface MovieListProps {
    movies: Movie[];
    onSelectMovie: (id: string) => void;
}

function MovieList({ movies, onSelectMovie }: MovieListProps) {
    return (
        <ul className={styles.list}>
            {movies?.map((movie) => (
                <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
            ))}
        </ul>
    );
}

export default MovieList;
