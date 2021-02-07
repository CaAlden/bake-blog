import { createContext, useContext, useState, useEffect } from 'react';

export const useLocalStorageValue = (key: string) => {
  const [value, setValue] = useState<undefined | string>(localStorage.getItem(key));
  useEffect(() => {
    const listener = (e: StorageEvent) => {
      if (e.key === key) {
        setValue(localStorage.getItem(key));
      }
    }
    window.addEventListener('storage', listener);
    return () => {
      window.removeEventListener('storage', listener);
    };
  }, [key]);

  const updateStoreValue = (val: string) => {
    setValue(val);
    localStorage.setItem(key, val);
  };
  const removeValue = () => {
    localStorage.removeItem(key);
    setValue(undefined);
  };
  return { value, setValue: updateStoreValue, removeValue };
};
