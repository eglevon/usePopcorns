import { useEffect, useState } from 'react';
import styles from './MovieDetails.module.css';
import useKey from '../hooks/useKey.tsx';
import Movie from './Movie';
import ErrorMessage from './ErrorMessage';
import StarRating from './StarRating';
import Loader from './Loader.js';
import { KEY } from '../Key';

interface MovieDetailsProps {
    selectedId: string;
    onCloseMovie: () => void;
    onAddWatched: (movie: Movie) => void;
    watched: Movie[];
}

function MovieDetails({ selectedId, onCloseMovie, onAddWatched, watched }: MovieDetailsProps) {
    const [movie, setMovie] = useState<Movie | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [userRating, setUserRating] = useState<number | undefined>(undefined);

    const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
    const watchedUserRating = watched.find((movie) => movie.imdbID === selectedId)?.userRating;

    const { Title: title, Year: year, Poster: poster, Runtime: runtime, imdbRating, Plot: plot, Released: released, Actors: actors, Director: director, Genre: genre } = movie || {};

    function handleAdd() {
        if (!movie) return;
        const newWatchedMovie: Movie = {
            imdbID: selectedId,
            Title: title!,
            Year: year!,
            Poster: poster!,
            Runtime: runtime!,
            imdbRating: imdbRating!,
            userRating,
        };

        onAddWatched(newWatchedMovie);
        onCloseMovie();
    }

    useKey('Escape', onCloseMovie);

    useEffect(
        function () {
            async function getMovieDetails() {
                try {
                    setIsLoading(true);
                    const res = await fetch(`https://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`);
                    if (!res.ok) throw new Error('Something went wrong...');

                    const data: Movie = await res.json();
                    setMovie(data);
                } catch (err) {
                    setError((err as Error).message);
                } finally {
                    setIsLoading(false);
                }
            }

            getMovieDetails();
        },
        [selectedId]
    );

    useEffect(
        function () {
            if (!title) return;

            document.title = `Movie | ${title}`;

            return function () {
                document.title = 'usePopcorns';
            };
        },
        [title]
    );

    return (
        <div className={styles.details}>
            {isLoading && <Loader />}
            {!isLoading && !error && (
                <>
                    <header>
                        <button className={styles.btnBack} onClick={onCloseMovie}>
                            &larr;
                        </button>
                        <img src={poster} alt={`Poster of ${movie}`} />
                        <div className={styles.detailsOverview}>
                            <h2>{title}</h2>
                            <p>
                                {released} &bull; {runtime}
                            </p>
                            <p>{genre}</p>
                            <p>
                                <span>⭐</span>
                                {imdbRating} IMDb rating
                            </p>
                        </div>
                    </header>
                    <section>
                        <div className={styles.rating}>
                            {!isWatched ? (
                                <>
                                    <StarRating maxRating={10} size={24} onSetRating={setUserRating} />
                                    {userRating !== undefined && (
                                        <button className={styles.btnAdd} onClick={handleAdd}>
                                            + Add to list
                                        </button>
                                    )}
                                </>
                            ) : (
                                <p>
                                    You rated this movie &rarr; {watchedUserRating}
                                    <span>⭐</span>
                                </p>
                            )}
                        </div>
                        <p>
                            <em>{plot}</em>
                        </p>
                        <p>Starring {actors}</p>
                        <p>Directed by {director}</p>
                    </section>
                </>
            )}
            {error && <ErrorMessage message={error} />}
        </div>
    );
}

export default MovieDetails;
