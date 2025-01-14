import { useEffect } from 'react';

function useKey(key: string, action: () => void): void {
    useEffect(
        function () {
            function callback(e: KeyboardEvent) {
                if (e.code.toLowerCase() === key.toLowerCase()) {
                    action();
                }
            }

            document.addEventListener('keydown', callback);

            return function () {
                document.removeEventListener('keydown', callback);
            };
        },
        [key, action]
    );
}

export default useKey;
