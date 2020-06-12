import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    //set up state properly
    //capture the values
    //if localStorage data, use that otherwise use initialValues
    //update localStorage

    //1. set up state properly
    const [storedValue, setStoredValue] = useState(() => {
        //Get local storage by key
        const item = window.localStorage.getItem(key);
        //Parse and return stored JSON or, if undefined, return initialValue
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = (value) => {
        //save state
        setStoredValue(value);
        //save to local storage
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    return [storedValue, setValue];

};

