import { useState } from 'react';
import Logo from './components/Logo.js';
import NavBar from './components/NavBar.js';
import Main from './components/Main.tsx';
import Search from './components/Search.tsx';
import MovieList from './components/MovieList.tsx';
import Movie from './components/Movie.tsx';
import MovieDetails from './components/MovieDetails.tsx';
import Box from './components/Box.tsx';
import NumResults from './components/NumResults.tsx';
import WatchedMoviesList from './components/WatchedMoviesList.tsx';
import WatchedSummary from './components/WatchedSummary.tsx';
import Loader from './components/Loader.js';
import ErrorMessage from './components/ErrorMessage.js';
import useMovies from './hooks/useMovies.tsx';
import useLocalStorageState from './hooks/useLocalStorageState.tsx';

export default function App() {
    const [query, setQuery] = useState<string>('');
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const { movies, isLoading, error } = useMovies(query);

    const [watched, setWatched] = useLocalStorageState<Movie[]>([], 'watched');

    function handleSelectMovie(id: string) {
        setSelectedId((selectedId) => (id === selectedId ? null : id));
    }

    function handleAddWatched(movie: Movie) {
        setWatched((watched) => [...watched, movie]);
    }

    function handleCloseMovie() {
        setSelectedId(null);
    }

    function handleDeleteWatched(id: string) {
        setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
    }

    return (
        <>
            <NavBar>
                <Logo />
                <Search query={query} setQuery={setQuery} />
                <NumResults movies={movies} />
            </NavBar>
            <Main>
                <Box>
                    {isLoading && <Loader />}
                    {!isLoading && !error && <MovieList movies={movies} onSelectMovie={handleSelectMovie} />}
                    {error && <ErrorMessage message={error} />}
                </Box>
                <Box>
                    {selectedId ? (
                        <MovieDetails selectedId={selectedId} onCloseMovie={handleCloseMovie} onAddWatched={handleAddWatched} watched={watched} />
                    ) : (
                        <>
                            <WatchedSummary watched={watched} />
                            <WatchedMoviesList watched={watched} onDeleteWatched={handleDeleteWatched} onSelectMovie={handleSelectMovie} />
                        </>
                    )}
                </Box>
            </Main>
        </>
    );
}
