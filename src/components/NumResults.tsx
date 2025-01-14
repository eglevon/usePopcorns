import styles from './NavBar.module.css';
import Movie from './Movie';

interface NumResultsProps {
    movies: Movie[];
}

function NumResults({ movies }: NumResultsProps) {
    return (
        <p className={styles.numResults}>
            Found <strong>{movies.length}</strong> results
        </p>
    );
}

export default NumResults;
