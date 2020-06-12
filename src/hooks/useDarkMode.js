import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('checkDarkMode');

    useEffect(() => {
        if (darkMode === true) {
            //add dark-mode class to the body element
            document.body.classList.add('dark-mode');
            console.log("dark mode on");
            
        } else {
            //remove class from body element
            document.body.classList.remove('dark-mode');
            console.log("dark mode off");
        }
    },[darkMode]);

    return [darkMode, setDarkMode];
};
