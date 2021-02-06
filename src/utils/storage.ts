/* global localStorage */
import { createContext, useContext, useState, useEffect, useCallback } from 'react';

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

  const updateStoreValue = useCallback((val: string) => {
    localStorage.setItem(key, val);
    setValue(val);
  }, [key]);
  const removeValue = useCallback(() => {
    localStorage.removeItem(key);
    setValue(undefined);
  }, [key]);
  return { value, setValue: updateStoreValue, removeValue };
};
