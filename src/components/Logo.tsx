import styles from './NavBar.module.css';

function Logo() {
    return (
        <div className={styles.logo}>
            <span role='img'>🍿</span>
            <h1>usePopcorns</h1>
        </div>
    );
}

export default Logo;
