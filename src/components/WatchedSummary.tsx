import styles from './WatchedSummary.module.css';
import Movie from './Movie';

interface WatchedSummaryProps {
    watched: Movie[];
}

function average(arr: number[]) {
    if (arr.length === 0) return 0;
    return arr.reduce((sum, val) => sum + val, 0) / arr.length;
}

function WatchedSummary({ watched }: WatchedSummaryProps) {
    const avgImdbRating = average(watched.map((movie) => parseFloat(movie.imdbRating)).filter((rating) => !isNaN(rating)));
    const avgUserRating = average(watched.map((movie) => movie.userRating ?? 0));
    const avgRuntime = average(watched.map((movie) => parseInt(movie.Runtime.split(' ')[0], 10)).filter((runtime) => !isNaN(runtime)));

    return (
        <div className={styles.summary}>
            <h2>Movies you watched</h2>
            <div>
                <p>
                    <span>#️⃣</span>
                    <span>
                        {watched.length} {watched.length === 1 ? 'movie' : 'movies'}
                    </span>
                </p>
                <p>
                    <span>⭐️</span>
                    <span>{avgImdbRating.toFixed(2)}</span>
                </p>
                <p>
                    <span>🌟</span>
                    <span>{avgUserRating.toFixed(2)}</span>
                </p>
                <p>
                    <span>⏳</span>
                    <span>{Math.round(avgRuntime)} min</span>
                </p>
            </div>
        </div>
    );
}

export default WatchedSummary;
