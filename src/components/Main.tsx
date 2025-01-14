import { ReactNode } from 'react';
import styles from './Main.module.css';

function Main({ children }: { children: ReactNode }) {
    return <main className={styles.main}>{children}</main>;
}

export default Main;
