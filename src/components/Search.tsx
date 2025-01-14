import { useRef } from 'react';
import styles from './NavBar.module.css';
import useKey from '../hooks/useKey';

interface SearchProps {
    query: string;
    setQuery: (query: string) => void;
}

function Search({ query, setQuery }: SearchProps) {
    const inputEl = useRef<HTMLInputElement | null>(null);

    useKey('Enter', function () {
        if (document.activeElement === inputEl.current) return;
        inputEl.current?.focus();
        setQuery('');
    });

    return <input className={styles.search} type='text' placeholder='Search movies...' value={query} onChange={(e) => setQuery(e.target.value)} ref={inputEl} />;
}

export default Search;
