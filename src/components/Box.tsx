import { ReactNode, useState } from 'react';
import styles from './Box.module.css';

interface BoxProps {
    children: ReactNode;
}

function Box({ children }: BoxProps) {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    return (
        <div className={styles.box}>
            <button className={styles.btnToggle} onClick={() => setIsOpen((open) => !open)}>
                {isOpen ? '–' : '+'}
            </button>
            {isOpen && children}
        </div>
    );
}

export default Box;
