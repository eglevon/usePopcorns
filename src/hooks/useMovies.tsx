import { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import { KEY } from '../Key';

interface UseMoviesResult {
    movies: Movie[];
    isLoading: boolean;
    error: string;
}

function useMovies(query: string): UseMoviesResult {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    useEffect(
        function () {
            const controller = new AbortController();

            async function fetchMovies() {
                try {
                    setIsLoading(true);
                    setError('');
                    const res = await fetch(`https://www.omdbapi.com/?apikey=${KEY}&s=${query}`, { signal: controller.signal });

                    if (!res.ok) throw new Error('Something went wrong...');

                    const data = await res.json();
                    if (data.Response === 'False') throw new Error('Movie not found');
                    setMovies(data.Search);
                    setError('');
                } catch (err) {
                    if ((err as Error).name !== 'AbortError') {
                        setError((err as Error).message);
                    }
                } finally {
                    setIsLoading(false);
                }
            }

            if (query.length < 3) {
                setMovies([]);
                setError('');
                return;
            }

            fetchMovies();

            return function () {
                controller.abort();
            };
        },
        [query]
    );

    return { movies, isLoading, error };
}

export default useMovies;
