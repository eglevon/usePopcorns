import { ReactNode } from 'react';
import styles from './NavBar.module.css';

function NavBar({ children }: { children: ReactNode }) {
    return <nav className={styles.navbar}>{children}</nav>;
}

export default NavBar;
